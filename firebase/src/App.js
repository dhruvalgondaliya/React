// import database from './firebase'
// import { set, ref } from 'firebase/database'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import './App.css';
import app from './firebase';

function App() {

  // Real Time Data Store in firebase
  // const putData = () => {
  //   set(ref(database, "User/Test"), {
  //     name: "Test",
  //     age: 20,
  //     email: "test@gmail.com"
  //   })
  // }

  // const putsec = () => {
  //   set(ref(database, "User/Test1"), {
  //     name: "het",
  //     age: 25,
  //     email: "het@gmail.com"
  //   })
  // }

  // const putthird = () => {
  //   set(ref(database, "User/Test2"), {
  //     name: "dhruval",
  //     age: 23,
  //     email: "dhruval@gmail.com"
  //   })
  // }


  // collection Type Data store in firebase
  const fireStore = getFirestore(app)

  const adddocument = () => {
    addDoc(collection(fireStore, "User"), {
      name: "Test",
      age: 20
    })
  }

  const subCollection = () => {
    addDoc(collection(fireStore, "User/fbrm6Pz2WYhltWwyrj7n/SecondUser"), {
       name:'hello',
       age:20
    })
  }


  return (
    <>
      {/* <h1>Real Time Database</h1>
      <button onClick={putData}>Pass Data</button><br /><br />
      <button onClick={putsec}>Pass sec Data</button><br /><br />
      <button onClick={putthird}>Pass third Data</button> */}

      <h1>collection Type Data</h1>
      <button onClick={adddocument}>ADD collection</button>
      <button onClick={subCollection}>ADD subCollection</button>

    </>
  );
}

export default App;
