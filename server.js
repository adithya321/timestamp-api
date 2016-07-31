var express = require('express');
var moment = require('moment');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
	res.sendFile(process.cwd() + '/public/index.html');
});

app.get('/:query', function(req, res) {
	var unix = req.params.query;
	var natural = moment.unix(unix).format("MMMM D, YYYY");

	var dateObj = { "unix": unix, "natural": natural };
	res.send(dateObj);
});

app.listen(port, function () {
	console.log('Example app listening on port ' + port);
});