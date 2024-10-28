import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDGU4JY-8U6MYcpyN-dzXS5xQ0J_dsW_Fg",
  authDomain: "registion-7f99c.firebaseapp.com",
  projectId: "registion-7f99c",
  storageBucket: "registion-7f99c.appspot.com",
  messagingSenderId: "1023272214843",
  appId: "1:1023272214843:web:1b4dff6039d19eb23e971e",
  measurementId: "G-9TYHMP98LN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export { auth };
