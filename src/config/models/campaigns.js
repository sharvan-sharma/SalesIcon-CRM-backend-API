const mongoose  = require('mongoose')

const campaignSchema = mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String},
    status:{type:String,required:true},
    staff_id:{type:String,required:true},
    createdAt:{type:Date,default:Date.now}
})

const Campaign = mongoose.model('campaigns',campaignSchema)

module.exports = Campaign