import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDWSqZFP_3Wgkdq4bbuyDN1N025Ddlcg4k",
    authDomain: "fir-crud-beb70.firebaseapp.com",
    projectId: "fir-crud-beb70",
    storageBucket: "fir-crud-beb70.appspot.com",
    messagingSenderId: "596032863555",
    appId: "1:596032863555:web:4e4b34610433be580303f6",
    measurementId: "G-VSB5HGKSDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export default database;