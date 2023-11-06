import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../shared/header/Header";
import Sidebar from "../shared/sidebar/Sidebar";
import Dashboard from "../features/Dashboard/Dashboard";
import "./AppRoutes.css";

const AppRoutes = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="inner-wrapper">
        <BrowserRouter>
          <Routes>
            <Route element={<Header />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default AppRoutes;
