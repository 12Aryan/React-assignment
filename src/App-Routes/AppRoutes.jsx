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
          <Routes>
            <Route path="*" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard " element={<Dashboard />} />
            <Route path="/accounts" element={<Dashboard />} />
            <Route path="/payroll" element={<Dashboard />} />
            <Route path="/reports" element={<Dashboard />} />
            <Route path="/advisor" element={<Dashboard />} />
            <Route path="/contact" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AppRoutes;
