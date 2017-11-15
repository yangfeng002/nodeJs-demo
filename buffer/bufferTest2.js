/* 
*Created by fengyang on 2017/11/14
**/

/*
* Buffer的方法或者属性
*
* Buffer.length 长度/ Buffer[index] 索引位置的内容 /
* buf.write(string[, offset[, length]][, encoding]) string要写入的字符串，offset为buffer的偏移量，length为要写入字符串的长度
* toString()方法
* toJSON()方法
* */
var str = 'maiov';
var bf = Buffer.allocUnsafe(5);
//console.log(bf.length);
//console.log(bf[0]);
bf.write(str);
console.log(bf);
//bf.write(str,1);
bf.write(str,1,3);
console.log(bf);
console.log(bf.toString());
console.log(bf.toJSON());

var str2 = '妙味课堂';
var bf2 = Buffer.alloc(5);
bf2.write(str2);
console.log(bf2.toString());
