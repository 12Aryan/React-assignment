import { Outlet } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <>
      <div className="header d-flex justify-content-end align-items-center">
        <div className="col-lg-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
            />
          </div>
        </div>
        <i className="fa fa-bell" aria-hidden="true"></i>
        <img src="/codewallpaper.png" alt="" />
      </div>
      <Outlet />
    </>
  );
};

export default Header;
