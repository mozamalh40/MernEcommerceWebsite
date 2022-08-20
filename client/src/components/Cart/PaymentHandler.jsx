import React from 'react'
import Payment from './Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
const PaymentHandler = () => {

    
    const stripePromise=loadStripe("pk_test_51LMdzMAJmyk97sOKsMv5cNZq8zHlYapruIQSZEhZxajkuVB8JNZfsIHpxaFdxitHt7FTZrZ9rTxW01zoI94NXP9I00nq97RmZY")
  return (
    <>
    <Elements stripe={stripePromise}>
        <Payment/>
       </Elements>
    </>
  )
}

export default PaymentHandler