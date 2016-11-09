//createServer 方法与 listen 方法的简单使用事例
var net = require('net');
var server = net.createServer(function(socket) {
	console.log('客户端和服务器已经建立连接');
});
server.listen(8432,'localhost',function() {
	console.log('服务器开始监听');
	var address = server.address();
	console.log(address);
});


server.on('error',function(e) {
	if(e.code == 'EADDRINUSE') {
		console.log('服务器地址及端口被占用')
	}
})
