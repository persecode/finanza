// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2NSa8pVhVJ-TmRHLROSQuyZMnrzGqPHw",
  authDomain: "finanzas-f70cf.firebaseapp.com",
  projectId: "finanzas-f70cf",
  storageBucket: "finanzas-f70cf.appspot.com",
  messagingSenderId: "1084460639807",
  appId: "1:1084460639807:web:47a58c77f97c19c9ca7a8a",
  measurementId: "G-8Z9LK258PY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
