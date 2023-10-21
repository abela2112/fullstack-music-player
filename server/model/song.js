const { model, Schema } = require("mongoose");
const Joi = require("joi");

const songSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  song: { type: String, required: true },
  img: { type: String, required: true },
  album: { type: Schema.Types.ObjectId, ref: "album" },
  genre: { type: String },
  country: { type: String },
  language: { type: String },
  userCreated: { type: Schema.Types.ObjectId, ref: "user" },
  lyrics: { type: String },
});
const validate = (song) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    language: Joi.string().required(),
    genre: Joi.string().required(),
    artist: Joi.string().required(),
    country: Joi.string().allow(),
  });
  return schema.validate(song);
};
const Song = model("song", songSchema);
module.exports = { Song, validate };
