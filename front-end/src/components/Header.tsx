import { Link } from "react-router-dom";
import "../styles/header.css";

export const Header = () => {
  return (
    <header className="Header">
      <div>
        <h2>
          <Link to="/" className="Header_Link">
            FridgeLore
          </Link>
        </h2>
      </div>
      <ul className="Header_NavLinks">
        <li className="Header_NavLinks_Link">
          <Link to="/" className="Link">
            Home
          </Link>
          <Link to="/PreferencesForm" className="Link">
            Preferences
          </Link>
          <Link to="./LoginPage" className="Link">
            Login
          </Link>
          {/* <Link to="/LoginPage">Login</Link> */}
        </li>
      </ul>
    </header>
  );
};
