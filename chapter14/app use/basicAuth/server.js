var express = require('express');
var app = express();
app.use(express.basicAuth('testUser','testPass'));
app.get('/',function(req,res) {
	res.send("你好");
})
app.listen(1342,"127.0.0.1");