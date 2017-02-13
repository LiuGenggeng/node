var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.use(express.directory(__dirname,{icons:true}));
app.listen(1337,"127.0.0.1");