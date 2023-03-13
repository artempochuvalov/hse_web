const Joi = require("joi");

module.exports.reviewSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    rating: Joi.number().min(1).max(5),
    body: Joi.string().required.avoidHtml()
});