const rateLimitConstants = require("./const").rateLimitConstants;
const crypto = require("crypto");

const getNewExpirationTime = () => {
  const { timeLimit } = rateLimitConstants;
  const currentTime = new Date();
  const min = currentTime.getMinutes();
  currentTime.setMinutes(min + timeLimit);
  return currentTime.getTime();
};

const userAPIAccessDetailsManager = () => {
  const userAPIAccessDetails = {};
  return (req, res) => {
    const { totalCount, alogorithm, digestType } = rateLimitConstants;
    const userId = req.socket.remoteAddress;
    const hashedUserId = crypto
      .createHash(alogorithm)
      .update(userId)
      .digest(digestType);
    const currentTime = new Date().getTime();
    if (userAPIAccessDetails[hashedUserId]) {
      const userDetails = userAPIAccessDetails[hashedUserId];
      if (currentTime < userDetails.expirationTime) {
        const { remainingCount } = userAPIAccessDetails[hashedUserId];
        if (!remainingCount)
          return res.status(429).send({
            header: { "Content-Type": "text/html" },
            message: "Request Count Exceeded",
          });
        userAPIAccessDetails[hashedUserId] = {
          ...userAPIAccessDetails[hashedUserId],
          currentTime,
          remainingCount: remainingCount - 1,
        };
        return;
      }
    }
    const expirationTime = getNewExpirationTime();
    userAPIAccessDetails[hashedUserId] = {
      totalCount,
      expirationTime,
      currentTime,
      remainingCount: totalCount - 1,
    };
    return;
  };
};

const rateLimitAPI = userAPIAccessDetailsManager();

module.exports = rateLimitAPI;
