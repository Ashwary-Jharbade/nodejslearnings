const { Mongoose } = require("mongoose");

const netflixUserProfileSchema = new Mongoose.schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamp: true,
    strict: false,
  }
);

const netflixUser = Mongoose.model(
  "netflixUserProfile",
  netflixUserProfileSchema
);
module.exports = netflixUser;
