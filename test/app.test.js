const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

const should = require('should');

describe('test/app.test.js', function() {
  it('should return "This is GET API" when GET /', () => {
    request.get('/')
        .end(function(err, res) {
          should.not.exist(err);
          res.text.should.equal('This is a GET API');
        });
  });
  it('should return "This is POST API" when POST /', () => {
    request.post('/')
        .end(function(err, res) {
          should.not.exist(err);
          res.text.should.equal('This is a POST API');
        });
  });
  it('should return "This is PUT API" when PUT /', () => {
    request.put('/')
        .end(function(err, res) {
          should.not.exist(err);
          res.text.should.equal('This is a PUT API');
        });
  });
  it('should return "This is DELETE API" when DELETE /', () => {
    request.delete('/')
        .end(function(err, res) {
          should.not.exist(err);
          res.text.should.equal('This is a DELETE API');
        });
  });
  it('should return "User id is correct" when POST /user/13579', () => {
    request.post('/user/13579')
        .end(function(err, res) {
          should.not.exist(err);
          res.text.should.equal('User id is wrong');
        });
  });
  it('should return "User id is correct" when POST /user/12345', () => {
    request.post('/user/12345')
        .end(function(err, res) {
          should.not.exist(err);
          res.text.should.equal('User id is correct');
        });
  });
  it('should return "12" when GET addFive/7', () => {
    request.get('/addFive/7')
        .end(function(err, res) {
          should.not.exist(err);
          res.text.should.equal('12');
        });
  });
});
