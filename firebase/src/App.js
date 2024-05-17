import database from './firebase'
import{set,ref} from 'firebase/database'
import './App.css';

function App() {
  const putData = () => {
    set(ref(database, "User/Test"), {
      name: "Test",
      age: 20,
      email: "test@gmail.com"
    })
  }

  const putsec = () => {
    set(ref(database, "User/Test1"), {
      name: "het",
      age: 25,
      email: "het@gmail.com"
    })
  }

  const putthird = () => {
    set(ref(database, "User/Test2"), {
      name: "dhruval",
      age: 23,
      email: "dhruval@gmail.com"
    })
  }


  return (
    <>
      <h1>Real Time Database</h1>
      <button onClick={putData}>Pass Data</button><br /><br />
      <button onClick={putsec}>Pass sec Data</button><br /><br />
      <button onClick={putthird}>Pass third Data</button>


    </>
  );
}

export default App;
