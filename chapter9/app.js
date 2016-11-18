// stdin,stdout
// process.stdin.resume();//恢复读取标准输入数据流
// process.stdin.on('data',function(chunk) {
// 	console.log('进程接收到数据:' + chunk);
// });

// process.argv
// process.argv.forEach(function(val,index,array) {
// 	console.log(index + ':' + val);
// 	console.log(array);
// })
// function foo() {
// 	console.log('foo')
// }
// setTimeout(foo,0);
// console.log('bar');
//process的nextTick方法与setTimeout函数时间参数值为0的作用相等
// function foo() {
// 	console.log('foo')
// }
// process.nextTick(foo);
// console.log('bar');
// var fs = require('fs');
// function foo() {
// 	function beginAnotherTask() {
// 		var file = fs.createReadStream('./中国足球和西方足球的差异.docx');
// 		file.on('data',function(data) {
// 			console.log('读取到%d 字节',data.length);
// 		})
// 	}
// 	process.nextTick(beginAnotherTask);
// }
// var file = fs.createReadStream('./中国足球和西方足球的差异.docx');
// file.on('data',function(data) {
// 	console.log("从中国足球和西方足球的差异.docx文件中读取到%d字节",data.length);
// })
// foo();
//使用fork方法开启子进程
// var cp = require('child_process');
// var n = cp.fork('./test.js');
// n.on('message',function(m) {
// 	console.log('父进程接收到数据:' , m);
	
// });
// n.send({username:'刘庚'});//在父进程中向子进程发送消息
// setTimeout(function() {
// 	process.exit()
// },4000);
var net = require('net');
var http = require('http');
console.log(net);
console.log(http);