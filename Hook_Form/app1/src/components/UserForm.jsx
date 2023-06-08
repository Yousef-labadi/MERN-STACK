import React, { useState } from 'react';

const UserForm = (props) => {
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [fnameError, setFnameError] = useState("");
  const [lnameError, setlnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cpasswordError, setCPasswordError] = useState("");
  

  const createUser = (e) => {
    e.preventDefault();
    const newUser = {  lname, email, password, cpassword };
    
  };
  const handleFname = (e) => {
    setfname(e.target.value);
    if(e.target.value.length < 1) {
        setFnameError("First Name is required!");
    } else if(e.target.value.length < 2) {
        setFnameError("First Name must be 2 characters or longer!");
    } else {
        setFnameError("");
    }
}
const handlelname = (e) => {
    setlname(e.target.value);
    if(e.target.value.length < 1) {
        setlnameError("Last Name is required!");
    } else if(e.target.value.length < 2) {
        setlnameError("Last Name must be 2 characters or longer!");
    } else {
        setlnameError("");
    }
}
const handleEmail = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length < 1) {
        setEmailError("Email is required!");
    } else if(e.target.value.length < 2) {
        setEmailError("Email must be 2 characters or longer!");
    } else {
        setEmailError("");
    }
}
const handlePassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 1) {
        setPasswordError("Password is required!");
    } else if(e.target.value.length < 8) {
        setPasswordError("Password must be 8 characters or longer!");
    } else {
        setPasswordError("");
    }
}
const handleCPassword = (e) => {
    setCpassword(e.target.value);
    if (e.target.value.length < 1) {
        setCPasswordError("Confirm Password is required!");
    } else if (e.target.value.length < 8) {
        setCPasswordError("Confirm Password must be 8 characters or longer!");
    } else if (e.target.value !== password) {
        setCPasswordError("Passwords must match");
    } else {
        setCPasswordError("");
    }
}

  return (
    <div className="form-container">
      <form onSubmit={createUser} className="form">
        <div className="form-group">
          <label className="form-label">First Name:</label>
          <input
            type="text"
            className="form-input"
            value={fname}
            onChange={handleFname}
          />
          {
            
            <p style={{color:'red'}}>{ fnameError }</p>
          }
        </div>
        <div className="form-group">
          <label className="form-label">Last Name:</label>
          <input
            type="text"
            className="form-input"
            
            onChange={handlelname}
          />
          {
            
            <p style={{color:'red'}}>{ lnameError }</p>
          }
        </div>
        <div className="form-group">
          <label className="form-label">Email Address:</label>
          <input
            type="email"
            className="form-input"
            
            onChange={handleEmail}
          />
          {
            <p style={{color:'red'}}>{ emailError }</p>
            
          }
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-input"
            
            onChange={handlePassword}
          />
          {
            <p style={{color:'red'}}>{ passwordError }</p>
            
          }
        </div>
        <div className="form-group">
          <label className="form-label">Confirm Password:</label>
          <input
            type="password"
            className="form-input"
            
            onChange={handleCPassword}
          />
          {
            <p style={{color:'red'}}>{ cpasswordError }</p>
          }
        </div>
       
      </form>
      <div className="form-data">
        <h2>Your Form Data</h2>
        <p>{fname}</p>
        <p>{lname}</p>
        <p>{email}</p>
        <p>{password}</p>
        <p>{cpassword}</p>
      </div>
    </div>
  );
};

export default UserForm;
