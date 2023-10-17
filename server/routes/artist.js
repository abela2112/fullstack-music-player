const {
  createArtist,
  getAllArtist,
  getSingleArtist,
  deleteArtist,
  updateArtist,
} = require("../controller/artist");
const router = require("express").Router();

router.route("/").get(getAllArtist)
router
  .route("/:id")
  .get(getSingleArtist)
  .put(updateArtist)
  .delete(deleteArtist);

module.exports = router;
