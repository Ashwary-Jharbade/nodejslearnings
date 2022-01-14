const Mongoose = require("mongoose");

const NetflixMovieSchema = Mongoose.Schema(
  {
    title: {
      type: String,
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
      enum: ["Movie", "Show", "Documentry", "Short Film"],
      default: "Movie",
    },
    generes: {
      type: Array,
      required: true,
    },
    releaseDate: {
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
      type: Array,
      required: true,
    },
    mediaPath: {
      type: String,
      required: true,
    },
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

const NetflixMovieModel = Mongoose.model("Movie", NetflixMovieSchema);
module.exports = NetflixMovieModel;
