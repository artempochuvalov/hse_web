const { Schema, model } = require("mongoose");

const ReviewSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    }
});

module.exports = model("Review", ReviewSchema);