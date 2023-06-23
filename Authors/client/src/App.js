
import './App.css';
import Main from './views/Main';
import Form from './views/Form';
import Edit from './views/Edit';



import {Routes,Route } from 'react-router-dom'
// import Delete from './views/Delete';
function App() {
  return (
    <div className="App">

<Routes>
  <Route element={<Main />} path="/" />
  <Route element={<Form />} path="/new" />
  <Route element={<Edit />} path="/auther/:id/edit" />
  

</Routes>

    </div>
  );
}

export default App;
