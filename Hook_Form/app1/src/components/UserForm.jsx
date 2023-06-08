import React, { useState } from 'react';

const UserForm = (props) => {
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { fname, lname, email, password, cpassword };
    console.log('Welcome', newUser);
  };

  return (
    <div className="form-container">
      <form onSubmit={createUser} className="form">
        <div className="form-group">
          <label className="form-label">First Name:</label>
          <input
            type="text"
            className="form-input"
            value={fname}
            onChange={(e) => setfname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Last Name:</label>
          <input
            type="text"
            className="form-input"
            value={lname}
            onChange={(e) => setlname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address:</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Confirm Password:</label>
          <input
            type="password"
            className="form-input"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
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
