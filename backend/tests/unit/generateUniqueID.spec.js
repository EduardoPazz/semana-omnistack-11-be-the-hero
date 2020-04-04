const generateUniqueID = require('../../src/utils/generateUniqueID');

describe('Generate Unique ID', /* A principal função do teste se chama describe. Esta é uma função que o próprio Jest cria. Ela aceita um nome qualquer como primeiro parâmetro (Claro que ele há de fazer sentido) e uma callback que fará os testes */ () => {
    /* Na callback, cada teste é informado por uma frase em inglês. Como o início de cada frase com um sujeito em terceira pessoa começa com it, este é o nome da função */
    it('should generate a 8 characters length ID', /* Assim como o describe, cada it recebe um nome (uma frase) como primeiro parâmetro, e uma callback como segundo para a criação do teste em si */ () => {
        /* Agora, em cada teste, teremos uma concatenação de funções: expect().toBe(). No expect, inserimos uma operação, e em toBe, o resultado que esperamos que essa operação retorne. Claro que é diversos outros testes possíveis de se fazer. Cada método será listado abaixo*/
        expect(generateUniqueID).toHaveLength(8);
    })
})

/* terminado a configuração do teste, basta executar o script npm test */