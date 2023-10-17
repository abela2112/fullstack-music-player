const mongoose = require("mongoose");

const validObjectId = (req, res, next) => {
  const { id } = req.params;
  console.log('id',id)
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "invalid id" ,id});
  }
  next();
};
module.exports = validObjectId;
