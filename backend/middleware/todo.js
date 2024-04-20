const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config");
const todoMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const word = token.split(" ");
    const jwtToken = word[1];
    const decodedValue = jwt.verify(jwtToken, jwt_secret);

    if (decodedValue.username) {
      next();
    } else {
      res.status(403).json({
        msg: "You are not authenticated",
      });
    }
  } catch (e) {
    res.json({
      msg: "Incorrect Inputs",
    });
  }
};

module.exports = todoMiddleware;
