/* 
*Created by fengyang on 2017/11/20
**/

   /*
   *  fs操作文件夹
   *  1.fs.mkdir(path[, mode], callback) 异步创建文件夹
   *    fs.mkdirSync(path[, mode]) 同步的方法
   *  2.fs.rmdir(path, callback) 异步删除文件夹
   *    fs.rmdirSync(path) 同步删除
   *  3.fs.readdir(path[, options], callback) 读取目录
   *       path <string> | <Buffer> | <URL>
   *       options <string> | <Object>
   *       encoding <string> 默认 = 'utf8'
   *       callback <Function>
   *         err <Error>
   *         files <string[]> | <Buffer[]>
   *    fs.readdirSync(path[, options]) //同步读取
   *
   *
   *
   *
   *
   * */
     //mkdir() 创建文件夹
   var fs = require('fs');
/*   fs.mkdir('./dir',function (err) {
      console.log(arguments)
   });*/

   //fs.rmdir(path, callback) 删除文件夹
    /*
      fs.rmdir('./dir',function (err) {
        console.log(arguments);
      });
    */

    //fs.readdir(path[, options], callback) 读取文件夹
   fs.readdir('../FileSystem',function (err,files) {
       //console.log(files);
       files.forEach(function (f) {
           //console.log(f);//路径可以是文件也可以是文件夹
           fs.stat(f, function (err,status) {
               //判断文件或者文件夹是否存在, status.mode表示文件的模式
               //console.log(arguments);
               switch (status.mode){
                   case 16822:
                       console.log("[文件夹]"+f);
                       break;
                   case 33206:
                       console.log("[文件]"+f);
                       break;
                   default:
                       break;
               }
           })
       })
   });
