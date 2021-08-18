import firebase from "firebase";

const firebaseConfig = {
    
        apiKey: "AIzaSyBQhUoBBZgYroqFHbwl9n1GCMF1G1UUg3A",
        authDomain: "clone-86526.firebaseapp.com",
        projectId: "clone-86526",
        databaseURL: "https://clone-86526.firebaseio.com",
        storageBucket: "clone-86526.appspot.com",
        messagingSenderId: "708437214960",
        appId: "1:708437214960:web:cd64700141288f906ca435",
        measurementId: "G-0V6WC4QE1D"

      
};
 
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };