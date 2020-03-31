const {celebrate, Segments, Joi} = require('celebrate');

module.exports = {
    create: celebrate({ /* O celebrate irá receber um objeto que conterá as validações */
        [Segments.BODY /* Aqui usamos o Segments. O Segments irá selecionar qual parâmetro da requisição vamos validar, seja as queries, routes params ou o BODY, além de ser possível validar cookies também. Essa primeira delcaração precisa estar envolta de colchetes */]: /* a atribuição é com : */ Joi.object( /* em seguida usamos o Joi seguido do método com o tipo de dados que validaremos. No caso, como estamos tratando de JSON, trataremos objetos. Esse método não aceita parâmetro */ ).keys( /* então, usamos mais um submétodos, chamado keys, pra definir os campos que validaremos. Como o tipo é um objeto, abrimos um objeto para informar as keys: */ {
            name: Joi.string().required(), /* Eis a validação em si: isso diz que name precisa ser uma string e é obrigatório */
            email: Joi.string().required().email(), /* Além de validar as mesmas coisas que name, esse campo valida que a string tem de ser do formato 'email' */
            whatsapp: Joi.string().required().min(10).max(11), /* Tanto para números quanto para strings, é possível informar o tamanho máximo do campo */
            city: Joi.string().required(),
            uf: Joi.string().required().length(2), /* caso o campo TENHA que ter um tamanho específico, informar o o min e max com o mesmo valor dá no mesmo que usar o método length */
        })
    })    
};




