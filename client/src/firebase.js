// Import the functions you need from the SDKs you need
import axios from "axios";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  getIdToken,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2XZpqqGSTp_6roVm0GcBQ9RrnKrgps3Y",
  authDomain: "music-player-project-7bd7c.firebaseapp.com",
  projectId: "music-player-project-7bd7c",
  storageBucket: "music-player-project-7bd7c.appspot.com",
  messagingSenderId: "807013131171",
  appId: "1:807013131171:web:b4b4b7717a6ffb61b37016",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

    const token = await getIdToken(user);
    const { data } = await axios.get("http://localhost:5000/api/google", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
