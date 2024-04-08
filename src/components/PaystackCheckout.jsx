import React, { useState, useEffect } from 'react';
import { PaystackButton } from 'react-paystack';

export const PaystackCheckout = ({ properAmnt }) => {
  const publicKey = 'pk_test_d51aa22685b05f4b80091cb4c3d94f7f26610a2e';
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const amount = properAmnt * 100;
  const componentProps = {
    email,
    amount,
    address,
    metadata: { name, phone },
    publicKey,
    text: 'Pay Now',
    onSuccess: () => {
      alert('Payment successful!');
    },
    onClose: () => {
      alert('Payment modal closed.');
    },
  };

  return (
    <div className='bg-black mt-10 py-5'>
      <form className='flex flex-col items-center justify-center mx-5'>
        <input className='w-full text-xs placeholder:text-xs mb-4 px-3 py-1.5 outline-none' type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        
        <input className='w-full text-xs placeholder:text-xs mb-4 px-3 py-1.5 outline-none' type="text" placeholder="shipping address" value={address} onChange={(e) => setName(e.target.value)}/>
        
        <input className='w-full text-xs placeholder:text-xs mb-4 px-3 py-1.5 outline-none' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

        <input className='w-full text-xs placeholder:text-xs mb-4 px-3 py-1.5 outline-none' type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
        
      </form>
      <PaystackButton className='bg-white outline-none font-semibold flex items-center justify-center mx-auto px-4 py-2' {...componentProps} />
    </div>
  );
};
