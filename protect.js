import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut }
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

const WATCH_LIMIT = 48 * 60 * 60 * 1000;
const NO_LIMIT_EMAILS = ["premium@vyomramoul.xyz"];

onAuthStateChanged(auth, user => {
  if (!user) return window.location.href = "login.html";

  const video = document.getElementById("videoWrapper");
  const blocked = document.getElementById("blocked");

  if (!video) return;

  if (NO_LIMIT_EMAILS.includes(user.email)) {
    video.style.display = "block";
    return;
  }

  const key = `watchStart_${user.uid}`;
  const start = localStorage.getItem(key) || Date.now();
  localStorage.setItem(key, start);

  if (Date.now() - start > WATCH_LIMIT) {
    blocked.style.display = "flex";
  } else {
    video.style.display = "block";
  }
});

window.logout = () => signOut(auth).then(() => location.href = "login.html");
window.goToFilm = () => location.href = "watch.html";
