import React from 'react'
import { useRef } from 'react';
import '../CSS/bill.css'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Bill = ({ addedItems }) => {

  const navigate3 = useNavigate();
  const emailRef = useRef(null); // Create a reference for the email input

  const handleEmailInput = (e) => {
    e.preventDefault();
    const email = emailRef.current.value; // Access the value using the ref
    console.log(email);
    console.log(addedItems)
    toast.success('Order Completed')
  };
  const handleCancleButton=()=>{
      navigate3("/")
  }
  const handlePaymentDone=()=>{
    toast.success('Successfully toasted!')
  }

  return (
    <div className='bill-page'>
      <div className='bill-container'>
        <div className='company-heading'>
          <h1 className='heading'>Peturam</h1>
        </div>
        <hr className='line' />

        {/* List of Items */}
        <div className='listOfItems'>
          <ul className='ul'>
            {addedItems.map((item, index) => (
              <li key={index} className='listItem'>
                <h4>{index+1}.</h4>
                <h4>{item.productName}</h4>
                <p>. . . . . . . . . . . . . . . . . . . . . .  Rs {item.productPrice}</p>
                
              </li>
            ))}
          </ul>
        </div>

        {/* Form for Email and Payment */}
        <hr></hr>
        <div className='totalbill'>
        <h4>Total amount:</h4>
            <h4>Rs. {addedItems.reduce((total, item) => total + item.productPrice, 0)}</h4>
        </div>
        <div className='form-div'>
          <form onSubmit={handleEmailInput} className='form'>
            <input
              type="email"
              required
              placeholder='Enter email'
              ref={emailRef}
              className='email-input'
            />
            <button type='submit' className='completeButton'  >
              Complete payment
            </button>
            <button type='button' className='cancleButton' onClick={handleCancleButton}>
              Cancel payment
            </button>
          </form>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
}

export default Bill;
