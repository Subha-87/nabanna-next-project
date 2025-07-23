const {Schema,model, default: mongoose} = require('mongoose')

const empSchema = new Schema({
    name :String,
    rank :String,
    age:String,
    email:String,
    department:String
})

export const empModel = mongoose.models.employee || model("employee",empSchema)

//module.exports = empModel