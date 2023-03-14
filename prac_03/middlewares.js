const { reviewSchema } = require("./schemas");
const HttpError = require("./utils/HttpError");

function validateReview(req, res, next) {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(item => item.message).join(',');
        console.log(msg);
        throw new HttpError(msg, 400);
    }
    else {
        next();
    }
};

module.exports = {
    validateReview
};