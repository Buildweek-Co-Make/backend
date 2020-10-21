const request = require('supertest');
const server = require('./server.js');
const db = require('../database/dbConfig');
const { intersect } = require('../database/dbConfig');
const { expectCt } = require('helmet');
const testUser = { username: 'testing', password: 'testing' };

describe('server.js', () => {
    describe('GET request for issues', () => {
        it('should return a status code of 404 when not logged in', async () => {
            const res = await request(server).get('/api/issues');
            expect(res.status).toBe(404);
        });
        it('should return json', async () => {
            const res = await request(server).get('/api/issues');
            expect(res.type).toBe('application/json');
        });
        describe('registering new user', () => {
            it('should return a staus code of 201 when adding new user', async () => {
                await db('users').truncate();
                const res = await request(server)
                    .post('/api/auth/register')
                    .send(testUser);
                expect(res.status).toBe(201);
            });
            it('should return a 500 with an invalid user', async () => {
                const res = await request(server)
                    .post('/api/auth/register')
                    .send({ user: 'test', pass: 'test' });
                expect(res.status).toBe(500);
            });
        });
        describe('login with user', () => {
            it('should return a 404 with test user', async () => {
                const res = await request(server)
                    .post('/api/auth/login')
                    .send(testUser);
                     expect(res.status).toBe(404);
            });
            it('should return a 404 when given a non-valid user', async () => {
                const res = await request(server)
                    .post('/api/auth/login')
                    .send({ username: 'does not exist', password: 'does not exist' });
                    expect(res.status).toBe(404);
            });
        });
    });
});