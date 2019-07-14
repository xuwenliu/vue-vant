const router = require("koa-router")();
const fs = require('fs');

const { CategorySub } = require("../models/categorySub");

router.get('/all',async ctx => {
    fs.readFile('./insert/newCategorySub.json','utf8',(err,data)=>{
        data = JSON.parse(data);
        let saveCount = 0;
        data.map(item => {
            let categorySub = new CategorySub(item);
            categorySub.save().then(()=>{
                saveCount++
                console.log('成功'+saveCount);
            }).catch(error=>{
                console.log('失败：'+error);
            });
        })
    })
})

module.exports = router.routes();