const Mongoose = require("mongoose");

const NetflixShowSchema = new Mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    season: {
      type: Number,
      default: 1,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    mediaType: {
      type: String,
      enum: ["Show", "Decumentry", "Anime"],
      default: "Show",
    },
    gereres: {
      type: [String],
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    cast: [
      {
        name: {
          type: String,
          required: true,
        },
        artistImage: {
          type: String,
          required: true,
        },
        role: {
          type: String,
          required: true,
        },
      },
    ],
    director: {
      type: [String],
      required: true,
    },
    episodes: [
      {
        title: {
          type: String,
          required: true,
        },
        mediaPath: {
          type: String,
          required: true,
        },
      },
    ],
    runTime: {
      type: String,
      required: true,
    },
    accessType: {
      type: String,
      enum: ["Basic", "Standard", "Premium"],
      default: "Basic",
    },
  },
  {
    timestamp: true,
    strict: false,
  }
);

const NetflixShowModel = Mongoose.model("Show", NetflixShowSchema);
module.exports = NetflixShowModel;
