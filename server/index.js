require('dotenv').load();
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var search = require('./routes/search.js');

var app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use('/search', search);
app.use('/', express.static(__dirname + '/../client/public'));

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
