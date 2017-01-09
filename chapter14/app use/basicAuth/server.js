var express = require('express');
var basicAuth = require('basic-auth');
var app = express();
app.use(basicAuth(function(user,pass) {
	return user === 'testUser' && pass === 'testPass';
}));
app.get('/',function(req,res) {
	res.send("你好");
})
app.listen(1342,"127.0.0.1");