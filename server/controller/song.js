const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");
const { Song, validate } = require("../model/song");
const fs = require("fs");
const getAllSong = async (req, res) => {
  const song = await Song.find().sort({ createdAt: 1 });
  res.status(StatusCodes.OK).json(song);
};

const createSong = async (req, res) => {
  console.log(req.body);
  const { error } = validate(req.body);
  
  if (error) throw new BadRequestError(error?.details[0].message);
  const { img, song } = req.files;
  console.log("img", img);
  console.log("song", song);
  const imageFile = img[0];
  const songFile = song[0];
  const imagExt = imageFile?.originalname?.split(".")[1];
  const imagNewpath = imageFile?.path + "." + imagExt;
  fs.renameSync(imageFile?.path, imagNewpath);
  const songExt = songFile?.originalname?.split(".")[1];
  const songNewpath = songFile?.path + "." + songExt;
  fs.renameSync(songFile?.path, songNewpath);
  const {
    body: { title, artist, genre, language, country },
    user: { id },
  } = req;
  const newSong = await Song.create({
    title,
    artist,
    genre: genre,
    language,
    country,
    song: songNewpath,
    img: imagNewpath,
    userCreated: id,
  });

  res.status(StatusCodes.CREATED).json(newSong);
  console.log("create song");
};

const getSingleSong = async (req, res) => {
  const { id } = req.params;
  const song = await Song.findById(id);
  if (!song) {
    throw new NotFoundError(`Song not found`);
  }
  res.status(StatusCodes.OK).json({ success: true, data: song });
};

const updateSong = async (req, res) => {
  const { id } = req.params;
  let newFile;
  const { title, artist, genre, language, country } = req.body;
  console.log(title, artist, genre, language, country);
  if (req.files) {
    newFile = req.files?.map(({ originalname, path }) => {
      const ext = originalname?.split(".")[1];
      const newpath = path + "." + ext;
      fs.renameSync(path, newpath);
      return newpath;
    });
  }
  const song = await Song.findById(id);
  const newSong = await Song.findByIdAndUpdate(
    id,
    {
      title,
      artist,
      genre,
      language,
      country,
      img: newFile[1] || song?.img,
      song: newFile[0] || song?.song,
    },
    { new: true }
  );

  res.status(200).json(newSong);
};

const deleteSong = async (req, res) => {
  const { id } = req.params;
  const song = await Song.findByIdAndDelete(id);
  res.status(200).json({ message: "deleted successfully" });
};

module.exports = {
  createSong,
  getAllSong,
  getSingleSong,
  deleteSong,
  updateSong,
};
