import React from 'react'
import like from "../assets/images/like.png";
import Home from '../pages/Home';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <>
      <div className='flex items-center justify-center mt-10 mb-10'>
        <img src={like} alt='' />
      </div>
      <div className='flex items-center justify-center text-[36px] leading-20 text-textColor font-bold mb-5'>
        <h1>Payment Successful!</h1>
      </div>
      <div className='flex items-center justify-center'>
        <p>Thank you for completing the secure online transaction.</p>
      </div >
      <div className='flex items-center justify-center'>
        <p>Have a wonderful day!</p>
      </div >
      <div className='flex items-center justify-center'>
        <Link to='/home'>
          <button className='btn '>Back to Home</button>
        </Link>
      </div >
    </>
  )
}

export default PaymentSuccess