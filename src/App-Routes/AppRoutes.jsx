import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../shared/header/Header";
import Sidebar from "../shared/sidebar/Sidebar";
import Dashboard from "../features/Dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <>
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Dashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
