import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import Main from "./components/Main";
import SignUpForm from "./components/forms/PreferencesForm";
import LoginPage from "./components/LoginPage";
import AuthRoute from "./components/AuthRoute";
import PreferencesForm from "./components/forms/PreferencesForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/PreferencesForm" element={<PreferencesForm></PreferencesForm>}></Route>
          <Route path="/LoginPage" element={<LoginPage></LoginPage>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

