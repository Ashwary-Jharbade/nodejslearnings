const express = require("express");
const app = express();
require("dotenv").config();
const dbInit = require("./server");
const PORT = process.env.PORT || 3000;

const NetflixUserDetailModel = require("./src/API/Netflix/User/schema");
const NetflixMovieModel = require("./src/API/Netflix/Movie/schema");
const NetflixShowModel = require("./src/API/Netflix/Show/schema");

// Initiating DB
dbInit();

app.get("/", (req, res) => {
  res.send("<h1>Hello there</h1>");
});

app.get("/user", async (req, res) => {
  try {
    const userDetails = {
      name: "Ashwary Jharbade",
      email: "ashwary.jharbade@gmail.com",
      phone: "7999702847",
      plan: "Premium",
      billingCycle: "1m",
      planExpiryDate: new Date(),
      status: true,
    };
    const userDetailInstance = new NetflixUserDetailModel(userDetails);
    await userDetailInstance.save();
    return res.status(200).send("Account Created Successfully");
  } catch (error) {
    return res.status(404).send("Unable to create account");
  }
});

app.get("/movie", async (req, res) => {
  try {
    const movieDetails = {
      title: "Avengers",
      summary:
        "Marvel superheroes assembled for saving the Ney York city attacks from alien attack",
      poster: "https://marvel/moview/poster/avengers.png",
      mediaType: "Movie",
      generes: ["Action", "Sci-Fi"],
      releaseDate: new Date(),
      cast: [
        {
          name: "Robert Jr",
          artistImage:
            "https://finding-Nemo/famous/celebs/pictures/robert/downy/jr/rdj.jpeg",
          role: "Tony Stark/Iron Man",
        },
      ],
      director: ["Josh Whedon"],
      mediaPath: "https://marvel/movie/stream/netflix/path/avengers.mkv",
      runTime: "2h 33m",
      accessType: "Basic",
    };
    const movieDetailInstance = new NetflixMovieModel(movieDetails);
    await movieDetailInstance.save();
    return res.status(200).send("Movie Added Successfully");
  } catch (error) {
    return res.status(404).send("Unable to add movie");
  }
});

app.get("/show", async (req, res) => {
  try {
    const showDetails = {
      title: "Arrow",
      season: 1,
      summary:
        "After 5 year living in hell Oliver Quuen decides to protect his home Starling City as a viglante",
      poster: "https://netflix/show/poster/arrow.jpeg",
      mediaType: "Show",
      startDate: new Date(),
      endDate: new Date(),
      cast: [
        {
          name: "Jhon Doe",
          artistImage: "https://artist/image/jhon/doe/img/jpeg",
          role: "Oliver Queen/Green Arrow",
        },
      ],
      director: ["Arrow Director"],
      episodes: [
        {
          title: "1",
          mediaPath: "https://netflix/show/stream/arrow/s1/ep1/720p.mkv",
        },
      ],
      runTime: "1h",
      accessType: "Basic",
    };
    const showInstance = new NetflixShowModel(showDetails);
    await showInstance.save();
    return res.status(200).send("Show Added Successfully");
  } catch (error) {
    return res.status(404).send("Unable to add show");
  }
});

app.all("*", (req, res) => {
  res.send("<h1>Bad request</h1>");
});

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
