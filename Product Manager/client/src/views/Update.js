import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";
import Form from '../components/Form';

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const [loaded, setLoaded] = useState(false);
    const navigate=useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDesc(res.data.product.desc);
                setLoaded(true);

            })
    }, []);

    const updateProduct = product => {
        
        axios.put("http://localhost:8000/api/products/"+id, product
            
        )
            .then(res => {console.log(res)
                setTitle('');
                setPrice('');
                setDesc('');
                navigate("/");
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            {/* <h1>Update a Project</h1> */}
            {loaded && <Form  initialTitle={title} initialPrice={price} initialDesc={desc} myFun={updateProduct}/>}
            {/* <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text"
                        name="Title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text"
                        name="price"
                        value={loaded && price}
                        onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description : </label><br />
                    <input type="text"
                        name="desc"
                        value={desc}
                        onChange={(e) => { setDesc(e.target.value) }} />
                </p>
                <input type="submit" />
            </form> */}
        </div>
    )
}

export default Update;