//在mongodb中删除数据
var mongo = require('mongodb');
var host = 'localhost';
var port = 27017;
var data_1 = {username:'刘庚',firstName:'刘'};
var data_2 = {username:'一一',firstName:'一'};
var data_3 = {username:'二二',firstName:'二'};
var data_4 = {username:'三三',firstName:'三'};
datas = [data_1,data_2,data_3,data_4];
var db = new mongo.Db('node-mongo-examples',new mongo.Server(host, port , {auto_reconnect: true}),{safe:true});
db.open(function(err,db) {
	db.collection('users', function(err,collection) {
		collection.insert(datas,function(err,docs) {
			collection.find({}).toArray(function(err,docs) {
				console.log(docs);
			})
			collection.remove({},function(err,result) {
				if(err) throw err;
				else {
					console.log('成功删除 %d 条数据',result.result.n);
					collection.find({}).toArray(function(err,docs) {
						if(err) throw err;
						else{
							console.log('删除后的数据:');
							console.log(docs);
							db.close();
						}
					})
				}
			})
		})
	})
})