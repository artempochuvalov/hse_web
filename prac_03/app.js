const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const ReviewsController = require("./controllers/reviews.controller.js");

const app = express();

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended:true }));

app.get("/", ReviewsController.index);

app.get("/new", ReviewsController.renderNewForm);

app.post("/review", ReviewsController.createReview);

module.exports = app;