import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC5L1zNqZiQjU3MX3Y2UVkViVBYE5tHDqU",
    authDomain: "janllamas-e003e.firebaseapp.com",
    projectId: "janllamas-e003e",
    storageBucket: "janllamas-e003e.appspot.com",
    messagingSenderId: "1023644448183",
    appId: "1:1023644448183:web:e255637ca07ba88276e432",
    measurementId: "G-RZ58MDGD0K"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;