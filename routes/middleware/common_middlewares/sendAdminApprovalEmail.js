const {Admin} = require('../../../src/config/models')
const sendEmail = require('../../../src/utils/mail').sendEmail
const approvalEmailTemplate = require('../../../src/utils/mail/templates').approvalEmailTemplate
const jwt = require('jsonwebtoken')

module.exports = (req,res,next)=>{
    if(!req.body.admin_id || req.body.admin_id.length !== 24){
        res.json({status:423,type:'staff_id'})
    }else{
        Admin.findOne({_id:req.body.admin_id},{verified:1,approved:1,email:1,name:1},(err,admin)=>{
            if(err){res.json({status:500,type:'server error'})}
            else if(admin){
                if(admin.verified && !admin.approved){
                    jwt.sign({id:admin._id},process.env.ADMIN_APPROVAL_SECRET,(err,token)=>{
                        if(err){res.json({status:500,type:'jwt_error'})}
                        else{
                            let promise = sendEmail(approvalEmailTemplate(admin.email,admin.name,token))
                            promise.then(()=>{res.json({status:200,type:'mail_sent'})})
                            .catch((err)=>{ res.json({status:500,type:'mail_error'})})
                        }
                    })
                }else{
                    if(admin.verified){
                        res.json({status:455,type:'already_approved'})
                    }else{
                        res.json({status:455,type:'staff_not_verified'})
                    }
                }
            }
            else{res.json({status:422,type:'staff_doesnot_exist'})}
        })
    }
}