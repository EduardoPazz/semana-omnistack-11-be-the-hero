const supertest = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    beforeAll( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    }); 

    it('should be able to create a new ONG', async () => {
        const response = await supertest(app)
            .post('/ongs')
            .send({
                name: "Test",
                email: "test@test.com",
                whatsapp: "12345678910",
                city: "Test",
                uf: "TE"
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

    afterAll(async () => await connection.destroy());
});

/*
    toBe = igual à ...
    toHaveLength = que tenha o comprimento igual a...
    toHaveProperty = que este objeto tenha a propriedade ...
*/

/* para enviarmos informações no corpo da requisição, usamos o send. Para enviar informações nos HEADERS, usa-se o set. O set aceita como primeiro parâmetro o nome do HEADER e como segundo o seu valor */