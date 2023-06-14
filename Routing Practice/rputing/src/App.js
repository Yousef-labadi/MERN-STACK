import React from 'react'
import About from './components/About';
import Home from './components/Home';
import Number from './components/Number';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:number/:color/:backcolor" element={<Number />} />
      </Routes>
    </div>
  );
}
    
export default App