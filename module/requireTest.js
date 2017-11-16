/*
* 一个文件就是一个模块，每个模块都有自己的作用域
* 我们使用var定义的变量不是全局的，它属于当前模块下的
* */
var a = 100;
//console.log(a);
global.a = 200;
//console.log(global.a);

/*
 *  _filename变量表示当前文件被解析之后的绝对路径(属于当前模块，非全局的)
*/
//console.log(__filename);


/*
*模块加载路径机制  nodejs下
*   绝对路径：
*   相对路径：./是必须的，否则它会加载nodeJs核心的模块，或者是nodeJs的node_modules下面的模块
*
* */
//require('模块名');
//require('./test2.js');//相对路径
//require('D:/migu_demo/nodeJs-demo/module/test2.js');//绝对路径

/*
*模块加载机制的规则
*  file1.txt.首先会按照模块加载的文件名称去查找
*  2.如果没有找到，会在文件模块名称后加.js的后缀进行查找
*  3 .如果没有找到，会在文件模块名称后加.json的后缀进行查找
*  4 .如果没有找到，会在文件模块名称后加.node的后缀进行查找
*  如果还没有找到，那么会抛出一个错误
* */
require('./2');
