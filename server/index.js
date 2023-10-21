require("dotenv").config();
require("express-async-errors");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const multer = require("multer");
//routers
const userRoute = require("./routes/user");
const songRoute = require("./routes/song");
const googleRoute = require("./routes/authGoogle");
const albumRoute = require("./routes/album");
const artistRoute = require("./routes/artist");
// errorhandler middleware
const {
  auth,
  errorHandleMiddleware,
  notFoundMiddleware,
} = require("./middleware");

//uploading controllers
const { createSong } = require("./controller/song");
const { createUser } = require("./controller/user");
const { createArtist } = require("./controller/artist");
const uploadMiddleware = multer({ dest: "uploads/" });

const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use("/api/users", userRoute);
app.use("/api/songs", uploadMiddleware.any(), songRoute);
app.use("/api/google", googleRoute);
app.use("/api/albums", auth, albumRoute);
app.use("/api/artists", auth, artistRoute);
app.use(
  "/api/artists/new",
  uploadMiddleware.single("profileImage"),
  createArtist
);
app.use("/api/user/signup", uploadMiddleware.single("picture"), createUser);

app.use(
  "/api/song/create",
  uploadMiddleware.fields([
    { name: "song", maxCount: 1 },
    { name: "img", maxCount: 1 },
  ]),
  auth,
  createSong
);

app.get("/api", (req, res) => {
  res.json({ success: true, message: "welcome" });
});

app.use(notFoundMiddleware);
app.use(errorHandleMiddleware);
const start = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
};

start();
