/* 
*Created by fengyang on 2017/11/16
**/
/*
   * fs模块的主要方法和属性
   * 常用的方法：
   *   1.  fs.open(path, flags[, mode], callback)  异步版本不能保证顺序
   *      path ：要打开文件的路径
   *      flags ：打开文件的方式  读/写
   *      mode  ：设置文件的模式  读/写/执行
   *      callback：回调执行  传入2个参数进来
   *                err:错误信息保存在err里面，如果打开成功err为null
   *                fd:打开文件的标识，和定时器setTimeout()返回的标识类似
   *   2.  fs.openSync(path, flags[, mode])  ---fs.open() 的同步版本。 返回一个表示文件描述符的整数。---使用比较多
   *   3.  fs.read(fd, buffer, offset, length, position, callback)  异步读取
   *   4.  fs.readFileSync(path[, options])  同步读取
   *   5.  fs.write(fd, buffer[, offset[, length[, position]]], callback) 异步写入（对于分割字符串的比较实用）
   *   6.  fs.write(fd, string[, position[, encoding]], callback)  同步读取
   *   7.  fs.close(fd, callback) 异步关闭
   *   8.  fs.closeSync(fd) 同步关闭
   *   //以上方法比较偏重于底层的代码
   *
   *   //比较方便操作的方法如下：
   *    1. fs.writeFile(file, data[, options], callback) 异步写入数据
   *    2. fs.writeFileSync(file, data[, options])  同步向文件中写入数据
   *    3. fs.appendFile(file, data[, options], callback)   异步追加数据到文件
   *    4. fs.appendFileSync(file, data[, options]) 同步追加数据
   *    5. fs.stat(path, callback) 异步判断文件是否存在
   *    6. fs.statSync(path)  同步的 stat(2)。 返回一个 fs.Stats 实例。
   *    7. fs.access(path[, mode], callback)  只判断不进行文件读取操作建议使用该方法
    *      不建议在调用 fs.open() 、 fs.readFile() 或 fs.writeFile() 之前使用 fs.access() 检查一个文件的可访问性
    *   8. fs.accessSync(path[, mode])
   *    9. fs.readFile(path[, options], callback)  异步读取文件
   *    10. fs.readFileSync(path[, options]) 同步读取文件
   *    11. fs.unlink(path, callback)  同步删除一个文件
   *    12.fs.unlinkSync(path) 异步删除
   *    13.fs.rename(oldPath, newPath, callback) 异步重命名方法
   *    14. fs.renameSync(oldPath, newPath)  //同步重命名
   *    15.fs.watch(filename[, options][, listener])
   *
   *
   *
   *
   * */
