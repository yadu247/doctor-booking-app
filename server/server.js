const express = require('express');
const cors = require('cors');
const ejs = require('ejs');
const db = require('./db');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 8888;

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

app.listen(port, () => {
  console.log(`Server is running @ https://localhost:/${port}`);
});
