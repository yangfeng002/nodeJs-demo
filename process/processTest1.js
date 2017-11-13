/* 
*Created by fengyang on 2017/11/9
**/
/*
* process 对象是一个 global （全局变量），提供有关信息，控制当前 Node.js 进程。作为一个对象，
* 它对于 Node.js 应用程序始终是可用的，故无需使用 require()。
* 1.process.argv  返回一个数组  可以带参数的
* 2.verson 返回node的版本信息
* 3.versions 返回node以及node依赖包的版本信息
* 4.exePath //返回执行路径
* 5.env  返回执行环境信息
* 6.pid
* 7.stdin stdout
*
* */
//console.log(process);
//console.log(global.process); //process和global.process是等同的
//console.log(process.argv);//参数
//console.log(process.execPath);//返回执行路径
//console.log(process.version);//返回node的版本信息
//console.log(process.versions);//返回node以及node依赖包的版本信息
//console.log(process.env);//返回模块相关的环境信息
/*console.log(process.pid);
setInterval(function () {
   process.exit()
},5000);*/
//process.stdout.write('hello');
/*
* 输入输出流 stdin stdout
* */
//1.输出流---
function stdout(data) {
    process.stdout.write(data);
}
//stdout("输出内容");

//2.输入流----输入流默认情况下是关闭的，要监听处理输入流数据，首先要开启输入流
process.stdin.resume();
//监听输入流
/*1:声明变量*/
var num1, num2;
/*2：向屏幕输出，提示信息，要求输入num1*/
process.stdout.write('请输入num1的值：');
/*3：监听用户的输入*/
process.stdin.on('data', function (chunk) {
    if (!num1) {
        num1 = Number(chunk);
        /*4：向屏幕输出，提示信息，要求输入num2*/
        process.stdout.write('请输入num2的值');
    } else {
        num2 = Number(chunk);
        process.stdout.write('结果是：' + (num1 + num2));
    }
});

