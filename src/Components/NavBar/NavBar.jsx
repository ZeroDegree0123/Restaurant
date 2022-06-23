import './NavBar.css'
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="menu">Menu</Link>
      &nbsp; | &nbsp;
      <Link to="orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="orders/new">New Order</Link>
      &nbsp; | &nbsp;
    
      {user && (
        <Link onClick={handleLogOut} to="logout">
          Logout
        </Link>
      )}
      &nbsp; | &nbsp;
      <span>Welcome {user.name}</span>
    </nav>
  );
}
