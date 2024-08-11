import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDVOxpFff-59GZtWgNkLALklaVIgclIF2Y",
    authDomain: "pixel-games-b8f42.firebaseapp.com",
    projectId: "pixel-games-b8f42",
    storageBucket: "pixel-games-b8f42.appspot.com",
    messagingSenderId: "753448217049",
    appId: "1:753448217049:web:b56e50572abfb2ea0811c8"
};

initializeApp(firebaseConfig);

const db =getFirestore()


export default db