var http = require('http');
// var options = {
// 	hostname: 'www.microsoft.com',
// 	port: 80,
// 	path: '/',
// 	method: 'GET'
// };
//使用HTTP.get方法开发者不需要调用end方法，Node.js自动调用end方法
// var req = http.get(options,function(res) {
// 	console.log('状态码:' + res.statusCode);
// 	console.log('响应头:' + JSON.stringify(res.headers));
// 	res.setEncoding('utf-8');
// 	res.on('data',function(chunk) {
// 		console.log('响应内容:' + chunk);
// 	})
// });
// req.setTimeout(1000,function() {
// 	req.abort();
// })
// req.on('error',function(err) {
// 	console.log('发生错误，错误代码为:' + err.code);
// })
// req.end();

//向本地服务器请求数据
var options = {
	hostname: 'localhost',
	port: 1334,
	path: '/',
	method: 'POST'
};
var req = http.request(options,function(res) {
	res.on('data',function(chunk) {
		console.log('客户端接收到数据' + chunk);
	});
	res.on('end',function() {
		console.log('Trailer 头信息: %j',res.trailers);
	})
});
req.write('你好');
req.end('再见');