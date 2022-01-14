const express = require("express");
const app = express();
require("dotenv").config();
const dbInit = require("./server");
const PORT = process.env.PORT || 3000;

const NetflixUserDetailModel = require("./src/API/Netflix/User/schema");
const NetflixMovieModel = require("./src/API/Netflix/Movie/schema");

// Initiating DB
dbInit();

app.get("/", (req, res) => {
  res.send("<h1>Hello there</h1>");
});

app.get("/user", async (req, res) => {
  try {
    const userDetails = {
      name: "Ashwary Jharbade",
      email: "ashwary.jharbade99@gmail.com",
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
    return res.status(404).send("Account Creation Failed");
  }
});

app.get("/movie", async (req, res) => {
  try {
    const moviewDetails = {
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
          artistImage: "",
          role: "Tony Stark/Iron Man",
        },
      ],
      director: ["Josh Whedon"],
      mediaPath: "https://marvel/movie/stream/netflix/path/avengers.mkv",
      runTime: "2h 33m",
      accessType: "Basic",
    };
    const movieDetailInstance = new NetflixMovieModel(moviewDetails);
    await movieDetailInstance.save();
    return res.status(200).send("Account Created Successfully");
  } catch (error) {
    return res.status(404).send("Account Creation Failed");
  }
});

app.all("*", (req, res) => {
  res.send("<h1>Bad request</h1>");
});

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
