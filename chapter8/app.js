var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res) {
	if(req.url !== "/favicon.ico") {
		var out = fs.createWriteStream('./request.log');
		out.write('客户端请求所用的方法为:' + req.method + '\r\n');
		out.write('客户端请求所用的url字符串为:' + req.url + '\r\n');
		out.write('客户端请求头对象为:' + JSON.stringify(req.headers) + '\r\n');
		out.end('客户端请求所用HTTP版本为:' + req.httpVersion);
		//全段表单发送数据发过来触发data事件，参数data为发送过来的数据
		req.on('data',function(data) {
			console.log('服务器已经接受到数据',decodeURIComponent(data))
		});
		req.on('end',function() {
			console.log('客户端请求数据已全部接收完毕')
		});
	}
	res.end();
}).listen(1334,'127.0.0.1');
server.on('listening',function() {
	console.log('开始监听');
});
server.on('connection',function(socket) {
	console.log('客户端已经建立连接');
});
server.on('close',function() {
	console.log('服务器被关闭');
});
server.on('error',function(e) {
	if(e.code == 'EADDRINUSE') {
		console.log('服务器地址以及端口已经被占用');
	}
});




