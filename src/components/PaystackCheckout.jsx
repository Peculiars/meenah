import React, { useState, useEffect } from 'react';
import { PaystackButton } from 'react-paystack';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';


export const PaystackCheckout = ({ properAmnt }) => {
const userinfo = useSelector((state)=> state.meenah.userinfo)
  const publicKey = 'pk_test_d51aa22685b05f4b80091cb4c3d94f7f26610a2e';
  const [address, setAddress] = useState('');


  const amount = properAmnt * 100;
  const email = userinfo.email;
  const componentProps = {
    email,
    amount,
    address,
    metadata:{email},
    publicKey,
    text: 'Pay Now',
    onSuccess: () => {
        toast.success("payment received successfully!!!");
      },
  };

  return (
    <div className='bg-black mt-10 py-5'>
      <form className='flex flex-col items-center justify-center mx-5'>
        <input className='w-full text-xs placeholder:text-xs mb-4 px-3 py-1.5 outline-none' type="text" placeholder="shipping address" value={address} onChange={(e) => setAddress(e.target.value)}/>        
      </form>
      <PaystackButton className='bg-white outline-none font-semibold flex items-center justify-center mx-auto px-4 py-2' {...componentProps} />
      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'/>
    </div>
  );
};
