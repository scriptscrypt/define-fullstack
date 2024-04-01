import '../styles/ekyc.css';
import React, { useState } from 'react';
import axios from 'axios';


const EkycPage = () => {

const [formData, setFormData] = useState({
    name: '',
    aadhar_number: '',
    phone_number: '',
    wallet_address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);

    try {
      const response = await axios.post('http://localhost:5500/ekyc/EKYCDetail', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response:', response);

      if (response.status === 200) {
        console.log('Data saved successfully!');
        // You can reset the form or perform any other action here
      } else {
        console.error('Failed to save data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (<>

    <form onSubmit={handleSubmit}>
      <h2 className='head'>EKYC Registration</h2>

      {/* <label htmlFor="name">Name:</label> */}
      <input
        type="text"
        id="name"
        name="name"
        className='ant-input-small'
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />

      {/* <label htmlFor="aadhar_number">Aadhar Number:</label> */}
      <input
        type="text"
        id="aadhar_number"
        name="aadhar_number"
        className='ant-input-small'
        pattern="\d{12}"
        value={formData.aadhar_number}
        onChange={handleChange}
        placeholder="Enter 12-digit Aadhar number"
        required
      />

      {/* <label htmlFor="phone_number">Phone Number:</label> */}
      <input
        type="tel"
        id="phone_number"
        name="phone_number"
        className='ant-input-small'
        pattern="\d{10}"
        value={formData.phone_number}
        onChange={handleChange}
        placeholder="Enter 10-digit phone number"
        required
      />

      {/* <label htmlFor="wallet_address">Wallet Address:</label> */}
      <input
        type="text"
        id="wallet_address"
        name="wallet_address"
        className='ant-input-small'
        value={formData.wallet_address}
        onChange={handleChange}
        placeholder="Enter your wallet address"
        required
      />

      <button type="submit" className='swapButton'>Submit</button>
    </form>
    </> );
};


export default EkycPage;
