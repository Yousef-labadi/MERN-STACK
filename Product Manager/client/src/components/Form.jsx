import React,{useState} from 'react'
import axios from 'axios';

const Form = (props) => {
    const [title,setTitle]=useState(props.initialTitle);
    const [price,setPrice]=useState(props.initialPrice);
    const [desc,setDesc]=useState(props.initialDesc);
    
  const handelSubmit=(e)=>{
    e.preventDefault();
    props.myFun({title,price,desc});
  }
  return (
    <div>
      {title ? <h2>Edit Form</h2>:<h2>Product Manager</h2>}
        
        <form onSubmit={handelSubmit}>
            <p>Title <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title}></input></p>
            <p>Price <input type='number' onChange={(e)=>setPrice(e.target.value)} value={price}></input></p>
            <p>Description <input type='text' onChange={(e)=>setDesc(e.target.value)} value={desc}></input></p>
            <input type='submit' value="Create"></input>
        </form>
    </div>
  )
}

export default Form