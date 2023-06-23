import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from '../components/Home';

const Main = () => {
  const [allAuthers, setAllAuthers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/authers')
      .then(res => {
        setAllAuthers(res.data.authers);
        setLoaded(true);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const deleteAuther = (id) => {
    axios.delete("http://localhost:8000/api/authers/" + id)
      .then((res) => {
        console.log(res);
        // Update the state by removing the deleted author
        setAllAuthers(allAuthers.filter(author => author._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Home allAuthers={allAuthers} fun={deleteAuther} />
    </div>
  );
}

export default Main;
