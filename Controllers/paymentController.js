const catchAsyncErrors = require("../Middleware/catchAsyncErrors");
require("dotenv").config();
const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment=await stripe.paymentIntents.create({
    amount:req.body.amount,
    currency:"usd",
    metadata:{
        company:"Ecommerice"
    }
})
res.status(200)
.json({success:true,client_secret:myPayment.client_secret})
})
//sendStripeApiKey to frontend

exports.sendStripeApiKey=catchAsyncErrors(async(req,res,next)=>{
  res.status(200).json({stripeApiKey:process.env.STRIKE_API_KEY});
})