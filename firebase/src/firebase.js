import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyDrWTL91abhTxYxekY04kVv0tHRPYpCpIc",
    authDomain: "reactpractice-43df5.firebaseapp.com",
    projectId: "reactpractice-43df5",
    storageBucket: "reactpractice-43df5.appspot.com",
    messagingSenderId: "205140383308",
    appId: "1:205140383308:web:2a966d53d7c466996086e9"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const database = getDatabase(app);
// export default database;