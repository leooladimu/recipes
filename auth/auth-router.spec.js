const request = require('supertest');
const server = require('../api/server.js');

describe('the auth-router', () => {

  describe('POST /register',() => {
    it('responds with json', () => {
      request(server)
        .post('/api/auth/register')
        .send({ username: 'Ashley', password: '123' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/ )
        .expect(200)
        .end((err, res) => {
          if(err) return document(err);
          else(done());
        })
    })
  })

  describe('/login', () => {
    it('responds with json', () => {
      request(server)
        .post('/api/auth/register')
        .send({ username: 'Ashley', password: '123' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/ )
        .expect(200)
        .end((err, res) => {
          if(err) return document(err);
          else(done());
        })
    })
  })
})
