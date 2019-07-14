const mongoose = require('../db/db');
const Schema = mongoose.Schema;

let CategorySubSchema = new Schema({
    id:{unique:true,type:String},
    mall_category_id:String,
    mall_sub_name:String,
    sort:Number,
    comments:String,
},{
    collections:'categorySub',
    versionKey: false
})

module.exports = {
    CategorySub: mongoose.model('CategorySub', CategorySubSchema),
}