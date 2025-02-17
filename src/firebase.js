import firebase from 'firebase';
// import * as firebase from 'firebase';


const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBHMl6NDwKnZlfEh1TJHfX5BJR9AjIbxy0",
  authDomain: "whatsapp-clone-d8173.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-d8173.firebaseio.com",
  projectId: "whatsapp-clone-d8173",
  storageBucket: "whatsapp-clone-d8173.appspot.com",
  messagingSenderId: "713536945785",
  appId: "1:713536945785:web:aa57a41e4fb7a308835ea8",
  measurementId: "G-XN026HCDSZ"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db