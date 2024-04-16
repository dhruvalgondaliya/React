import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Router from './component/Router';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>

    </>
  );
}
export default App;
