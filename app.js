const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/page1', (req, res) => {
  res.send('Page 1');
});

app.get('/page2', (req, res) => {
  res.send('Page 2');
});

app.get('/page3', (req, res) => {
  res.send('Страница 3');
});

app.listen(3030, () => {
  console.log('http://localhost:3030/');
});
