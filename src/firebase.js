import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCh9JMhCEgizOqC6r4IYSvisby8bBwDD38",
  authDomain: "portfolio-1c237.firebaseapp.com",
  databaseURL: "https://portfolio-1c237-default-rtdb.firebaseio.com",
  projectId: "portfolio-1c237",
  storageBucket: "portfolio-1c237.appspot.com",
  messagingSenderId: "183244861820",
  appId: "1:183244861820:web:3641f9191d7ece2997f4f9"
});

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

export default firebaseApp;