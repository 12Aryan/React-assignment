import BarChart from "../../../charts/BarChart/BarChart";
import WaveChart from "../../../charts/WaveChart/WaveChart";
import Table from "../../../shared/table/component/Table";
import "../css/dashboard.css";
const Dashboard = () => {
  const data = [30, 50, 40, 60, 40, 90]; // Example data
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="dashboard-container">
      <div className="row gap-1">
        <div className="col-xxl-6 col-xl-6  col-md-6 col-sm-12 col-12 chart-section">
          <div className="chart-header">
            <span className="font-weight-bold"> Checking account </span>
            <span className="">
              <select name="" id="" className="me-1">
                <option value="">Manage</option>
              </select>
              <select name="" id="">
                {months.map((month, i) => {
                  return (
                    <option key={i} value={month}>
                      {month}
                    </option>
                  );
                })}
              </select>
            </span>
          </div>
          <WaveChart />
        </div>
        <div className="col-xxl-6 col-xl-6  col-md-6 col-sm-12 col-12 chart-section">
          <div className="chart-header">
            <h6 className="font-weight-bold"> Invoice owed to you </h6>
            <button className="new-sales-btn">New Sales Invoice</button>
          </div>
          <BarChart data={data} />
        </div>
        <div className="col-xxl-6 col-xl-6  col-md-6 col-sm-12 col-12 chart-section">
          <div className="chart-header">
            <h6 className="font-weight-bold"> Total cash flow </h6>
          </div>
          <BarChart data={data} />
        </div>
        <div className="col-xxl-6 col-xl-6  col-md-6 col-sm-12 col-12 chart-section">
          <div className="chart-header">
            <h6 className="font-weight-bold"> Account watchlist </h6>
          </div>
          <div className="table-parent p-2">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
