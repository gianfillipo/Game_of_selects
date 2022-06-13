// Require dependencies
const express = require('express');
const cors = require('cors');
const path = require('path');
const porta = 3333;


const app = express();

const pages = require('./src/routes/pages');
const gameSelects = require('./src/routes/gameRoutes');

//Routes config
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cors());

// Server Routes
app.use('/', pages);
app.use('/game-selects', gameSelects);

app.listen(porta, () => {
    console.log(`Server conectado na porta ${porta}`);
})
