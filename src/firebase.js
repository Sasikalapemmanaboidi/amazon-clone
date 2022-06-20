import firebase from "firebase";


 const firebaseConfig = {
    // paste your firebase config object here
        apiKey: "AIzaSyAlNu0hksWPZkN1P0mcKOwumtnGmfT96K4",
        authDomain: "clone-31c25.firebaseapp.com",
        projectId: "clone-31c25",
        storageBucket: "clone-31c25.appspot.com",
        messagingSenderId: "115596257673",
        appId: "1:115596257673:web:0878f63f23972a00365958",
        measurementId: "G-SEE4P00GSB"
      };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
const db = firebaseApp.firestore();
export { auth };
export {db};