const TOKEN = {
  SECURE_KEY: process.env.SECURE_KEY || "sdgvsdbn2qe2332l324asfa532asd5sfc",
  EXPIRESIN: process.env.EXPIRY_TIME || 60,
};

const HTTP = {
  SUCCESS: 200,
  SUCCESS_CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

module.exports = {
  TOKEN,
  HTTP,
};
