
##创建HTTP与HTTPS服务器与客户端
###HTTP服务器
####创建HTTP服务器
在Node.js中，调用http模块的createServer方法即可创建一个http服务器 `var server = http.createServer([requestListener])`。<br/>
在此方法中，可以使用一个可选参数，参数值为一个回调函数，用于指定当接受到客户端请求是所需执行的处理。
##### 指定方法为:<br/>

    function (request,response) {
        //回调函数代码
    }
在回调函数中，第一个参数值为一个http.IncomingMessage对象,此处代编一个客户端请求，第二个参数值为一个http.ServerResponse对象，代表一个服务器端对象。
createServer方法返回被创建的服务器对象server。<br/>
#####服务器接收到客户端请求时所执行的处理:
    server.on('request',function(request,response) {
        //回调函数代码
    });
在创建了HTTP服务器后，需要指定该服务器所要监听的地址(可以为一个IP地址，可以为一个主机名)及端口,可以使用该HTTP服务器的listen方法，使用方式如下:<br/>
`server.listen(port,[host],[backlog],[callback])`<br/>
在listen方法中，4个参数，port参数为必须指定参数，其余为可选参数。<br/>
* port: 指定需要监听的端口号，参数值为0时将为HTTP服务器分配一个随机端口号;
* host: 指定需要监听的地址，如果省略该参数，服务器将监听来自于任何IPV4地址的客户端连接。
* backlog: 参数值为整数,用于指定位于等待队列中的客户端连接的最大数量，一旦超过这个数量，HTTP服务器将拒绝来自新的客户端的连接。默认值为511
* callback: 当对HTTP拂去起指定的需要监听的地址及端口后,服务器端将立即开始监听来自于该地址以及端口的客户端连接，这是出发listening时间，可使用listen方法的callback参数来啊指定listening事件触发时调用的回调函数，改回调函数中不使用任何参数。
也可以不在listen事件中使用callback参数，也可以通过监听HTTP服务器对象的listening事件。如下：<br/>

    server.on('listening',function() {
        //回调函数代码略
    })
在对HTTP服务器指定需要监听的地址以及端口时，如果端口已经被占用，将产生一个错误代码为'EADDRINUSE'的错误，同时出发HTTP服务区的error事件，可以通过对eror事件设设置回调函数的方法来指定该错误产生所需要指定的处理，该回调函数的指定方法如下所示:

    server.on('error',function(e) {
        if(e.code == 'EADDRINUSE') { //当地址以及端口被占用时错误代码为'EADDRINUSE'
            //此处指定回调函数所需执行的处理
        }   
    })
可以使用HTTP服务器的setTimeout方法来设置服务器的超时时间。当该超市事件超过之后，客户端不可以继续利用本次与HTTP服务器建立的连接，下次向该服务器发出的请求必须重新建立连接。该方法的使用方式如下所示：<br/>
`server.setTimeout(mecs,callback)`mecs为设置服务器的超时时间，单位为毫秒。设置为0时取消超时处理，callback为回调函数。
