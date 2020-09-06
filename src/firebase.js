import firebase from "firebase";

const firebaseConfig = {
  //config from firebase
  apiKey: "AIzaSyBk9QrS5BJNZYhk_wRt5R3jdgwD6y_ZEJI",
  authDomain: "facebook-clone-f68b3.firebaseapp.com",
  databaseURL: "https://facebook-clone-f68b3.firebaseio.com",
  projectId: "facebook-clone-f68b3",
  storageBucket: "facebook-clone-f68b3.appspot.com",
  messagingSenderId: "596896645285",
  appId: "1:596896645285:web:29078d92f5fb90c3cb0d4c",
  measurementId: "G-2K9KPBP099",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
//connect to firebase
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
