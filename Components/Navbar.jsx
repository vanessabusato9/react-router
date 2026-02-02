import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return <div>
        <nav>
            <NavLink className="link" to="/">Homepage</NavLink>
            <NavLink className="link" to="/characters">AboutUs</NavLink>
            <NavLink className="link" to="/about"></NavLink>
        </nav>
    </div>
}

export default Navbar;