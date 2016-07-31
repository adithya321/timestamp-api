var express = require('express');
var moment = require('moment');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
	res.sendFile(process.cwd() + '/public/index.html');
});

app.get('/:query', function(req, res) {
	var date = req.params.query;
	var unix = null;
	var natural = null;

	if(isNaN(date)) {
		natural = date;
		unix = moment(date, "MMMM D, YYYY").format("X");
	} else {
		unix = date;
		natural = moment.unix(unix).format("MMMM D, YYYY");
	}

	var dateObj = { "unix": unix, "natural": natural };
	res.send(dateObj);
});

app.listen(port, function () {
	console.log('Example app listening on port ' + port);
});