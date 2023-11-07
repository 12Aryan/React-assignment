import { useState } from "react";
import BarChart from "../../../charts/BarChart/BarChart";
import WaveChart from "../../../charts/WaveChart/WaveChart";
import Table from "../../../shared/table/component/Table";
import "../css/dashboard.css";
import Modal from "../../../shared/modal/component/Modal";
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = [30, 50, 40, 60, 40, 90];
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

  const monthData = {
    January: generateRandomWaveData(),
    February: generateRandomWaveData(),
    March: generateRandomWaveData(),
    April: generateRandomWaveData(),
    May: generateRandomWaveData(),
    June: generateRandomWaveData(),
    July: generateRandomWaveData(),
    August: generateRandomWaveData(),
    September: generateRandomWaveData(),
    October: generateRandomWaveData(),
    November: generateRandomWaveData(),
    December: generateRandomWaveData(),
  };

  const [selectedMonth, setSelectedMonth] = useState("January");

  function generateRandomWaveData() {
    const randomData = [];
    for (let i = 0; i < 100; i++) {
      randomData.push([i / 10, Math.sin(i / 10 + Math.random() * 0.5)]);
    }
    return randomData;
  }

  const handleMonthChange = (e) => {
    const newMonth = e.target.value;
    setSelectedMonth(newMonth);
  };
  const handleClick=()=>{
    setIsOpen(true);
  }

  return (
    <>
      {isOpen && (
        <Modal setIsOpenProp={setIsOpen} />
      )}
      <div className="dashboard-container mx-auto">
        {/* <Modal/> */}
        <div className="row gap-3 mx-auto justify-content-center">
          <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 col-12 chart-section p-0">
            <div className="chart-header">
              <span className="font-weight-bold"> Checking account </span>
              <span className="">
                <select
                  name="months"
                  id="months"
                  className="me-1"
                  onChange={handleMonthChange}
                  value={selectedMonth}
                >
                  {months.map((month, i) => (
                    <option key={i} value={month} className="options">
                      {month}
                    </option>
                  ))}
                </select>
              </span>
            </div>
            <WaveChart
              data={monthData[selectedMonth]}
              width={600}
              height={150}
            />
          </div>
          <div className="col-xxl-6 col-xl-6  col-md-6 col-sm-12 col-12 chart-section p-0">
            <div className="chart-header">
              <h6 className="font-weight-bold"> Invoice owed to you </h6>
              <button className="new-sales-btn" onClick={handleClick}>New Sales Invoice</button>
            </div>
            <BarChart data={data} />
          </div>
          <div className="col-xxl-6 col-xl-6  col-md-6 col-sm-12 col-12 chart-section p-0">
            <div className="chart-header">
              <h6 className="font-weight-bold"> Total cash flow </h6>
            </div>
            <BarChart data={data} />
          </div>
          <div className="col-xxl-6 col-xl-6  col-md-6 col-sm-12 col-12 chart-section p-0">
            <div className="chart-header">
              <h6 className="font-weight-bold"> Account watchlist </h6>
            </div>
            <div className="table-parent p-2">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
