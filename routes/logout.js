const express=require('express');
const router=express.Router();

router.post('/',(req,res,next)=>{  
    req.session.destroy(()=>{
        res.json({});
    });
    
});

module.exports=router;