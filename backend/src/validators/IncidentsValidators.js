const {celebrate, Segments, Joi} = require('celebrate');

module.exports = {
    index: celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(),
        })
    }),
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            value: Joi.number().required().min(1),
        }),
        [Segments.HEADERS]: Joi.object({ /* para validar headers, não usaremos o método keys, pois ele subentende que tudo dentro de keys será enviado en HEADERS, o que não é verdade. Nem sempre sabemos quais são todos os HEADERS enviandos. Para validar um único HEADER e ignorar os restantes, segue a sintaxe: */
            authentication: Joi.string().required(),
        }).unknown() /* este último método é super necessário nesse caso descrito acima */ ,
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().required()
        }),
        [Segments.HEADERS]: Joi.object({
            auth: Joi.string().required(),
        }).unknown(),
    }),
}




