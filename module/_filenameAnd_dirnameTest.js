/* 
*Created by fengyang on 2017/11/9
**/


//注意：_filename _dirname  exports  module require() 作用域只在模块内部，不能使用global来调用

/*
* file1.txt.
*   _filename 模块文件解析后的绝对路径，此属性并非global对象的属性，而是模块作用域下的,不能用global._filename访问
*   __dirname 模块文件所在的目录解析后的绝对路径，此属性也不是global的属性
*
* */

//console.log(__filename);
//console.log(__dirname);

/* 2.
* setInterval()  clearInterval()  setTimeout() clearTimeout()用法
* */
/*setInterval(function () {
     var date = new Date();
     console.log(date.getFullYear()+"年"+date.getMonth()+"月"+date.getDate()+"日 "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
},1000);*/

