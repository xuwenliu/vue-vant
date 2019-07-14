const router = require("koa-router")();
const fs = require('fs');

const { Category } = require("../models/category");

router.get('/all',async ctx => {
    fs.readFile('./insert/newCategory.json','utf8',(err,data)=>{
        data = JSON.parse(data);
        let saveCount = 0;
        data.map(item => {
            let category = new Category(item);
            category.save().then(()=>{
                saveCount++
                console.log('成功'+saveCount);
            }).catch(error=>{
                console.log('失败：'+error);
            });
        })
    })
})

module.exports = router.routes();