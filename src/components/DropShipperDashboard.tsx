import React from "react";
import "../styles/DropShipperDashboard.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import BarChart from "./BarChart";

const DropShipperDashboard: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const role = localStorage.getItem("userRole") || "dropshipper";

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
              <h4>Orders In Progress</h4>
              <p className="big">88 order</p>
              <span>+12 since yesterday</span>
            </div>
            <div className="card blue">
              <h4>Shipped Today</h4>
              <p className="big">62</p>
              <span>&nbsp;</span>
            </div>
            <div className="card red">
              <h4>Avg Delivery Time</h4>
              <p className="big">3.5 days</p>
              <span>Across 4 countries</span>
            </div>
            <div className="card green">
              <h4>Pending Payout</h4>
              <p className="big">$325</p>
              <span>Next payout in 4 days</span>
            </div>
          </div>

          {/* ==== Main Grid ==== */}
          <div className="grid">
            {/* Returns & Failed Deliveries */}
            <div className="box">
              <h4>Returns & Failed Deliveries</h4>
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Product</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#23847</td>
                    <td>T-shirt</td>
                    <td>Return Approved</td>
                    <td><button>Reship</button></td>
                  </tr>
                  <tr>
                    <td>#23848</td>
                    <td>T-shirt</td>
                    <td>Return Approved</td>
                    <td><button>Restock</button></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Recent Payouts */}
            <div className="box">
              <h4>Recent Payouts And Upcoming Ones</h4>
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
                    <td>$650</td>
                    <td>Sent</td>
                  </tr>
                  <tr>
                    <td>June 30</td>
                    <td>$950</td>
                    <td>Scheduled</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Low Stock Alerts */}
            <div className="box">
              <h4>Low Stock Alerts</h4>
              <table>
                <thead>
                  <tr>
                    <th>SKU</th>
                    <th>Current Stock</th>
                    <th>Avg Sales</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#Bk100</td>
                    <td>4 units</td>
                    <td>12/week</td>
                    <td><button>Replenish Now</button></td>
                  </tr>
                  <tr>
                    <td>#Bk200</td>
                    <td className="low">2 units</td>
                    <td>12/week</td>
                    <td><button>Replenish Now</button></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Average Delivery Time */}
            <div className="box">
              <h4>Average Delivery Time (Days)</h4>
              {/* tu peux brancher un vrai BarChart ici */}
              <div className="chart-placeholder">[Bar Chart]</div>
              {/* <BarChart /> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DropShipperDashboard;
