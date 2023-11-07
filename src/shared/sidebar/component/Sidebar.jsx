import { useState } from "react";
import "../css/sidebar.css";
import { sidebarData } from "./sidebarData";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [active, setActive] = useState(0);
  const handleSidebarItemClick = (e) => {
    setActive(Number(e.target.id));
  };
  return (
    <div className="sidebar-parent">
      <div className="sidebar-content">
        <span className="d-flex align-items-center px-2 py-4">
          <img src="/logo.png" className="h-25 w-25" alt="" />
          <span className="m-0 logo-text">ASSIDUUS</span>
        </span>

        {/* <button className="btn btn-primary">btn</button> */}
        <div className="">
          {sidebarData.map((data, i) => {
            return (
              <Link to={data.route} key={data.id}>
                <div
                  id={i}
                  className={`${
                    i === active ? "sidebar-active-item" : ""
                  } sidebar-item`}
                  onClick={handleSidebarItemClick}
                >
                  <i className={`${data.icon} me-1`}></i>
                  {data.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
