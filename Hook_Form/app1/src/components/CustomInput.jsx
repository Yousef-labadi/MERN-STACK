import React from 'react'

const CustomInput = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const customHandleInput = (e) => {
        if(e.target.value.length < 1) {
            setErrorMessage(props.label+" is required!");
        } else if(e.target.value.length < 2) {
            setErrorMessage(props.label+" must be 2 characters or longer!");
        } else {
            setErrorMessage("");
        }
        props.handleInput(e)
    }
  return (
    <div className="form-group">
          <label className="form-label">{props.label}:</label>
          <input
            type="text"
            className="form-input"
            value={props.value}
            onChange={customHandleInput}
          />
          {
            
            <p style={{color:'red'}}>{ errorMessage }</p>
          }
        </div>
  )
}

export default CustomInput