var express = require("express");
var path = require('path');
var consolidate  = require('consolidate');

var app = express();



app.use(express.static(path.join(__dirname, 'assets')));


app.engine('html', consolidate.swig);
app.set('view engine','html');
app.set('views','./views/');



app.get("/", function(req,res) {
	res.render("index", {
		title: "hello world, wang_hes"
	});
});

app.get("*", function(req,res) {
	res.send(404, "not exists");
});

app.listen(3000);
