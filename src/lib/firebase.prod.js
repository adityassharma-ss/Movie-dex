import Firebase from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAfCgZ2dCtugUlxKchESdw78y9fkFZ6d7g',
  authDomain: 'netflix-dummy-c47b6.firebaseapp.com',
  databaseURL: 'https://netflix-test01.firebaseio.com',
  projectId: 'netflix-dummy-c47b6',
  storageBucket: 'netflix-dummy-c47b6.appspot.com',
  messagingSenderId: '541152959854',
  appId: '1:549167066543:web:82897065bb62f48d18135a',
  measurementId: "G-HJB0WJR6C1",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };
