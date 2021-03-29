// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAqG-D8I9OobSJSJ9ghSK_GP6jQ5UCvJ7o",
  authDomain: "netflix-ebc66.firebaseapp.com",
  projectId: "netflix-ebc66",
  storageBucket: "netflix-ebc66.appspot.com",
  messagingSenderId: "558774540410",
  appId: "1:558774540410:web:2f293491d2c8f10143c3c3",
  measurementId: "G-015KWG623H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;