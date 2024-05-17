// import logo from './logo.svg';y
// import { Route, Routes } from 'react-router-dom';
import './App.css';

// import Home from './CrudWithRouting/Home'

// redux file
import Input from './Redux/Input';
import Display from './Redux/Display'


function App() {
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Home />} />
      </Routes> */}


      {/* redux */}

      <Input />
      <br /><hr />
      <Display />


    </>

  );
}

export default App;
