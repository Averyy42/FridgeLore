// import { GoogleLogin } from "react-google-login";
// import { FormEvent, useState } from "react";
import "../styles/loginpage.css";
import {
  signInWithGoogle,
  signOut
} from "../firebaseConfig";


export interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = (props) => {
  return (
    <div>
      <h1>Login with Google</h1>
      <button onClick={signInWithGoogle}>
        Login
      </button>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default LoginPage;
