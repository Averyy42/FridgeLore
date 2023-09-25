import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import Main from "./components/Main";
import SignUpForm from "./components/forms/SignUpForm";
import LoginPage from "./components/LoginPage";
import AuthRoute from "./components/AuthRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/SignUpForm" element={<SignUpForm></SignUpForm>}></Route>
          <Route path="/LoginPage" element={<LoginPage></LoginPage>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

