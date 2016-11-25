var http = require('http');
var express = require('express');
var app = express();
var util = require('util');
var mongo = require('mongodb');
var host = 'localhost';
var port = 27017;
var db = new mongo.Db('users',new mongo.Server(host, port , {auto_reconnect: true}),{safe:true});
//基础用法
// app.get('/',function(req,res) {
// 	// res.writeHead(200,{'Content-Type':'text/html'});
// 	// res.write('<head><meta charset="utf-8"></head>');
// 	// res.end('你好');//该端代码等于如下
// 	res.send('你好')
// });

//设置路由
// app.get('/:id/:name',function(req,res) {
// 	var str = "";
// 	for(key in req.params){
// 		if(str != "") {
// 			str += "<br/>";
// 		};
// 		str += "参数名:"+key;
// 		str += String.fromCharCode(9) + "参数值" + req.params[key];//fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。
// 	}
// 	res.send(str+util.inspect(req.params,{depth:2}));
	
// })
// app.listen(1337,'127.0.0.1');

//使用POST方法接受客户端提交的POST请求
app.get('/',function(req,res) {
	rs.writeHead(200,)
})
