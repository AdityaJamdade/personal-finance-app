const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please add your name']
    },
    email:{
        type:email,
        unique:true,
        required:[true, 'Please add you email']
    },
    password:{
        type:String,
        required:[true, 'Password cannot be empty']
    }
},
{
    timestamps:true
}
)

module.exports = mongoose.model('User', UserSchema)