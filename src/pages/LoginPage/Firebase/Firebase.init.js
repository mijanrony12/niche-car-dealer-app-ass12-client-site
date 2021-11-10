import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseInitial = () => {
     return initializeApp(firebaseConfig);
}

export default firebaseInitial;