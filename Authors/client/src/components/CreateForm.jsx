import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateForm = (props) => {
  const [name, setName] = useState(props.initialName);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      setError('Name is required');
    } else if (name.length < 5) {
      setError('Name must be more than 5 characters');
    } else {
      setError('');
      props.myFun(name);
    }
  };

  return (
    <div>
      <h2>Favorite Authors</h2>
      <Link to="/">Home</Link>
      {name ? <h2>Edit Form</h2> : <h2>Add new Author</h2>}
      <div>
        <form onSubmit={handleSubmit}>
          <p>
            Name: <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
          </p>
          {error && <p style={{color:'red'}}>{error}</p>}
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
