import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../shared/header/component/Header";
import Sidebar from "../shared/sidebar/component/Sidebar";
import Dashboard from "../features/Dashboard/component/Dashboard";
import "./AppRoutes.css";

const AppRoutes = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="inner-wrapper">
        <Header />
        <div className="content-wrapper">
          <BrowserRouter>
            <Routes>
            <Route path="*" element={<Dashboard />} />
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/" element={<Dashboard />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default AppRoutes;
