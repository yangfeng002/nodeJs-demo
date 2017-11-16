    /*
    *Created by fengyang on 2017/11/16
    **/


    /*
    * fs模块的主要方法和属性
   *    常用的方法：
   *       1. fs.read(fd, buffer, offset, length, position, callback)
   *          fd: 从 fd 指定的文件中读取数据。
              buffer :是数据将被写入到的 buffer。
              offset: 是 buffer 中开始写入的偏移量。
              length :是一个整数，指定要读取的字节数。
              position :指定从文件中开始读取的位置。 如果 position 为 null，则数据从当前文件读取位置开始读取，且文件读取位置会被更新。 如果 position 为一个整数，则文件读取位置保持不变。
              callback:回调有三个参数 (err, bytesRead, buffer)。
   *
   *
    * */
   var fs = require('fs');
   fs.open('file1.txt','r',function (err,fd) {



   });
