
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

1. port: 指定需要监听的端口号，参数值为0时将为HTTP服务器分配一个随机端口号;
2. host: 指定需要监听的地址，如果省略该参数，服务器将监听来自于任何IPV4地址的客户端连接。
3. backlog: 参数值为整数,用于指定位于等待队列中的客户端连接的最大数量，一旦超过这个数量，HTTP服务器将拒绝来自新的客户端的连接。默认值为511
4. callback: 当对HTTP拂去起指定的需要监听的地址及端口后,服务器端将立即开始监听来自于该地址以及端口的客户端连接，这是出发listening时间，可使用listen方法的callback参数来啊指定listening事件触发时调用的回调函数，改回调函数中不使用任何参数。
也可以不在listen事件中使用callback参数，也可以通过监听HTTP服务器对象的listening事件。如下:

`server.on('listening',function() {
    //回调函数代码略
})`
在对HTTP服务器指定需要监听的地址以及端口时，如果端口已经被占用，将产生一个错误代码为'EADDRINUSE'的错误，同时出发HTTP服务区的error事件，可以通过对eror事件设设置回调函数的方法来指定该错误产生所需要指定的处理，该回调函数的指定方法如下所示:

    server.on('error',function(e) {
        if(e.code == 'EADDRINUSE') { //当地址以及端口被占用时错误代码为'EADDRINUSE'
            //此处指定回调函数所需执行的处理
        }   
    })
可以使用HTTP服务器的setTimeout方法来设置服务器的超时时间。当该超市事件超过之后，客户端不可以继续利用本次与HTTP服务器建立的连接，下次向该服务器发出的请求必须重新建立连接。该方法的使用方式如下所示：<br/>
`server.setTimeout(mecs,callback)`mecs为设置服务器的超时时间，单位为毫秒。设置为0时取消超时处理，callback为回调函数。
####获取客户端请求信息
HTTP服务器接收到客户端请求时调用的回调函数中的第一个参数值为一个 `http.IncomingMessage` 对象,该对象用于读取客户端请求流中的数据，因此，当该对象被用于读取客户端请求流中的数据时，该对象拥有如下所示的一些属性:

1. method: 字符串，值为客户端向服务器发送请求时使用的方法，例如"GET","POST".
2. url: 该属性值为客户端发起请求时使用的url参数字符串，例如"/"、"/user/1"、"/post/new/?param=value".通常用来判断看客户端请求的页面以及需要执行的处理。
3. headers: 客户端发送的请求头对象。包括各种cookie以及浏览器的各种信息。
4. httpVersion: 客户端发送的HTTP版本，"1.1"或者"1.0".
5. trailers: 存放了客户端附加的一下HTTP头信息，该对象被包含在客户端发送的请求数据中只有当`http.IncomingMessage`对象的end事件触发之后才能读取到trailer对象中的信息。
6. socket: 该属性值为服务器端用于监听客户端请求的socket对象。
####转换URL字符串与查询字符串
在Node.js中提供了一个url模块和一个QueryString模块，分别用来转换完整URL字符串和URL中的查询字符串。在一个完整的URL字符串中，从`"?"`字符之后(不包括"?"字符)到`"#"`字符之前(如果存在#字符)或者到字符串结束(如果不存在#字符)这一部分被称为查询字符串，例如`http://baidu.com/user?userName=liugeng&age=21&sex=male#hash`这个URL字符串中，`userName=liugeng&age=21&sex=male`这个部分称为一个查询字符串。<br/>
可以使用QueryString模块中的oparse方法将该字符串转换一个对象，parse方法的使用方式如下所示:<br/>
`querystring.parse(str,[sep],[eq],[options])`<br/>

1. str: 必须,被转换的字符串
2. sep: 非必须,用于指定该查询字符串中的分割字符，默认参数值为`"&"`
3. eq: 非必须,指定该查询字符串中的分配字符，默认参数值为`"="`
4. options: 非必须,是一个对象，可以在该对象中使用一个整数值类型的maxKeys属性来指定转换后的对象中的属性个数，如果maxKeys等于0，则相当于不使用maxKeys值
在Repl运行环境中输入一些表达式来调用parse方法(此处不介绍，就是第一个参数用的比较多)。

当在客户端提交表单数据，且表单中存在复选框时，提交的查询字符串中寻在类似"key:value1&key:value2"这种形式的字符串，在使用parse方法后，这种形式的字符串将装换成对象中的一个数组。

    querystring.parse('userName=liugeng&age=20&age=21');
    {
        userName:'liugeng',
        age:['20',21]
    }

###HTTP客户端
####向其他网站请求数据
略
####向本地服务器请求数据
略
####制作代理服务器