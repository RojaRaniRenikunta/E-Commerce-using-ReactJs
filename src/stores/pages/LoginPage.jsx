import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [inputOtp, setInputOtp] = useState('');
  const [otpRequested, setOtpRequested] = useState(false);
  const [otpValidated, setOtpValidated] = useState(false);

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and limit to 10 characters
    if (value === '' || (value.match(/^[0-9]+$/) && value.length <= 10)) {
      setPhoneNumber(value);
    }
  };

  const handleOtpRequest = () => {
    if (phoneNumber.length === 10) {
      const randomOtp = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit OTP
      setOtp(randomOtp.toString());
      setOtpRequested(true);
      setOtpValidated(false);
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  const handleInputOtpChange = (e) => {
    setInputOtp(e.target.value);
  };

  const validateOtp = () => {
    if (otp === inputOtp) {
      setOtpValidated(true);
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className='login-div'>
        <div className='page-1'>
          <h1>Login</h1>
          <p>Get access to your Orders, Recommendations</p>
        </div>
        <div className='page-2'>
          <input
            type="text"
            placeholder='Enter Email/Mobile Number'
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            maxLength="10"  // Ensures the input does not exceed 10 characters
          />
          {!otpRequested ? (
            <button onClick={handleOtpRequest}>Request OTP</button>
          ) : (
            <>
              {otpValidated ? (
                <p>OTP verified successfully! You can now proceed.</p>
              ) : (
                <>
                  <p>OTP has been sent to {phoneNumber}. Enter OTP to verify:</p>
                  <input
                    type="text"
                    placeholder='Enter OTP'
                    value={inputOtp}
                    onChange={handleInputOtpChange}
                  />
                  <button onClick={validateOtp}>Verify OTP</button>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
