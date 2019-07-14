const fs = require('fs');

fs.readFile('./category.json','utf8',(err,data) => {
    let newData= JSON.parse(data);
    let pushData=[];
    let i = 0;
    newData.RECORDS.map((item,index) => {
        i++
        pushData.push(JSON.parse(JSON.stringify(item).toLowerCase()))
    })
   

    fs.writeFile('./newCategory.json',JSON.stringify(pushData),(err) => {
        if(err) console.log(err);
        else console.log('写文件操作成功');
    })
})