var http = require('http');
var server = http.createServer(function(req,res) {
	//暂不处理接受带客户端请求时的处理
}).listen(1336,'127.0.0.1');
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