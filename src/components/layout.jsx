import { Outlet } from "react-router-dom";
import TopMenu from "./topMenu";
import SideMenu from "./sideMenu";
import "./layout.css"; // optional

export default function Layout() {
  return (
    <div className="layout-container">

      {/* Sidebar */}
      <SideMenu />

      <div className="main-content">
        
        {/* Top bar */}
        <TopMenu />

        {/* Page content */}
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
