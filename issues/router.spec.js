const request = require('supertest')

const server = require('../api/server')

describe('issues router', function(){
    it('should run the tests', function() {
        expect(true).toBe(true)
    })

    describe('GET /', function() {
        it('should return 200', function() {
            return request(server).get('/api/issues')
            .then(res => {
                expect(res.status).toBe(200);
            });
        });
        
        });
       
        it('should return JSON formatted body ', function(){
            return request(server)
                .get('/api/issues')
                .then(res => {
                    expect(res.type).toMatch(/json/)
            });
        });
    });
