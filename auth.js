import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCAj6BVrDovDspgEAtuNDBJ2GBxeavzzeo",
  authDomain: "voluntarily-bald-exclusive.firebaseapp.com",
  projectId: "voluntarily-bald-exclusive",
  storageBucket: "voluntarily-bald-exclusive.firebasestorage.app",
  messagingSenderId: "1088175377418",
  appId: "1:1088175377418:web:1aa5885953443fcadea3f3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, user => {
  if (user) window.location.href = "dashboard.html";
});

loginForm.addEventListener("submit", e => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => window.location.href = "dashboard.html")
    .catch(() => errorMsg.textContent = "Access denied");
});
