const BadRequestError = require("./badRequest");
const CustomApiError = require("./customApiError");
const NotFoundError = require("./not-found");
const UnAuthorizedError = require("./unauthorized");

module.exports = {
  BadRequestError,
  CustomApiError,
  NotFoundError,
  UnAuthorizedError,
};
