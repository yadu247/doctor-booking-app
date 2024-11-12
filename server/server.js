const express = require('express');
const cors = require('cors');
const ejs = require('ejs');
const db = require('./db');
const dotenv = require('dotenv');

const app = express();

dotenv.config({ path: './.env' });

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// routes
const routes = require('./routes');
app.use(routes);

app.use('*', (req, res) => {
  res.status(404).json({ message: 'No Route Found', error: true });
});

app.listen(8888, () => {
  console.log('Server is running @ https://localhost:8888/');
});
