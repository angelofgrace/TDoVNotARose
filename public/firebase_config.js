import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrvEo-vtYFLtX3RBZ1W45tuyO8ARHQR8s",
  authDomain: "tdov-webvr-2022.firebaseapp.com",
  projectId: "tdov-webvr-2022",
  storageBucket: "tdov-webvr-2022.appspot.com",
  messagingSenderId: "1044578005648",
  appId: "1:1044578005648:web:aff0622f9605a8fa8c5e15",
  measurementId: "G-1XPKHVYP9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
