import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDnN7PXTH2P4PlDtQlEC2-J_zo_svTF084",
    authDomain: "test-fdda0.firebaseapp.com",
    databaseURL: "https://test-fdda0.firebaseio.com",
    projectId: "test-fdda0",
    storageBucket: "test-fdda0.appspot.com",
    messagingSenderId: "1081294065377"
  };
  const app = firebase.initializeApp(config);
  const base = Rebase.createClass(app.database())
 
  export { base }
  
  
  
  
  