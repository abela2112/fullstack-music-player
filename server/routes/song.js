const express = require("express");
const { auth, admin, validObjectId } = require("../middleware");
const {
  createSong,
  getAllSong,
  getSingleSong,
  deleteSong,
  updateSong,
} = require("../controller/song");
const router = express.Router();
router.get("/", getAllSong);
router.get("/:id",[validObjectId, auth], getSingleSong);
router.post("/create", auth, createSong);
router.patch("/:id", [validObjectId, auth], updateSong);
router.delete("/:id", [validObjectId, auth], deleteSong);


module.exports = router;
