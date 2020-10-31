const firebase = require("firebase");
require("firebase/firestore");

//Initializing firebase firestore
firebase.initializeApp({
    apiKey: "AIzaSyBaLH-EyjnuNYwPUqZY5CG8qpUT3Vi0RpA",
    authDomain: "XXXX.firebaseapp.com",
    databaseURL: "https://mccproj-78f3f.firebaseio.com",
    projectId: "mccproj-78f3f",
    storageBucket: "mccproj-78f3f.appspot.com",
    messagingSenderId: "619701083912"
});

export default firebase;