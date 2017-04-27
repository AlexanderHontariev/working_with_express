var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// запрос методом GET на корневой url
app.get('/', function(request, responce){
	responce.send (

		"<form class='inputWrapper' method='post' action='/sendData'>" +
			"<div><input type='text' name='username' placeholder='Enter name' /></div>" +
			"<div><input type='password' name='password' placeholder='Enter password' /></div>" +
			"<button type='submit' id='sendData'>Нажать</button>" +
		"</form>"
		);
});

/*
	app.get('/',
		// на данный запрос подключаем файл,
		// который будет обрабатывать запрос (файлы в nodejs являются модулями)
		require('./models/firebird').get
		// .get - свойство объекта module.exports
	);
*/

app.get('/getJson', function(request, responce){
	responce.json({ 'user': 'Vasya'});
});

		/* ИСПОЛЬЗОВАНИЕ МЕТОДА POST */

app.post('/sendData', function (req, res) {
	var username = req.body.username;
	var password = req.body.password;
	res.json(req.body);
	console.log('username: ' + username + '<br>' + 'password: ' + password);
});

app.listen(2999, function() {
  console.log('Server listeninig on port 2999');
});