import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const Display = (props) => {
const deleteProduct =(id) => {
  axios.delete("http://localhost:8000/api/products/"+id)
  .then((res) =>console.log(res))
  .catch((err) => console.log(err));
}
    return (
      <div>
  {props.allProducts.map((prod, i) => (
    <p key={i}>
      <Link to={"product/" + prod._id}>{prod.title}  </Link> 
      <Link to={"/product/" + prod._id + "/edit"}>
        Edit
      </Link>  
      <button onClick={()=>deleteProduct(prod._id)}>Delete</button>
    </p>
  ))}
</div>
);
  }
export default Display;