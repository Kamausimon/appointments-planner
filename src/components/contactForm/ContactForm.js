import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {



 const handlenameChange = (e) => { 
  setName(e.target.value);
 };

 const handlePhoneChange = (e) => { 
  setPhone(e.target.value);
 };

 const handleEmailChange = (e) => { 
  setEmail(e.target.value);
 };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
       <label htmlFor="name" >  Name: </label>
       <input id="name"  value={name} type="text" onChange={handlenameChange} placeholder="Enter your name" required />

       <label htmlFor="phone" >  Phone: </label>
       <input id="phone" value={phone} type="tel" onChange={handlePhoneChange} placeholder="enter your phone number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />

       <label htmlFor="email"  > Email: </label>
       <input id="email" value={email} type="email" onChange={handleEmailChange} placeholder="enter your email" required />

       <button type="submit" onSubmit={handleSubmit}> Submit </button>
        </form>
    
    </>
  );
};

