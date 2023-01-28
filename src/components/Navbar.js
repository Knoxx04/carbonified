import { Link } from "react-router-dom";


function Navbar() {
  
  return (
    <>
      <div className="navbar">
        <div className="logo1">
          <h1>CARBONIFIED</h1>
        </div>
        <ul className="list1">
          <li> <Link to="/Home">Home</Link></li>
          <li> <Link to="/About">About</Link></li>
          <li><Link to="/Estimates">Estimates</Link></li>
          <li> <Link to="/SignUp">Login</Link></li>
        </ul>
      </div>
    </>
  )
 }
export default Navbar;
