// import { GoogleLogin } from "react-google-login";
// import { FormEvent, useState } from "react";
import "./styles/loginpage.css";
import { initializeApp } from "firebase/app";
import { config } from "./config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

initializeApp(config.firebaseConfig);

export interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })

      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <div>
      <h1>Login with Google</h1>
      <button onClick={() => signInWithGoogle()} disabled={authing}>
        Login
      </button>
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  );
};

export default LoginPage;
