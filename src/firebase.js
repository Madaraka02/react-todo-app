import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQnMubWKvOKq-z44nigMtN_w8suVCBEN8",
    authDomain: "todod-2a1dc.firebaseapp.com",
    databaseURL: "https://todod-2a1dc.firebaseio.com",
    projectId: "todod-2a1dc",
    storageBucket: "todod-2a1dc.appspot.com",
    messagingSenderId: "625676466146",
    appId: "1:625676466146:web:a5331714d4e3c74c58abbb",
    measurementId: "G-7NBENHFQE6"

});
const db = firebaseApp.firestore();
export { db};