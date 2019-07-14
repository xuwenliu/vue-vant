const mongoose = require('../db/db');
const Schema = mongoose.Schema;

let GoodsSchema = new Schema({
    id:{unique:true,type:String},
    goods_serial_number:String,
    shop_id:String,
    sub_id:String,
    good_type:Number,
    state:Number,
    name:String,
    ori_price:Number,
    present_price:Number,
    amount:Number,
    detail:String,
    brief:String,
    sales_count:Number,
    image1:String,
    image2:String,
    image3:String,
    image4:String,
    image5:String,
    origin_place:String,
    good_scent:String,
    create_time:String,
    update_time:String,
    is_recommend:Number,
    picture_comperss_path:String
},{
    collections:'goods',
    versionKey: false
})

module.exports = {
    Goods: mongoose.model('Goods', GoodsSchema),
}