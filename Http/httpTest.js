/* 
*Created by fengyang on 2017/11/22
**/

/*
*  1.http获取 var http = require("http")
*  2.创建服务器 var server = http.createServer()
*  3.监听
*      server.listen("request",function(req,res){
*          //设置头部消息
*          //3.1 response.writeHead(statusCode[, statusMessage][, headers])
*               statusCode <number>
*               statusMessage <string>
*               headers <Object>
*             该方法在消息中只能被调用一次，且必须在 response.end() 被调用之前调用。
*            response.setHeader() 设置的响应头会与 response.writeHead() 设置的响应头合并，且 response.writeHead() 的优先。,
*            write()方法之前调用
*            http.STATUS_CODES属性为状态码
*
*
*          //3.2 response.write(chunk[, encoding][, callback])   它可被多次调用
*              chunk <string> | <Buffer>
*              encoding <string>
*              callback <Function>
*              返回: <boolean>
*          //3.3  response.setTimeout(msecs[, callback]) 超时处理
*
*          //3.4  response.end([data][, encoding][, callback])
*               data <string> | <Buffer>
*               encoding <string>
*               callback <Function>
*               该方法会通知服务器，所有响应头和响应主体都已被发送，即服务器将其视为已完成。 每次响应都必须调用 response.end() 方法。
*               如果指定了 data，则相当于调用 response.write(data, encoding) 之后再调用 response.end(callback)。
*               如果指定了 callback，则当响应流结束时被调用。
*
*       })
*
*
* */
