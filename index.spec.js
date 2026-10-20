import request from "supertest";
import app from "./index.js";

describe('GET /', () => {
  it('Deve responder com a mensagem "Hello, World!"', async () => {

    const res = await request(app).get('/');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Hello, World!');
  });
});

describe('GET /sobre', () => {
  it('Deve responder com a mensagem "Sobre nós"', async () => {

    const res = await request(app).get('/sobre');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Sobre nós');
  });
});

describe('GET /contato', () => {
  it('should respond with an email "contact@example.com"', async () => {

    const res = await request(app).get('/contato');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('email', 'contato@example.com');
  });
});

describe('POST /login', () => {
  it('Deve responder com um token', async () => {

    const res = await request(app).post('/login');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token', 'abc123');
  });
});
