import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from
  "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANb_c2o2W2IjH6xy_DSurbXdXljjZkCf4",
  authDomain: "fridgelore-310c3.firebaseapp.com",
  projectId: "fridgelore-310c3",
  storageBucket: "fridgelore-310c3.appspot.com",
  messagingSenderId: "14144562633",
  appId: "1:14144562633:web:9772b2c681ab8eb9f9b418",
  measurementId: "G-GRMFKEN3TE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
 signInWithPopup(auth, authProvider);
}
export function signOut(): void {
 auth.signOut();
}