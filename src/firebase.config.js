import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCr4KIK5osFQudcS15XyEO6LRHQfVlaCvY",
    authDomain: "bikeapp-6ddcc.firebaseapp.com",
    projectId: "bikeapp-6ddcc",
    storageBucket: "bikeapp-6ddcc.appspot.com",
    messagingSenderId: "188259840119",
    appId: "1:188259840119:web:c263798db5369d875d1672",
    measurementId: "G-QTN7TW0D1Q"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export default db;