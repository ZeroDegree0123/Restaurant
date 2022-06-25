import './NavBar.css'
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <>
      <nav className="nav-bar">
        <Link id="burger" className="nav-links" to="/">
          <img className="hamburger" src="https://imgur.com/tzwO2AI.png" alt="" />
        </Link>
        &nbsp;  &nbsp;
        <Link className="nav-links" to="menu">Menu</Link>
        &nbsp;  &nbsp;
        <Link className="nav-links" to="rewards">Rewards</Link>
        &nbsp;  &nbsp;
        {/* <Link className="nav-links" to="orders">Order History</Link>
        &nbsp;  &nbsp; */}
        <Link className="nav-links" to="orders/new">Order</Link>
        &nbsp;  &nbsp;
        {user && (
          <Link id="logout" className="nav-links" onClick={handleLogOut} to="logout">
            Logout
          </Link>
        )}
        <h2 className="user-name">WELCOME {user.name.toUpperCase()}!</h2>
        &nbsp;  &nbsp;
      </nav>
      <hr className="line-break" />
    </>
  );
}
