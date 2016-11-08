var repl = require('repl');
var con = repl.start(">").context;
con.msg = "事例消息";
con.testFunction = function() {
	console.log(con.msg)
}