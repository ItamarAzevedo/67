import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCr8V9urFHgxLZJVZaviDTbYL5r-NvJzC4",
  authDomain: "pro-c58-62aca.firebaseapp.com",
  databaseURL: "https://pro-c58-62aca-default-rtdb.firebaseio.com",
  projectId: "pro-c58-62aca",
  storageBucket: "pro-c58-62aca.appspot.com",
  messagingSenderId: "592820462806",
  appId: "1:592820462806:web:c470c62cc5b83f7cdb9577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();