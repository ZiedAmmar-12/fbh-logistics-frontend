import React from "react";
import "../styles/SellerDashboard.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DonutChart from "./DonutChart";
import BarChart from "./BarChart";
import WorldMap from "./WorldMap";

const SellerDashboard: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const role = localStorage.getItem("userRole") || "seller";

  return (
    <div className="dashboard-container">
      <Sidebar />  {/* ✅ Sidebar */}
      <main className="main-content">
        <Navbar /> {/* ✅ Navbar */}

        <div className="content-wrapper">
          <h2>Overview</h2>

          {/* Top stats cards */}
          <div className="stats-cards">
            <div className="card yellow">
              <h4>Pending Orders</h4>
              <p className="big">18 orders</p>
              <span>6 processing • 12 new</span>
            </div>
            <div className="card blue">
              <h4>Shipped Orders</h4>
              <p className="big">62</p>
              <span>-10% vs last week</span>
            </div>
            <div className="card red">
              <h4>Low Stock</h4>
              <p className="big">7 SKUs</p>
              <span>Based on weekly demand</span>
            </div>
            <div className="card green">
              <h4>Upcoming Payout</h4>
              <p className="big">$980</p>
              <span>Payout on July 15</span>
            </div>
          </div>

          {/* Charts and tables grid */}
          <div className="grid">
            <div className="box">
              <h4>Order Status Overview</h4>
              {/* ici tu mets un graphique donut (Chart.js ou Recharts) */}
              <div className="chart-placeholder">[Donut Chart]</div>
            </div>
            <div className="dashboard">
              <div className="charts">
                <div className="card"><DonutChart /></div>
                <div className="card"><BarChart /></div>
                <div className="card"><WorldMap /></div>
              </div>
            </div>
            <div className="box">
              <h4>Returns & Refunds Monitor</h4>
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Product</th>
                    <th>Reason</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#23847</td>
                    <td>Book A</td>
                    <td>Defective</td>
                    <td><button>Approve</button></td>
                  </tr>
                  <tr>
                    <td>#23848</td>
                    <td>Mug B</td>
                    <td>Wrong item</td>
                    <td><button>Restock</button></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="box">
              <h4>Shipping Cost Tracker</h4>
              <div className="chart-placeholder">[Bar Chart]</div>
            </div>

            <div className="box">
              <h4>Inventory Snapshot</h4>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Stock</th>
                    <th>7d Avg</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Book A</td>
                    <td>30 units</td>
                    <td>12/week</td>
                    <td><button>Replenish</button></td>
                  </tr>
                  <tr>
                    <td>Book C</td>
                    <td className="low">2 units</td>
                    <td>12/week</td>
                    <td><button>Alert</button></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="box wide">
              <h4>Sales Heatmap</h4>
              <div className="chart-placeholder">[World Map]</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SellerDashboard;
