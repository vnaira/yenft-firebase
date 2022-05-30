
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKze_qHXFFJvlKBeRIsY2MwJNc-FMacxQ",
  authDomain: "appyenft.firebaseapp.com",
  projectId: "appyenft",
  storageBucket: "appyenft.appspot.com",
  messagingSenderId: "79285702754",
  appId: "1:79285702754:web:d1100b54340f6df6ca413b",
  measurementId: "G-JDW0K287DG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseConfig);
const analytics = getAnalytics(app);

onAuthStateChanged(auth, user =>{
  if(user != null){
    console.log('logged in!');
  }else{
    console.log('No user');
  }
});


