import { NavLink } from "react-router-dom";

function Navbar() {
    return <div>
        <nav>
            <NavLink className="link" to="/">Homepage</NavLink>
            <NavLink className="link" to="/about">About Us</NavLink>
        </nav>
    </div>
}

export default Navbar;