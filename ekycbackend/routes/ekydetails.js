const express = require('express');
const router = express.Router();
const EKYC = require('../model/ekycregister');
const { body, validationResult } = require('express-validator');
const bodyParser=require('body-parser');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET="EKYC$REGISTERS";


//ROUTE 1: EKYC Details
router.post('/EKYCDetail',bodyParser.json(),[
    body('name', 'Enter a valid name'),
    body('aadhar_number','Enter a valid Aadhar Number').isLength(12),
    body('phone_number','Enter a valid Phone Number').isLength(10),
    body('wallet_address','Enter a valid Wallet Address').isLength({min: 34},{max: 64}),
],async (req,res)=>{
    //if there are errors,return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check weather the admin with this email exists
    try{

      let aadhar_no =await EKYC.findOne({aadhar_number: req.body.aadhar_number});
       if(aadhar_no){
       return res.status(400).json({error: "Sorry, a admin with this aadhar number exits"})
      }
      const salt=await bcrypt.genSalt(12);
      const salty=await bcrypt.genSalt(10);
      const secPass= await bcrypt.hash(req.body.aadhar_number,salt);
      const triPass= await bcrypt.hash(req.body.phone_number,salty);

      user = await EKYC.create({
      name: req.body.name,
      aadhar_number : secPass,
      phone_number: triPass,
    //   phone_number: req.body.phone_number,
      wallet_address: req.body.wallet_address
    })
    const data={
      user:{
        id:user.id
      }
    }
    const authToken=jwt.sign(data,JWT_SECRET);
    res.json({"auth":authToken});

    console.log("Saved to DB");
    }catch(error){
      console.error(error.message);
      res.status(500).send("Internal Server error Occured");
    }
})

module.exports = router;