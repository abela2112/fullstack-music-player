const jwt = require("jsonwebtoken");
const { UnAuthorizedError, BadRequestError } = require("../errors");
const auth = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization?.split(" ")[1];
  if (!token) {
    throw new UnAuthorizedError("Access denied");
    // return res.status(400).json({ message: "Access denied no token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (error, token) => {
    if (error) {
      // return res.status(400).json({ message: "invalid token" });
      throw new BadRequestError("invalid token");
    } else {
      req.user = token;
      next();
    }
  });
};

module.exports = auth;
