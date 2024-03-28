import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA8t3s2rG2csSElaP5ot10oPyYVseSyzhY",
  authDomain: "bookeep-lms.firebaseapp.com",
  projectId: "bookeep-lms",
  storageBucket: "bookeep-lms.appspot.com",
  messagingSenderId: "585810721507",
  appId: "1:585810721507:web:de3b3c7e3a1ebe89b5a3d6"
};

const app = initializeApp(firebaseConfig);

export default app;