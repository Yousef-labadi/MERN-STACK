import React, { Component } from 'react';



class Mycom extends Component {
    constructor(props) {
      super(props);
      this.state = {
        age: this.props.age
      };
    }
  
    IncrementAge = () => {
      this.setState({age: this.state.age +1});
    }
    DicrementAge = () => {
        this.setState({age: this.state.age -1});
      }
  
    render() {
      return (
        <div>
          <h1>{this.props.first_name}, {this.props.last_name}</h1>
          <p>Age: {this.state.age}</p>
          <p>Hair Color: {this.props.color}</p>
          <button onClick={this.IncrementAge} >Birthday Button for {this.props.first_name} {this.props.last_name} </button>
          <button onClick={this.DicrementAge} >Birthday Button for {this.props.first_name} {this.props.last_name} </button>
        </div>
      );
    }
  }
export default Mycom;