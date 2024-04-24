import React from 'react'
import { createContext } from 'react'
// import './App.css'
import ChildA from './Reducer/ChildA'
import UseReducer from './Reducer/UseReducer';


const data = createContext()
const data1 = createContext()

function App() {

  const name = "Test";
  const age = 25;

  return (
    <>
      <h2>userContaxt</h2>
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <ChildA />
        </data1.Provider>
      </data.Provider >
      <hr /><hr /><hr />

      <UseReducer />
    </>
  )
}
export default App
export { data, data1 }