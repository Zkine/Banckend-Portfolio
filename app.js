const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





mongoose
  .connect(`mongodb+srv://${process.env.Key_MongoDB}`)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers'
    );
    next();
  });

  app.options("*", (req, res) => {
    console.log("preflight");
    console.log(req.headers["access-control-request-method"]);
    console.log(eq.headers);
  
    if (req.headers.origin === 'http://localhost:5173')  {
      console.log("pass");
      return res.status(204).send();
    } else {
      console.log("fail");
    }
  });


const messageRoute = require("./route/message");

app.use("/api/message", messageRoute);

module.exports = app;
