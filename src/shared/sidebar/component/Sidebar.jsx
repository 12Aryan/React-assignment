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
        <div className="logo">ASSIDUUS</div>
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
                {data.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default sidebar;
