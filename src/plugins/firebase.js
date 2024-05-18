import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCqd2U9UhRs55cCSIN2UYDQ6DkeXGwxB4E",
    authDomain: "p2-fwm.firebaseapp.com",
    projectId: "p2-fwm",
    storageBucket: "p2-fwm.appspot.com",
    messagingSenderId: "904007909154",
    appId: "1:904007909154:web:56e7c1928e43aa46306f7b"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;