import React from "react";
import "../styles/AdvertiserDashboard.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const AdvertiserDashboard: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const role = localStorage.getItem("userRole") || "advertiser";

  return (
    <div className="dashboard-container">
      <Sidebar /> {/* ✅ Sidebar */}
      <main className="main-content">
        <Navbar /> {/* ✅ Navbar */}

        <div className="content-wrapper">
          <h2>Overview</h2>

          {/* ==== Top Stats Cards ==== */}
          <div className="stats-cards">
            <div className="card yellow">
              <h4>Units Sold</h4>
              <p className="big">182</p>
              <span>Across 6 campaigns</span>
            </div>
            <div className="card blue">
              <h4>Stock Left</h4>
              <p className="big">74 units</p>
              <span>&nbsp;</span>
            </div>
            <div className="card red">
              <h4>Revenue</h4>
              <p className="big">$2500</p>
              <span>+12% vs last month</span>
            </div>
            <div className="card green">
              <h4>Pending Payout</h4>
              <p className="big">$325</p>
              <span>Awaiting collection</span>
            </div>
          </div>

          {/* ==== Main Grid ==== */}
          <div className="grid">
            {/* Leads to Delivered Orders */}
            <div className="box">
              <h4>Leads to Delivered Orders</h4>
              <table>
                <thead>
                  <tr>
                    <th>Step</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Leads Generated</td>
                    <td>350</td>
                  </tr>
                  <tr>
                    <td>Orders Created</td>
                    <td>220</td>
                  </tr>
                  <tr>
                    <td>Delivered Orders</td>
                    <td>182</td>
                  </tr>
                  <tr>
                    <td>Returned Orders</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Payout Tracker */}
            <div className="box">
              <h4>Payout Tracker</h4>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>June 28</td>
                    <td>$950</td>
                    <td>Paid via Wise</td>
                  </tr>
                  <tr>
                    <td>June 29</td>
                    <td>$950</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>June 30</td>
                    <td>$950</td>
                    <td>Pending</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Return Summary */}
            <div className="box">
              <h4>Return Summary</h4>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Return rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Watch A</td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td>Bracelet B</td>
                    <td>8%</td>
                  </tr>
                  <tr>
                    <td>Case C</td>
                    <td>2%</td>
                  </tr>
                  <tr>
                    <td>Bracelet B</td>
                    <td>8%</td>
                  </tr>
                  <tr>
                    <td>Case C</td>
                    <td>2%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Sales Trend Chart */}
            <div className="box wide">
              <h4>Sales Trend Chart</h4>
              <div className="chart-placeholder">[Line Chart]</div>
            </div>

            {/* Stock Level Monitor */}
            <div className="box wide">
              <h4>Stock Level Monitor</h4>
              <div className="chart-placeholder">[Donut Chart]</div>
              <div className="stock-info">
                <p><strong>Status</strong></p>
                <ul>
                  <li>Consumed: 830 units (54%)</li>
                  <li>Available: 270 units (12.5%)</li>
                </ul>
                <p>
                  At this rate, stock will run out in 12 days.<br />
                  Recommended reorder quantity: 300 units (7-day average).
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdvertiserDashboard;
