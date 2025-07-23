const {Schema,model, default: mongoose} = require('mongoose')

const UserSchema = new Schema({
    name: String,
    rank:String,
    email: String,
    age:Number
})


export const userModel = mongoose.models.user || model("user",UserSchema)

//module.exports = userModel