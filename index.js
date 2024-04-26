const express = require('express');
const router = require('./routes');
const { initDB } = require('./services/db');

const app = express();

app.use(express.json())
initDB();
app.use(router)

app.listen('8080', () => console.log(`http://localhost:8080`))