import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyCZAHM62EWMtD1kdgQKlfXmEHj_qaZzRZI",
    authDomain: "chakula-fe3e4.firebaseapp.com",
    databaseURL: "https://chakula-fe3e4.firebaseio.com",
    projectId: "chakula-fe3e4",
    storageBucket: "chakula-fe3e4.appspot.com",
    messagingSenderId: "977903779306"
  };
  
  export var fire = firebase.initializeApp(config);
  export const database = firebase.database();
  export const storage = firebase.storage();
  export const auth = firebase.auth();
  export const user = firebase.auth().currentUser;
  export var provider = new firebase.auth.GoogleAuthProvider();
  
export default fire;