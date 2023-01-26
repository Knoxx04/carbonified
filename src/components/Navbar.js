import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

function Navbar() {
  const [navbarColor, setNavbarColor] = useState("rgba(59, 90, 86, 0.8)");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      setNavbarColor("");
    } else if (location.pathname === "/contact") {
      setNavbarColor("purple");
    } else if (location.pathname === "/Login"){
      setNavbarColor("grey");
    }
  }, [location]);

  return (
    <div className="navbar" style={{ backgroundColor: navbarColor }}>
      <div className="logo1">
         <h1>CARBONIFIED</h1>
          </div>
      <ul className="list1">
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/about">About</Link></li>
        <li><Link to="#footer">Contact</Link></li>
        <li> <Link to="/login">Login</Link></li>
      </ul>
    </div>
  )
}
export default Navbar;
