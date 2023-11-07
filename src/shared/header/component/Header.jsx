import { Outlet } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <>
      <div className="header d-flex justify-content-end align-items-center">
        <div className="d-flex justify-content-center gap-3 align-items-center p-2">
          <div className="input-group ">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
            />
          </div>

          <i className="fa fa-bell" aria-hidden="true"></i>
          <img  className="profile-img" src="photo.jpg" alt="profile-icon" />
          {/* <div className="circle"></div> */}
          <i className="fa fa-caret-down" aria-hidden="true"></i>

        </div>
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default Header;
