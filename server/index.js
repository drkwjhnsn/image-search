require('dotenv').load();
var express = require('express');
var morgan = require('morgan');

var app = express();
app.use(morgan('tiny'));
app.use('/', express.static(__dirname + '/../client/public'));

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
