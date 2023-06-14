import React from 'react'
import { useParams } from "react-router-dom";
const Number = () => {
    const { number,color,backcolor } = useParams();
  return (
    <div style={{color:color,backgroundColor:backcolor}}>{isNaN(+number)?"the word is: "+number:"the number is : "+number}</div>
  )
}

export default Number