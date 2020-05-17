const supertest = require('supertest');
const server = require('../index');
const db = require('../database/config')

beforeEach(async () => {
	await db.seed.run();
});

afterAll(async () => {
	await db.destroy();
});

describe('peanuts integration tests', () => {
	it('GET /peanuts', async () => {
		const res = await supertest(server).get('/peanuts');
		expect(res.statusCode).toBe(200);
		expect(res.type).toBe('application/json');
		expect(res.body).toHaveLength(7);
		expect(res.body[0].name).toBe('Charlie Brown');
		expect(res.body[2].name).toBe('Snoopy');
	});

	it('GET /peanuts/:id', async () => {
		const res = await supertest(server).get('/peanuts/7');
		expect(res.statusCode).toBe(200);
		expect(res.type).toBe('application/json');
		expect(res.body.name).toBe('Schroeder');
	});

	it('GET /peanuts/:id (not found)', async () => {
		const res = await supertest(server).get('/peanuts/100');
		expect(res.statusCode).toBe(404);
	});

	it('POST /peanuts', async () => {
		const data = { name: 'Peppermint Patty' };
		const res = await supertest(server).post('/peanuts').send(data);
		expect(res.statusCode).toBe(201);
		expect(res.type).toBe('application/json');
		expect(res.body.name).toBe('Peppermint Patty');
    });
    
    it('DELETE /peanuts/:id', async () => {
        const res = await supertest(server).delete('/peanuts/2');
        expect(res.statusCode).toBe(201);
    });

    it('DELETE /peanuts/:id (not found)', async () => {
		const res = await supertest(server).delete('/peanuts/1000');
		expect(res.statusCode).toBe(404);
	});
});