var express = require("express");
var app = express();
app.use(express.static(__dirname + '/dist/NutritionistUI/'))
	app.get('/', function(req, res) {
		res.status(200).send('OK')
	})
app.listen(4200, function(request, response){

});
