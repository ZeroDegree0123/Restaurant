import './NavBar.css'
import { Link, useNavigate } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogOut() {
    let path = `/`;
    userService.logOut();
    setUser(null);
    navigate(path);
  }
  return (
    <>
      <nav className="nav-bar">
        <Link id="burger" className="nav-links" to="/">
          <img className="hamburger" src="https://imgur.com/k6vcqML.png" alt="Cartoon image of a juicy hamburger" />
        </Link>
        <Link className="nav-links" to="menu">Menu</Link>
        <Link className="nav-links" to="rewards">Rewards</Link>
        <Link className="nav-links" to="orders/new">Order</Link>
        {user && (
          <Link id="logout" className="nav-links" onClick={handleLogOut} to="/">
            Logout
          </Link>
        )}
        {user ?
          <h2 className="user-name">WELCOME {user.name.toUpperCase()}!</h2>
          :
          <Link className="nav-links" to="/login">Login</Link>
        }
      </nav>
      <hr className="line-break" />
    </>
  );
}
