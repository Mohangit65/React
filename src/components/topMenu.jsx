import { useState } from "react";
import { Link } from "react-router-dom";
import "./topMenu.css";

export default function TopMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="top-menu">
      <div className="logo">My App</div>

      <div className="top-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/auth">Login</Link>

        <div className="profile-wrapper">
          <img
            src="https://via.placeholder.com/35"
            alt="user"
            className="profile-img"
            onClick={() => setOpen(!open)}
          />

          {open && (
            <div className="dropdown">
              <div className="dropdown-item">My Profile</div>
              <div className="dropdown-item">Settings</div>
              <div className="dropdown-item logout">Logout</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
