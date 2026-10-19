import React from "react";
import "../styles/Dashboard.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";   // ✅ import
import Navbar from "../components/Navbar";     // ✅ import

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const role = localStorage.getItem("userRole") || "seller";


  const steps = [
    { icon: "https://cdn-icons-png.flaticon.com/512/1041/1041880.png", title: "Connect Your Store", description: "Link your e-commerce platform to sync orders and products automatically." },
    { icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png", title: "Add Warehouse Address", description: "Let us know where your stock is shipped from to calculate delivery timelines." },
    { icon: "https://cdn-icons-png.flaticon.com/512/679/679720.png", title: "Add Your Products", description: "Upload or import your product catalog to start managing inventory." },
    { icon: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", title: "Set Up Payout Method", description: "Choose how you’ll receive your earnings from orders we fulfill." }
  ];


  const handleStartJourney = () => {
    if (role === "seller") navigate("/seller-dashboard");
    else if (role === "dropshipper") navigate("/dropshipper-dashboard");
    else if (role === "advertiser") navigate("/advertiser-dashboard");
  };

  return (
    <div className="dashboard-container">
      <Sidebar />   {/* ✅ Sidebar */}
      <main className="main-content">
        <Navbar />   {/* ✅ Navbar */}
        <div className="content-wrapper">
          <h2>Let’s set up your workspace</h2>
          <p className="subtitle">
            Set up fulfillment logic, upload products, and streamline the delivery process.
          </p>

          <div className="steps">
            {steps.map((step, index) => (
              <div className="step-box" key={index}>
                <img src={step.icon} alt={step.title} className="step-icon" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>

          <button className="start-button" onClick={handleStartJourney}>
            Start my journey
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
