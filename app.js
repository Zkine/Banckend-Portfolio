const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

mongoose
  .connect(`mongodb+srv://${process.env.Key_MongoDB}`)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// app.use((req, res, next) => {
//   // res.setHeader("Access-Control-Allow-Origin", "corsOptions");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "POST");
//   next();
// });

const messageRoute = require("./route/message");

app.use("/api/message", messageRoute);

module.exports = app;
