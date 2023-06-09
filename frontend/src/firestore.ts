import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const setConfig = () => {
    return {
      apiKey: import.meta.env.VITE_REACT_APP_apiKey,
      authDomain: import.meta.env.VITE_REACT_APP_authDomain,
      projectId: import.meta.env.VITE_REACT_APP_projectId,
      databaseURL: import.meta.env.VITE_REACT_APP_databaseURL,
      storageBucket: import.meta.env.VITE_REACT_APP_storageBucket,
      messagingSenderId: import.meta.env.VITE_REACT_APP_messagingSenderId,
      appId: import.meta.env.VITE_REACT_APP_appId,
    };
  }


const app = initializeApp(setConfig());
const db = getFirestore(app);


const CHATBOT_COLLECTION = "Test"
export {app,db,CHATBOT_COLLECTION}