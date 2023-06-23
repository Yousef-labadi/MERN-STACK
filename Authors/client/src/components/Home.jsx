import React from 'react'
import { Link } from 'react-router-dom'

// import axios from 'axios';
const Home = (props) => {
  const { allAuthers, fun: deleteAuther } = props;
    
  return (
    <div>
        <h2>Favorite authers</h2>
        <Link to= "/new">Add an auther</Link>
        <p>We have quotes by : </p>

        <div  className="table-container">
  <table  className="table">
    <thead>
      <tr>
        <th >Name</th>
        <th >Delete</th>
        <th >Edit</th>
      </tr>
    </thead>
    <tbody>
      {props.allAuthers.map((author, i) => (
        <tr key={i}>
          <td >{author.name}</td>
          <td >
           <button onClick={()=>deleteAuther(author._id)}>Delete</button>
          </td>
          <td >
          <Link to={"/auther/" + author._id + "/edit"}>
        Edit
      </Link> 
      
     
          </td>
          
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  )
}

export default Home