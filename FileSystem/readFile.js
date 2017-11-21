/* 
*Created by fengyang on 2017/11/17
**/

    /*
    *  1.fs.readFile(path[, options], callback) 异步读取文件
    *  2.fs.readFileSync(path[, options]) 同步读取文件
    *  3.fs.unlink(path, callback)  同步删除一个文件
    *  4..fs.rename(oldPath, newPath, callback) 重命名方法
            oldPath <string> | <Buffer> | <URL>
            newPath <string> | <Buffer> | <URL>
            callback <Function>
            err <Error>
            异步的 rename(2)。 完成回调只有一个可能的异常参数。
    * */

    var fs = require('fs');

    //readFile方法
   /* fs.readFile('file2.txt',function (error,data) {
         //console.log(arguments);
        console.log(error);
        console.log(data.toString());//Buffer对象，转化为字符串类型
    });*/

   //删除文件unlink
 /* fs.unlink('file2.txt',function (err) {
      if(err){
          console.log("删除成功");
      }else{
          console.log("删除失败");
      }
  });*/

 //rename
/*  fs.rename('file2.txt','file2.txt',function (err) {
     console.log(err);
  });*/

 //watch
 var filename = 'file2.txt';
 fs.watch(filename,function (eventType,fn) {
     //fn为filename
   console.log(eventType);
   if(fn){
       console.log(fn+"发生了变化");
   }else{
       console.log("......");
   }
 });
