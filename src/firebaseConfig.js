const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyDSPHnMAGY1iqe12wk_WRakxCoEutxM7dE",
    authDomain: "deep-blue-sample.firebaseapp.com",
    databaseURL: "https://deep-blue-sample.firebaseio.com",
    projectId: "deep-blue-sample",
    storageBucket: "deep-blue-sample.appspot.com",
    messagingSenderId: "1070942423558"
  };
firebase.initializeApp(config);
const database = firebase.database();
var googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase,googleAuthProvider, database as default}