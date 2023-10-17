const express = require("express");
const mongoose = require("mongoose");

const userRoute = require("./routes/user");
const songRoute = require("./routes/song");
const fs = require("fs");
const googleRoute = require("./routes/authGoogle");
const albumRoute = require("./routes/album");
const artistRoute = require("./routes/artist");
const cors = require("cors");
const { auth } = require("./middleware");
require("dotenv").config();
require("express-async-errors");
const multer = require("multer");
const { createSong } = require("./controller/song");
const { Song } = require("./model/song");
const { createUser } = require("./controller/user");
const { createArtist } = require("./controller/artist");

const uploadMiddleware = multer({ dest: "uploads/" });
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/api/users", userRoute);
app.use("/api/songs", songRoute);
app.use("/api/google", googleRoute);
app.use("/api/albums", auth, albumRoute);
app.use("/api/artists", auth, artistRoute);
app.use("/api/artists/new", uploadMiddleware.single('profileImage'), createArtist);
app.use('/api/user/signup',uploadMiddleware.single('profileImage'),createUser)

app.use(
  "/api/song/create",
  uploadMiddleware.fields([
    { name: "song", maxCount: 1 },
    { name: "img", maxCount: 8 },
  ]),
  auth,async (req, res) => {
    try {
       const { img, song } = req.files;
    const imageFile = img[0]
    const songFile = song[0];
    const imagExt = imageFile?.originalname?.split(".")[1];
    const imagNewpath = imageFile?.path + "." + imagExt;
    fs.renameSync(imageFile?.path, imagNewpath);

    const songExt = songFile?.originalname?.split(".")[1];
    const songNewpath = songFile?.path + "." + songExt;
    fs.renameSync(songFile?.path, songNewpath);
    
    const {
      body: { title,artist,genre,language,country },
      user:{ id}
      
    } = req;
    const newSong = await Song.create({
      title,
      artist,
      genre:genre,
      language,
      country ,
      song:songNewpath,
      img:imagNewpath,
      userCreated:id
     
      
    });

    res.status(200).json({ success: true, data: newSong });
  console.log('create song');
    } catch (error) {
      res.status(500).json({ success: false,message:error.message });
    }
   }
);

app.get("/api", (req, res) => {
  res.json({ success: true, message: "welcome" });
});
const start = async () => {
  
  await mongoose.connect(process.env.MONGODB_URL)
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
};

start();
