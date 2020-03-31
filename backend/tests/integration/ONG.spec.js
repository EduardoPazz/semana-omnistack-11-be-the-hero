const supertest = require('supertest');
const app = require('../../src/app'); /* para testarmos rotas, precisamos importar nosso app.js (antigo index.js), que contém todos os métodos do express */
const connection = require('../../src/database/connection');

describe('ONG', () => {

    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    }); /* lembre-se que esse é o mesmo comando que npx knex migrate:rollback, que limpa o banco de dados, e npx knex migrate:latest, que ativa as migrations. Esses dois comandos são importantes para o teste poder ocorrer e sem influência de dados de testes passados */

    it('should be able to create a new ONG', async () => {
        /*
            A estrutura é a seguinte: 

            const response = supertest(app).post('/route').send({}) 

            O response é o retorno da nossa requisição teste.
            O supertest recebe como parâmetro nosso app com todas os métodos do express
            Então, o tipo de método HTTP é informado, sendo o parâmetro o recurso
            Por fim, o send conterá o corpo da requisição. No caso de JSON, enviamos um objeto.

            Porém, como estamos fazendo uma chamada ao banco de dados, a inicialização das migrations deve ser feita aqui pelo teste, e não pela linha de comando. Para isso vai existir o before. Existe o before, que executa uma vez, e o beforeEach, que executa a cada it.
        */
        const response = await supertest(app)
            .post('/ongs')
            .send({
                name: "Test",
                email: "test@test.com",
                whatsapp: "12345678910",
                city: "Test",
                uf: "TE"
            });
        expect(response.body).toHaveProperty('id'); /* Neste caso, nosso teste quer saber se o ID foi retornado e se ele possui o comprimento certo */
        expect(response.body.id).toHaveLength(8);
    });

    afterAll(async () => await connection.destroy()); /* Este comando fecha a conexão com o banco de dados e evita a mensagem de erro dizendo que outras operações continuram após a execução do teste */
});

/*
    toBe = igual à ...
    toHaveLength = que tenha o comprimento igual a...
    toHaveProperty = que este objeto tenha a propriedade ...
*/

/* para enviarmos informações no corpo da requisição, usamos o send. Para enviar informações nos HEADERS, usa-se o set. O set aceita como primeiro parâmetro o nome do HEADER e como segundo o seu valor */