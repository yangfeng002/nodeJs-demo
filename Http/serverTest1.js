/* 
*Created by fengyang on 2017/11/21
**/

  /*
  *搭建一个http服务器，用于处理http的请求
  * 该模块需要用require引入,
  * 方法：
  *   1. http.createServer([requestListener]) 返回一个新建的 http.Server 实例，requestListener 是一个函数，会被自动添加到 'request' 事件
  * */

      //加载http模块
      var http  = require("http");
      //创建一个服务器
      var server = http.createServer(function (request,response) {
          //console.log("客户端正在访问");
      });

      //有错误出现的时候执行
      server.on("error",function (err) {
          console.log(err);
      });
      //监听执行成功时触发
      server.on("listening",function () {
         console.log("listening....");
      });
      //用客户端的请求的时候执行
     server.on("request",function (req,res) {
         //console.log("有客户端请求了");
         //req代表request请求对象，res代表相应的对象
         res.writeHead("200","",{
              'content-type':"text/html"
             //"content-type":"text/plain"
         });
         res.write("<h1>hello</h1>");
         res.end();//必须调用结束相应
     });

      server.listen(8080,"localhost");
      //console.log(server.address());//端口号随机设置
