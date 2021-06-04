import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCfDN4WtAeMMOHCaDDnDnbEb0KKk0mlQ4E",
    authDomain: "olx-clone-449c8.firebaseapp.com",
    projectId: "olx-clone-449c8",
    storageBucket: "olx-clone-449c8.appspot.com",
    messagingSenderId: "203304330131",
    appId: "1:203304330131:web:e8af8461c1f0a43e3f3e66",
    measurementId: "G-CVVYMWCDT4"
  };

  export default firebase.initializeApp(firebaseConfig);