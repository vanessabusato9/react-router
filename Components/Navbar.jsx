import { NavLink } from "react-router-dom";

function Navbar() {
    return <div className="navbar">
        <nav>
            <NavLink className="link" to="/">Homepage</NavLink>
            <NavLink className="link" to="/about">About Us</NavLink>
            <NavLink className="link" to="/products">Products</NavLink>
        </nav>
    </div>
}

export default Navbar;