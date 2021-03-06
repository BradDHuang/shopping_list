
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");

const items = require("./routes/api/items");

const app = express();

// bodyParser middleware
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

const db = require("./config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));
  
// use routes
app.use("/api/items", items);

// const port = process.env.PORT || 8081;
const port = 8081;

app.listen(port, () => console.log(`Server started on port ${port}`));







