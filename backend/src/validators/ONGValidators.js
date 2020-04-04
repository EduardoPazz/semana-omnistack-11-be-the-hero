const {celebrate, Segments, Joi} = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(), 
            email: Joi.string().required().email(), 
            whatsapp: Joi.string().required().min(10).max(11), 
            city: Joi.string().required(),
            uf: Joi.string().required().length(2),
        })
    })    
};




