const mongoose = require('../db/db');
const Schema = mongoose.Schema;

let CategorySchema = new Schema({
    id:{unique:true,type:String},
    mall_category_name:String,
    image:String,
    type:Number,
    sort:Number,
    comments:String,
},{
    collections:'category',
    versionKey: false
})

module.exports = {
    Category: mongoose.model('Category', CategorySchema),
}