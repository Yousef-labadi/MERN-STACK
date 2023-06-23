import React, { useState, useEffect } from 'react';
import CreateForm from '../components/CreateForm';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const [name, setName] = useState('');
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/authers/"+id)
      .then(res => {
        console.log(res.data);
        setName(res.data.auther.name);
        setLoaded(true);
      })
      .catch(err => console.error(err));
  }, [id]);

  const updateAuther = name => {
    axios.put("http://localhost:8000/api/authers/"+id, { name })
      .then(res => {
        console.log(res.data);
        setName('');
        navigate('/');
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      {loaded && <CreateForm initialName={name} myFun={updateAuther} />}
    </div>
  );
};

export default Edit;
