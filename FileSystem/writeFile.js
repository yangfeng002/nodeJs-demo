/* 
*Created by fengyang on 2017/11/17
**/

    /*
    * 1. fs.writeFile(file, data[, options], callback)  异步向文件中写入数据
    *    如果文件不存在，则新建，如果存在，则新的内容会覆盖原有的文件的内容
    *   注意：如果 file 指定为一个文件描述符，则它不会被自动关闭。
    *    file：文件名称
    *    data为写入的数据（string或者Buffer）
    *    options:设置
    *    callback为回调函数
    *  2. fs.writeFileSync(file, data[, options])  同步向文件中写入数据
    *
    *  3. fs.appendFile(file, data[, options], callback)   异步追加数据到文件
    *       file <string> | <Buffer> | <number> 文件名或文件描述符
            data <string> | <Buffer>
            options <Object> | <string>
            encoding <string> | <null> 默认为 'utf8'
            mode <integer> 默认为 0o666
            flag <string> 默认为 'a'
            callback <Function>
            err <Error>
            异步地追加数据到一个文件，如果文件不存在则创建文件。 data 可以是一个字符串或 buffer。
       4. fs.appendFileSync(file, data[, options])
    *
    *  5.  fs.stat(path, callback)（代替原来的fs.exists()） 异步判断文件是否存在
    *    不建议在调用 fs.open() 、fs.readFile() 或 fs.writeFile() 之前使用 fs.stat() 检查一个文件是否存在。
    *    作为替代，用户代码应该直接打开/读取/写入文件，当文件无效时再处理错误。
    *       注意：如果要检查一个文件是否存在且不操作它，推荐使用 fs.access()。
    *  6.  fs.statSync(path)  同步的 stat(2)。 返回一个 fs.Stats 实例。
    *
    *  7. fs.access(path[, mode], callback)  只判断不进行文件读取操作建议使用该方法
    *     不建议在调用 fs.open() 、 fs.readFile() 或 fs.writeFile() 之前使用 fs.access() 检查一个文件的可访问性
    *  8. fs.accessSync(path[, mode])
    *
    * */

    var fs = require('fs');//获取文件系统模块

     //异步向文件写入数据
    /*fs.writeFile('file2.txt','你好， nodeJs',function(err){
        console.log(arguments);

    });
   */

    //异步追剧内容到文件中
  /*  fs.appendFile('file2.txt','追加数据内容',{'encoding ':'utf-8'},function (err) {
        if (err) throw err;
        console.log('The "追加数据内容" was appended to file!');
    });*/

   //同步的操作
  var filename = './file2.txt';
   fs.stat(filename,function (isExists) {
      if(isExists){
          fs.writeFileSync(filename,'文件新增内容成功');
          console.log("文件新增内容成功");
      }else{
          fs.appendFileSync(filename,'文件追加内容成功');
          console.log("文件追加内容成功");
      }
   });
