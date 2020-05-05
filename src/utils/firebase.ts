import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDVCzD5OcDovVc0EIl31lhAGgAKB7seCyg",
    authDomain: "react-slack-fb501.firebaseapp.com",
    databaseURL: "https://react-slack-fb501.firebaseio.com",
    projectId: "react-slack-fb501",
    storageBucket: "react-slack-fb501.appspot.com",
    messagingSenderId: "609536099291",
    appId: "1:609536099291:web:2e8e7fa3039eb55209ddfe"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
