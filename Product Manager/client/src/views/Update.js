import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/projects/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data);
                setDesc(res.data);
                setLoaded(true);

            })
    }, []);

    const updateProject = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/projects/' + id/'edit', {
            title,
            price,
            desc
        })
            .then(res => {console.log(res)
                setTitle('');
                setPrice('');
                setDesc('');})
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Update a Project</h1>
            <form onSubmit={updateProject}>
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
            </form>
        </div>
    )
}

export default Update;

