import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';


const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/"+id)
      .then(res => {
        setProduct(res.data.product); 
        setLoaded(true);
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }, [id]);

  const deleteProduct =(id) => {
    axios.delete("http://localhost:8000/api/products/"+id)
    .then((res) =>{console.log(res);
      navigate("/")
    })
    .catch((err) => console.log(err));
  }

  return (
    <div>

      {loaded && <p>Title :{product.title}</p>}
      {loaded ? <p>Price : {product.price}</p> : <p></p>}
      {loaded ? <p>Descriptions : {product.desc}</p> : <p></p>}
      <p><button onClick={()=>deleteProduct(product._id)}>Delete</button></p>
    </div>
  );
};

export default Detail;