const jwt = require("jsonwebtoken");
const constants = require("../../const");
const apiResponse = require("../apiResponse");

const createToken = (req, res, next) => {
  const {
    TOKEN: { SECURE_KEY, EXPIRESIN },
  } = constants;
  const payload = req.body;
  const token = jwt.sign(payload, SECURE_KEY, {
    expiresIn: EXPIRESIN,
  });
  req.token = token;
  next();
};

const validateToken = (req, res, next) => {
  const {
    HTTP: { UNAUTHORIZED },
    TOKEN: { SECURE_KEY },
  } = constants;
  const token = req.body.token;
  jwt.verify(token, SECURE_KEY, (err, decode) => {
    if (err) {
      return res.send(apiResponse("Unauthorized", UNAUTHORIZED, {}, err));
    }
    req.decoded = decode;
  });
  next();
};

module.exports = {
  createToken,
  validateToken,
};
