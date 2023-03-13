const Review = require("../models/Review.js");

module.exports.index = async (req, res) => {
    const reviews = await Review.find({});
    res.render("reviews/index", { reviews });
};

module.exports.renderNewForm = (req, res) => {
    res.render("reviews/new");
};

module.exports.createReview = async (req, res) => {
    await Review.create({
        ...req.body
    });
    res.redirect("/");
};