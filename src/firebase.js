import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBAqWlq9zg-Uez07zYn4iIEjWrKZXohF-Q",
    authDomain: "todo-app-cp-6a1cb.firebaseapp.com",
    databaseURL: "https://todo-app-cp-6a1cb.firebaseio.com",
    projectId: "todo-app-cp-6a1cb",
    storageBucket: "todo-app-cp-6a1cb.appspot.com",
    messagingSenderId: "1055100116449",
    appId: "1:1055100116449:web:0069b99af461e597ea46a0"
});

const db = firebaseApp.firestore();

export default db;

