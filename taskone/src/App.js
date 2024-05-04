import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './CrudWithRouting/HomePage';


// import UncontrolForm from './modules/Form/UncontrolForm'
// import ControlFrom from './modules/Form/ControlFrom'
// import FormVel from './modules/Form/FormVel';
// import Arry from './modules/ConceptArry/Arry';
// import Task from './modules/Event handling/Task';
// import ContentOne from './modules/Counter project/ContentOne';
// import Footer from './modules/Counter project/Footer';
// import Header from './modules/Counter project/Header';
// import Sidebar from './modules/Counter project/SideBar';


// second project
// import NavBar from './CrudWithRouting/NavBar';


function App() {
  return (
    <>
      {/* <Header />
      <ContentOne/>
      <Sidebar />
      <Footer/> */}
      {/* <Arry /> */}
      {/* <Task/> */}
      {/* <FormVel /> */}
      {/* <ControlFrom/> */}
      {/* <UncontrolForm/> */}

      {/* project */}
      {/* <Localstorage /> */}

      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>

    </>

  );
}

export default App;
