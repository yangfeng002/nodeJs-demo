/* 
*Created by fengyang on 2017/11/9
**/

/*
*  在一个模块中定义的变量，其作用域只属于模块内部，外界的模块无法访问
*  如果我们想一个模块访问另外一个模块的变量可以采用如下方式：
*  file1.txt.把变量作为global对象的属性---这种做法是不推荐的
*  2.使用模块对象 module（保存了模块的一些信息）
*     module对象下面有一个子对象 exports,我们可以通过这个对象把模块中的局部变量对外进行访问
*  3.在模块作用域内部有一个内置的对象exports，其实和module.exports是一样的 (使用的时候尽量添加属性而不要重写)
*
* */
//定义全局变量 不推荐使用
//global.a = 200;
//console.log(module);
var a = 100;//局部变量，定义域只属于模块
module.exports.a = a;
console.log(module.exports===exports);

module.exports = [1,2,3]; //如果这么做的话，就会把module.exports和exports的指向关系断开了。
exports =100;//如果这么做的话，就会把module.exports和exports的指向关系断开了。
