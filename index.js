const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
