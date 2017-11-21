/* 
*Created by fengyang on 2017/11/21
**/

    /*
    * 自动化构建实现
    *
    * */

    var projectData = {
        name:"miaov",
        fileData:[
            {
                name:"css",
                type:"dir"
            },
            {
                name:"js",
                type:"dir"
            },
            {
                name:"images",
                type:"dir"
            },
            {
                name:"index.html",
                type:"file",
                content:"<html><head><title>title</title></head><body><h3>hello</h3></body></html>"
            }
        ]
    };
    var fs = require("fs");
    if(projectData.name){
        //console.log(fs.statSync(projectData.name));
        //创建文件夹
      fs.mkdirSync(projectData.name);

        //文件的创建
        if(projectData.fileData && projectData.fileData.length>0){
            var fileData = projectData.fileData;
            fileData.forEach(function (f) {
                var path = projectData.name+"/"+f.name;
                var content = f.content || "";

                switch (f.type){
                    case "dir":
                       fs.mkdirSync(path);
                        break;
                    case "file":
                       fs.writeFileSync(path,content);
                        break;
                    default:
                        break;
                }
            })



        }
    }
