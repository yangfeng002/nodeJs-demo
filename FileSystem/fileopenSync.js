/* 
*Created by fengyang on 2017/11/16
**/

    /*
    fs模块的主要方法和属性
        * 常用的方法：
    *  fs.openSync(path, flags[, mode])  ---fs.open() 的同步版本。 返回一个表示文件描述符的整数。
    *
    * */
    var fs = require('fs');//引用模块
   /* //异步读取
    fs.open('file1.txt','r',function (err,fd) {
       //err保存报错信息，fd标识
       console.log(err);
    });

   console.log("ok");//先执行*/

   //同步读取,没有回调
   var fd = fs.openSync('file1.txt','r');
   console.log(fd);
