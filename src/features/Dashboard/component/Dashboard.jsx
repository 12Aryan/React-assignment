import BarChart from "../../../charts/BarChart/BarChart";
import "../css/dashboard.css";
const Dashboard = () => {
  const data = [30, 50, 20, 60, 40, 10]; // Example data
  return (
    <div className="dashboard-container">
      <div className="row " >
        <div className="col-xxl-6 col-xl-6  col-md-6 col-sm-12 col-12 chart-section">
          first{" "}
        </div>
        <div className="col-xxl-6 col-xl-6  col-md-6 col-sm-12 col-12 chart-section">
        <BarChart data={data}/>
        </div>
        <div className="col-xxl-6 col-xl-6  col-md-6 col-sm-12 col-12 chart-section">
          first{" "}
        </div>
        <div className="col-xxl-6 col-xl-6  col-md-6 col-sm-12 col-12 chart-section">
          first{" "}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
