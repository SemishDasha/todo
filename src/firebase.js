// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIaumeLwyh2I_H88EklHn54iqGpVgtBIA",
    authDomain: "todo-e06bc.firebaseapp.com",
    projectId: "todo-e06bc",
    storageBucket: "todo-e06bc.appspot.com",
    messagingSenderId: "722755693641",
    appId: "1:722755693641:web:d0deee1747ead67cdd2398"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const FBFirestoreRef = app.firestore();
//
// export function refData(){
//     return FBFirestoreRef.collection('tasks')
// }

export default getFirestore();