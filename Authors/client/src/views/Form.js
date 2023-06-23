import React, { useState} from 'react';
import CreateForm from '../components/CreateForm'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Form = () => {
    const [allAuther, setAllAuther] = useState([]);
    const navigate = useNavigate();

    const handelSubmit = (name) => {

        axios.post('http://localhost:8000/api/authers', {name}

        )
            .then(res => {

                setAllAuther([...allAuther, res.data.authers])
            })
            .catch(err => console.log(err));
        navigate("/");
    }

    return (
        <div>
            <CreateForm initialName="" myFun={handelSubmit} />

        </div>
    )
}

export default Form