/* 
*Created by fengyang on 2017/11/15
**/

/*
* Buffer相关属性或者方法
*  常用方法：
*    file1.txt. Buffer.slice([start[, end]])  截取方法会因影响原来的Buffer对象
*    2. Buffer.copy(target[, targetStart[, sourceStart[, sourceEnd]]])  修改后的buffer对象修改之后不会影响原来的buffer对象
*    3. Buffer.isEncoding(encoding)  如果 encoding 是一个支持的字符编码则返回 true，否则返回 false 。
*    4. Buffer.isBuffer() //判断是否为一个Buffer对象
*    5. Buffer.byteLength(string[, encoding])  返回一个字符串的实际”字节（数据库存储的是字节长度）“长度。非字符长度，在Buffer中1个字符=3个字节
*       普通字符串1个字符=2个字节
*    6. Buffer.concat(list[, totalLength]) 拼接数组
*
*
* */

    var bf = Buffer.alloc(5,'miaov');
    //console.log(bf);

    //slice方法
    /*var bf3 = bf.slice(2,4);
    console.log(bf3);
    bf3[0] = 2;
    console.log(bf);*/

    //copy方法
    /*  var bf4 = Buffer.alloc(20);
     bf.copy(bf4);
     console.log(bf);//执行完copy方法之后，bf对象没有改变
     console.log(bf4);*/

       //isEncoding(encoding) 是否支持这种编码格式
     /* console.log(Buffer.isEncoding('utf-8'));//支持utf-8  true
      console.log(Buffer.isEncoding('gbk'));//不支持gbk编码 false
      console.log(Buffer.isEncoding('hex'));//支持hex编码*/

      //isBuffer
     /* var obj = {};
      console.log(Buffer.isBuffer(obj));//false
      console.log(Buffer.isBuffer(bf)); //true*/

     //byteLength  ------默认utf-8编码，不同的编码返回的字节长度不同
   /* var str = "miaov"; //单字节的字符和字节长度一致
    console.log(Buffer.byteLength(str));//返回的字节长度
    console.log(str.length);//返回的字符长度
    var str1 = "妙味";
    console.log(Buffer.byteLength(str1));//返回的字节长度  6 Buffer中汉语的1个汉字的字节长度为3
    console.log(str1.length);//返回的字符长度 2    string.prototype.length返回的是字符长度  1个字符=2个字节
    console.log(getBytesLength(str)+"------"+getBytesLength(str1));
    //获取字符串的字节数
    function getBytesLength(str) {
        // 在GBK编码里，除了ASCII字符，其它都占两个字符宽
        return str.replace(/[^\x00-\xff]/g, 'xx').length;
    }*/

   //concat()
    const buf1 = Buffer.alloc(10);
    const buf2 = Buffer.alloc(14);
    const buf3 = Buffer.alloc(18);

    const bufA = Buffer.concat([buf1, buf2, buf3]);
    // 输出: <Buffer 00 00 00 00 ...>
    console.log(bufA);

