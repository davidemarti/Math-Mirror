const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'Page/presentation'))); //stringa per il css pubblico/visualizzabile
app.use(express.static(path.join(__dirname, 'Page/home'))); //stringa per il css pubblico/visualizzabile
app.use(express.static(path.join(__dirname, 'Page/game'))); //stringa per il css pubblico/visualizzabile

app.get('/', (req, res) => { 
    res.sendFile(path.join(`${__dirname}/Page/presentation/presentation.html`)); //pagina di presentazione
});

app.get('/game', (req, res) => {
    res.sendFile(path.join(`${__dirname}/Page/game/game.html`)); //pagina del game
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(`${__dirname}/Page/home/home.html`)); //pagina del game
});

app.listen(5000, () => {
    console.log("Listening on port 5000");
});