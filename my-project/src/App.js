
// import Hooks from './Components/Hooks';

import './App.css'
// import { Route, Routes } from 'react-router-dom';

import Input from './Components/Redux/Input'
import Display from './Components/Redux/Display'

// import ContectPage from './Projects/Bootstrap Template/Contect';
// import HomePage from './Projects/Bootstrap Template/HomePage';
// import PractiseCrud from './Components/PractiseCrud';
// import Crud from './Components/crud';
// import Home from './Projects/Crud With Routing/Home';
// import User from './Projects/Crud With Routing/User';
// import Counter from './Components/Redux/Counter';
// import Login from './Projects/Crud With Routing/Login';
// import About from './Routing/About';
// import Contact from './Routing/Contact';
// import Home from './Routing/Home';
// import Searching from './Components/Searching';
// import css from './User.css'



function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={ <Contact/>} />

      </Routes > */}

      {/* <Searching/> */}
      
      {/* <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/ContectPage" element={ <ContectPage/>} />
      </Routes> */}

      {/* <PractiseCrud /> */}
      {/* <Crud/> */}

      
      
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/User" element={<User/>} />
        <Route path="/login" element={<Login/>} />
      </Routes> */}

      {/* <Counter/> */}

      <Input/>
      <br/>
      <Display/>
    </>

  )
}

export default App;