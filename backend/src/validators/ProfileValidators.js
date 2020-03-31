const {celebrate, Segments, Joi} = require('celebrate');

module.exports = {
    index: celebrate({
        [Segments.HEADERS]: Joi.object({
            auth: Joi.string().required(),
        }).unknown()
    }),
}




