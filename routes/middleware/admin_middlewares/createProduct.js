const Products = require('../../../src/config/models').Products
const winslogger = require('../../../src/logger')

function createProduct(req,res,next){
    if(!req.body.product_name){
        res.json({status:423,type:'product name'})
    }else if(!req.user || req.user.account_type !== 'admin'){
        res.json({status:423,type:'unauthorised'})
    }else{
            Products.create({
                name:req.body.product_name,
                description:req.body.description || '',
                status:'A',
                admin_id:req.user._id
            },(err,product)=>{
                if(err){
                    res.json({status:500})
                    winslogger.error(`admin ${req.user.email} error while creating product with name ${req.body.product_name}`)
                }else{
                    res.json({status:200,product})
                }
            })
    }
}

module.exports = createProduct