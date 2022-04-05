import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyCoe9_uj7p8dWZ56s0KHgXiZnP6P6Rz9Rs",
    authDomain: "disneyplus-3feeb.firebaseapp.com",
    projectId: "disneyplus-3feeb",
    storageBucket: "disneyplus-3feeb.appspot.com",
    messagingSenderId: "249552915715",
    appId: "1:249552915715:web:4cedf4ec3e0295034d6d36",
    measurementId: "G-ZQQRBVGNTZ"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = getStorage(firebaseApp);
  //const storage = firebase.storage();
  
  export { auth, provider,storage};
  export default db;
  
  


