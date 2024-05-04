import './App.css';
import HomePage from './Project/HomePage';
import Login from './Project/Login'
import SignUp from './Project/SingUp';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
