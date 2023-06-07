import React, { Component } from 'react';



class Mycom extends Component {
    render() {
        
        return (
             <div >
                <h1>{this.props.first_name}, {this.props.last_name} </h1>
                <p>Age : {this.props.age}</p>
                <p>Hair Color : {this.props.color}</p>
             </div>
            );
    }
}
    
export default Mycom;