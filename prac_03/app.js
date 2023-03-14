const express = require("express");
const ejsMate = require('ejs-mate');

const path = require("path");
const bodyParser = require("body-parser");

const ReviewsController = require("./controllers/reviews.controller.js");
const { validateReview } = require("./middlewares.js");
const catchAsync = require("./utils/catchAsync.js");

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", ReviewsController.index);

app.get("/new", ReviewsController.renderNewForm);

app.post("/review", validateReview, ReviewsController.createReview);

app.use(catchAsync);

app.get("*", (_req, res) => {
    res.status(404, "Not Found");
});

module.exports = app;