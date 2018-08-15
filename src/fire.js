import firebase from 'firebase';


var config = {
    apiKey: "<YOUR FIREBASE API KEY HERE>",
    authDomain: "<_____________________>",
    databaseURL: "<________________________>",
    projectId: "<___________________________>",
    storageBucket: "<________________________________>",
    messagingSenderId: "<____________________________________________________________>"
  };
  
  export var fire = firebase.initializeApp(config);
  export const database = firebase.database();
  export const storage = firebase.storage();
  export const auth = firebase.auth();
  export const user = firebase.auth().currentUser;
  export var provider = new firebase.auth.GoogleAuthProvider();
  
export default fire;
