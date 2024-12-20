import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';  


chai.use(chaiHttp);


const { expect } = chai;

describe('Adoptions API', () => {

 
  it('Debe obtener todas las adopciones', (done) => {
    chai.request(app)  
      .get('/adoptions')  
      .end((err, res) => {
        expect(res).to.have.status(200);  
        expect(res.body).to.be.an('array');  
        done();  
      });
  });

  
  it('Debe crear una nueva adopción', (done) => {
    chai.request(app)  
      .post('/adoptions')  
      .send({
        animalId: 1, 
        userId: 2,
      })
      .end((err, res) => {
        expect(res).to.have.status(201);  
        expect(res.body).to.have.property('message').eql('Adopción creada'); 
      });
  });

});
