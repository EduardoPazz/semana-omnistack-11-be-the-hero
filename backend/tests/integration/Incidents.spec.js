const supertest = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

let idTest; /* a ong id to be used in the tests */

describe('Incidents', () => {
    beforeAll(async () => {
        await connection.migrate.rollback(); /* erase database */
        await connection.migrate.latest(); /*  */

        const { body: { id } } = await supertest(app) /* create a ong for test */
            .post('/ongs')
            .send({
                name: "Test",
                email: "test@test.com",
                whatsapp: "12345678910",
                city: "Test",
                uf: "TE"
            });

        idTest = id;

        console.log(id);
        console.log(idTest);

        await supertest(app) /* create a incident for the test ong */
            .post('/incidents')
            .set('authentication', idTest)
            .send({
                title: 'Example',
                description: 'Example',
                value: 69,
            });            
    });

    it('should be able to list all incidents', async () => {
        const response = await supertest(app)
            .get(`/incidents`)
            .send();

        expect(response.headers).toHaveProperty('x-total-count');
    })

    it('should be able to create a new incident', async () => {
        const response = await supertest(app)
            .post('/incidents/')
            .set('authentication', idTest)
            .send({
                title: 'Example',
                description: 'Example',
                value: 69,
            });

        expect(response.body).toHaveProperty('id')
    })

    it('should be able to delete a incident', async () => {
        const response = await supertest(app)
            .delete('/incidents/1')
            .set('auth', idTest)
            .send();

        expect(response.statusCode).toBe(204);
    })

    afterAll(async () => connection.destroy());
});