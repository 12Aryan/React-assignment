import { useState } from "react";
import "../css/sidebar.css";
import { sidebarData } from "./sidebarData";
const sidebar = () => {
  const [active, setActive] = useState(0);
  const handleSidebarItemClick = (e) => {
    console.log(e.target.id);
    setActive(Number(e.target.id));
  };
  return (
    <div className="sidebar-parent">
      <div className="sidebar-content">
        <h5 className="logo">ASSIDUUS</h5>
        {/* <button className="btn btn-primary">btn</button> */}
        <div className="">
          {sidebarData.map((data, i) => {
            return (
              <div
                key={data.id}
                id={i}
                className={`${
                  i === active ? "sidebar-active-item" : ""
                } sidebar-item`}
                onClick={handleSidebarItemClick}
              >
                <i className={`${data.icon} me-1`}></i>{data.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default sidebar;
