/* 
* Created by fengyang on 2017/11/16
**/

    //fs模块
    var fs = require('fs');

    /*
    * fs模块的主要方法和属性
    * 常用的方法：
    *  1.  fs.open(path, flags[, mode], callback)  异步版本不能保证顺序
    *      path ：要打开文件的路径
    *      flags ：打开文件的方式  读/写
    *      mode  ：设置文件的模式  读/写/执行
    *      callback：回调执行  传入2个参数进来
    *                err:错误信息保存在err里面，如果打开成功err为null
    *                fd:打开文件的标识，和定时器setTimeout()返回的标识类似
    *   fs.openSync(path, flags[, mode])  ---fs.open() 的同步版本。 返回一个表示文件描述符的整数。
    *
    *
    * */
    fs.open('file1.txt','r',function (err,fd) {
      //打印回调信息
         //console.log(err);
         // console.log(fd);
       if(err){
           console.log("读取文件失败。。。");
       }else{
           console.log("文件打开成功！！！");
           console.log(fd);
       }

    });
    fs.open('file1.txt','r',function (err,fd) {
        //打印回调信息
        if(err){
            console.log("读取文件失败。。。");
        }else{
            console.log("文件打开成功！！！");
            console.log(fd);
        }

    });



