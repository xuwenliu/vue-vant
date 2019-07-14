const router = require("koa-router")();
const fs = require('fs');

const { Goods } = require("../models/goods");

router.get('/all',async ctx => {
    fs.readFile('insert/newGoods.json','utf8',(err,data)=>{
        data = JSON.parse(data);
        let saveCount = 0;
        data.map(item => {
            let goods = new Goods(item);
            goods.save().then(()=>{
                saveCount++
                console.log('成功'+saveCount);
            }).catch(error=>{
                console.log('失败：'+error);
            });
        })
    })
})

router.post('/getDetailGoodsInfo',async ctx => {
    try{
        let goodsId = ctx.request.body.goodsId;
        let result = await Goods.findOne({id:goodsId}).exec();
        if(result) {
            ctx.body = {
                success: true,
                data:result
            }
        }
    
    }catch(err){
        ctx.body = {
            success: false,
            msg: err
        };
    }
    

    
})

module.exports = router.routes();