import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello, World!' });
});

app.get('/sobre', (req, res) => {
  res.send({ message: 'Sobre nós' });
});

app.get('/contato', (req, res) => {
  res.send({ email: 'contato@example.com' });
});

app.post('/login', (req, res) => {
  res.status(200).send({ token: 'abc123' });
});

export default app;
