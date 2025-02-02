require("dotenv").config();
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser"); // latest version of exressJS now comes with Body-Parser!
const bcrypt = require("bcrypt-nodejs");
const saltRounds = 10;
const cors = require("cors");
const knex = require("knex");
const res = require("express/lib/response");

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
// const clarifai = require("./controllers/clarifai");
// const image = require("./controllers/image");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; 

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  },
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // latest version of exressJS now comes with Body-Parser!

app.get("/", (req, res) => {
  res.send("success");
});

app.post("/signin", signin.handleSignIn(db, bcrypt));

app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt, saltRounds);
});

app.get("/profile/:id", (req, res) => {
  profile.handleRegister(req, res, db);
});


app.post("/clarifai", async (req, res) => {
  // clarifai.handleClarifaiApiCall(req, res);
  try {
    const response = await axios.post(
      "https://api.clarifai.com/v2/models/general-image-recognition/outputs",
      req.body,
      {
        headers: {
          "Authorization": `Key ${process.env.CLARIFAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Server error" });
  }
});

// app.put("/image", (req, res) => {
//   image.handleImage(req, res, db);
// });

// app.post("/imageurl", (req, res) => {
//   image.handleApiCall(req, res);
// });

const PORT = process.env.PORT;
app.listen(PORT || 3000, ()=> { 
  console.log(`app is running on port ${PORT}`) 
})
