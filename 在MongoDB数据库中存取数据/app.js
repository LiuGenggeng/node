var mongo = require('mongodb');
var util = require('util');//将对象强制转换为字符串的模块，通常用于调试和错误输出
var host = 'localhost';
var port = 27017;
var db = new mongo.Db('node-mongo-example-4',new mongo.Server(host, port , {auto_reconnect: true}),{safe:true});
var food1 = {type:'food',price:11};
var food2 = {type:'food',price:10};
var food3 = {type:'food',price:9};
var food4 = {type:'food',price:8};
var foods = [food1,food2,food3,food4];
var store1 = {name:'store1',goods:foods};
var book1 = {type:'book',price:11};
var book2 = {type:'book',price:10};
var book3 = {type:'book',price:9};
var book4 = {type:'book',price:8};
var books = [book1,book2,book3,book4];
var store2 = {name:'store2',goods:books};
var store3 = {name:'store3',goods:[1,2,3,4,5]};
var storeArray = [store1,store2,store3];
db.open(function(err,db) {
	if(err) throw err;
	else{
		db.collection('stores',function(err,collection) {
			collection.insert(storeArray,function(err,docs) {
				collection.find({}).toArray(function(err,docs) {
					console.log("结果:" + util.inspect(docs,{depth:3}));
				})
				collection.remove({},function(err,result) {
					console.log(typeof(result));
					console.log(result.result.n);
					if(err) throw err;
					else {
						console.log('删除 %d 条数据',result.result.n);
					}
				});
			})
			collection.find({}).toArray(function(err,docs) {
				console.log("结果:" + util.inspect(docs,{depth:3}));
				db.close();
			})
		})
	}
});
db.on('close',function(err,db) {
	if(err) throw err;
	else console.log('成功关闭数据库');
})
