import React from 'react';
import './App.css';
import Mycom from './components/Mycom';

function App() {
  return (
    <>
    <Mycom first_name={"Doe"}last_name={"Jane"}age={45}color ={"Black"}/>
    <Mycom first_name={"Smith"}last_name={"John"}age={88}color ={"Brown"}/>
    <Mycom first_name={"Fillmore"}last_name={"Millard"}age={50}color ={"Brown"}/>
    <Mycom first_name={"Smith"}last_name={"Maria"}age={62}color ={"Brown"}/>
    
    </>
  );
}

export default App;
