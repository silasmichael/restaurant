import firebase from 'firebase'

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyAosnqgkI0oSdfeTpoSufbKuNm2Fm5HOHA",
        authDomain: "restaurant-8fefd.firebaseapp.com",
        databaseURL: "https://restaurant-8fefd.firebaseio.com",
        projectId: "restaurant-8fefd",
        storageBucket: "restaurant-8fefd.appspot.com",
        messagingSenderId: "394251184740",
        appId: "1:394251184740:web:8b6d8b45b44bc97e2d8d71",
        measurementId: "G-418KDQT7BS"
    }
)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth}