
const {model,Schema}=require('mongoose');

const TokenSchema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        unique:true,
        ref:'user',
        required:true
    },
    token:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:3600
            }//1 hour
    
})


module.exports =model('token',TokenSchema)