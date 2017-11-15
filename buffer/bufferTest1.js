/* 
*Created by fengyang on 2017/11/13
**/

/*
* Buffer 类
* 是一个全局变量类型，用来直接处理二进制数据的。 它能够使用多种方式构建
*
* */
//方式1：Buffer.alloc(size[, fill[, encoding]]) /  Buffer.allocUnsafe(size)  /  Buffer.allocUnsafeSlow(size)
/*var bf1 = Buffer.alloc(5,'nodeJs','utf-8');
console.log(bf1.length);
for(var i=0;i<bf1.length;i++){
    console.log(String.fromCharCode(bf1[i]));
}

//var bf2 = Buffer.alloc('2');//size必须为number类型

 var bf2 = Buffer.allocUnsafe(10);
 bf2.fill(0);
 console.log(bf2);*/




//方式2   Buffer.from(array)  /  Buffer.from(arrayBuffer[, byteOffset[, length]])  /Buffer.from(buffer) /Buffer.from(string[, encoding])
var  buf = Buffer.from(['aa','a','b']);
console.log(buf);
const buf4 = Buffer.from('this is a test');

// 输出: this is a tést
console.log(buf4.toString());

// 输出: this is a tC)st
console.log(buf4.toString('ascii'));

