import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyB6rLDdQ-b0j6SW83n7YRODNfAVeXcZCMI",
    authDomain: "quick-saty-main.firebaseapp.com",
    projectId: "quick-saty-main",
    storageBucket: "quick-saty-main.appspot.com",
    messagingSenderId: "962446229121",
    appId: "1:962446229121:web:e52d06e1c3433f5b315780"
}
firebase.initializeApp(config);

export default firebase;