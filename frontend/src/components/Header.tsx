import { Link } from "react-router-dom"
import '../styles/header.css'

export const Header = () => {
    return (
        <header className="Header">
            <div>
                <h2>
                    <Link to='/'>FridgeLore</Link>
                </h2>
            </div>
            <ul className="Header_NavLinks">
                <li className="Header_NavLinks_Link">
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </header>
    )
}