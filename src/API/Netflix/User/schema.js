const Mongoose = require("mongoose");

const NetflixUserDetailSchema = Mongoose.Schema(
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
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    plan: {
      type: String,
      enum: ["Basic", "Standard", "Premium"],
      default: "Basic",
    },
    billingCycle: {
      type: String,
      enum: ["1m", "3m", "6m", "1y"],
      default: "1m",
    },
    planExpiryDate: {
      type: Date,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamp: true,
    strict: false,
  }
);

const NetflixUserDetailModel = Mongoose.model(
  "UserDetail",
  NetflixUserDetailSchema
);
module.exports = NetflixUserDetailModel;
