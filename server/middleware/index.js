const auth = require("./auth");
const admin = require("./admin");
const validObjectId = require("./validObjectId");
const errorHandleMiddleware = require("./error-handler");
const notFoundMiddleware = require("./not-found");
module.exports = {
  auth,
  admin,
  validObjectId,
  errorHandleMiddleware,
  notFoundMiddleware,
};
