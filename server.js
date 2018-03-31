const express    = require('express');
const app        = express();
const http       = require('http');
const bodyParser = require('body-parser');
const cors       = require('cors');
const allRoutes  = require('./controllers/all_routes');

app.use(cors());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/tether/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/', allRoutes);

app.listen('5000', () => {
    console.log('Running on port 5000');
});

module.exports = app;