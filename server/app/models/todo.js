'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let TodoSchema = new Schema({
    title:{
        type: String,
        required:"Title is missing"
    },
    description:{
        type: String
    },
    createDate:{
        type: Date,
        default:new Date().setHours(new Date().getHours()-4)
    },
    modifiedDate:{
        type: Date,
        default:new Date().setHours(new Date().getHours()-4)
    },
    status:{
        type:Boolean,
        default: false
    },
    dueDate:{
        type:Date
    },
    time:{
        type: String
    }

},
{
    versionKey: false
});

TodoSchema.virtual("id").get(function(){
    return this._id.toHexString();
});

TodoSchema.set('toJSON',{
    virtuals: true
})

module.exports = mongoose.model('todo',TodoSchema)
