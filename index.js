var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

var bodyParser = require("body-parser");
app.use(bodyParser.json()); //soporte codi json
app.use(bodyParser.urlencoded({ extended: true })); //Soporte decode url


app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/android', function(request, response) {
  response.render('pages/index');
});


//post
//https://warm-atoll-90602.herokuapp.com/token-device
//token
app.post("/token-device", function(request, response)){
	response.send(request.body.token);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
