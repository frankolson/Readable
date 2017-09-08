// Vendor Assets
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCtUeHzZfW3ElbqRP-KoZfNrzfZEYu4vYw",
  authDomain: "readabl-a1d16.firebaseapp.com",
  databaseURL: "https://readabl-a1d16.firebaseio.com",
  projectId: "readabl-a1d16",
  storageBucket: "readabl-a1d16.appspot.com",
  messagingSenderId: "715032429305"
};

const fire = firebase.initializeApp(config);

export default fire;
