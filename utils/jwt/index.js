const jwt = require("jsonwebtoken");
const tokenConstants = require("../../const");

const createToken = (payload) => {
  const token = jwt.sign(payload, tokenConstants.secureKey, {
    expiresIn: tokenConstants.expiresIn,
  });
  return token;
};

const validateToken = (req, res, next) => {
  const token = req.body.token;
  jwt.verify(token, tokenConstants.secureKey, (err, decode) => {
    if (err) {
      res.status(401).send("Unauthorized");
    }
    console.log(decode);
  });
  next();
};

module.exports = {
  createToken,
  validateToken,
};
