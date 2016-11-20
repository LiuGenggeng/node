// var cluster = require('cluster');
// var http = require('http');
// if(cluster.isMaster) {
// 	cluster.fork();
// 	console.log('这段代码被运行在主进程中.');
// }else {
// 	http.createServer(function(req,res) {
// 		if(req.url !== '/favicon') {
// 			res.writeHead(200,{'Content-Type':'text/html'});
// 			res.write('<head><meta charset="UTF-8"></head>');
// 			res.end('hello \n');
// 			console.log('这段代码被运行在子进程中.');
// 		}
// 	}).listen(1334,'localhost');
// }
// //fork方法开启子进程触发fork事件
// cluster.on('fork',function(worker) {
// 	console.log('子进程' + worker.id + '开启');
// });

// //在主进程尝试运行子进程中的Node.js应用程序时，触发online事件
// cluster.on('online',function(worker) {
// 	console.log('已接收到子进程 ' + worker.id + '的反馈信息'); 
// });
// cluster.on('listening',function(worker,address) {
// 	console.log(address);
// 	console.log("子进程中的服务器开始加你听，地址为:" + address.address + ':' + address.port);
// })


//setupMaster 方法修改子进程中运行的模块文件或者修改子进程中运行的Node.js应用程序的其他默认行为
//eg:使用setupMaster方法指定子进程中运行的文件
var cluster = require('cluster');
cluster.setupMaster({
	exec: 'child.js'
});
cluster.fork();
console.log('这段代码被运行在主进程中.');
console.log('cluster.settings属性值: %j',cluster.settings);