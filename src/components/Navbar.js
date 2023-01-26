import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
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
