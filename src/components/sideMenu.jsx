import { NavLink } from "react-router-dom";
import "./sideMenu.css";

export default function SideMenu() {
  return (
    <div className="side-menu">
      <h3>Menu</h3>

      <NavLink to="/" className="menu-item">
        Dashboard
      </NavLink>

      <NavLink to="/counter" className="menu-item">
        Counter
      </NavLink>

      <NavLink to="/about" className="menu-item">
        About
      </NavLink>

      <NavLink to="/auth" className="menu-item">
        Auth
      </NavLink>
    </div>
  );
}
