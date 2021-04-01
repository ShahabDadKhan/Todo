import firebase from "firebase/app";
import "firebase/auth";
// import 'firebase/firestore';
import "firebase/storage";
import "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSL4M7wFYjNROlggyk_IhEqpSVqZdSeJs",
  authDomain: "todo-6172c.firebaseapp.com",
  projectId: "todo-6172c",
  storageBucket: "todo-6172c.appspot.com",
  messagingSenderId: "523472167899",
  appId: "1:523472167899:web:386e40ee673274358abdfe",
  measurementId: "G-RF40DFRE3Q",
};
// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
// export const storage = firebase.storage()
// export const database = firebase.database()

export default app;
