// init project
var express = require('express');
var app = express();
var timeCheck = require('./timeCheck.js');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});
// default timestamp (now)
app.get('/api', (req, res)=>{
	let resultDate = new Date();
	res.json({
		"unix": resultDate.getTime(),
		"utc": resultDate.toUTCString()
	})
});

// timestamp api
app.get('/api/:date', (req, res)=>{
	let inputDate = req.params.date;
	res.json(timeCheck(inputDate));
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
