/* 
*Created by fengyang on 2017/11/16
**/

/*
* fs模块的主要方法和属性
   *    常用的方法：
   *    1.fs.write(fd, buffer[, offset[, length[, position]]], callback)
   *    fd: 写入 buffer 到 fd 指定的文件。
        offset 决定 buffer 中被写入的部分，
        length 是一个整数，指定要写入的字节数。
        position 指向从文件开始写入数据的位置的偏移量。 如果 typeof position !== 'number'，则数据从当前位置写入。详见 pwrite(2)。
        回调有三个参数 (err, bytesWritten, buffer)，其中 bytesWritten 指定从 buffer 写入了多少字节。
   *
*
* */

  var fs = require('fs');
  fs.open('file1.txt','r+',function (err,fd) {
      //写入的时候，文件打开的权限需要修改为r+
      if(err) {
          console.log("文件打开失败");
      }else{
          var bf = Buffer.alloc(3,'123');
         /* fs.write(fd,bf,0,3,2,function (err, bytesWritten, buffer) {
             console.log(arguments);
          });*/
          fs.write(fd,'你好',1,'utf-8',function (err, written, string) {
              console.log(arguments);
          })
          fs.close(fd,function () {
              console.log("恭喜你，完成了文件的关闭");
          })

          console.log("呵呵呵");
      }

  });
