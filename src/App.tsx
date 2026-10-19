import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import SellerStep1 from './components/SellerStep1';
import SellerStep2 from './components/SellerStep2';
import SellerStep3 from './components/SellerStep3';

import DropShipperStep1 from './components/DropShipperStep1';
import DropShipperStep2 from './components/DropShipperStep2';
import DropShipperStep3 from './components/DropShipperStep3';

import AdvertiserStep1 from './components/AdvertiserStep1';
import AdvertiserStep2 from './components/AdvertiserStep2';
import AdvertiserStep3 from './components/AdvertiserStep3';

import Dashboard from './components/Dashboard'; // ✅ Import du Dashboard
import SellerDashboard from "./components/SellerDashboard";
import DropShipperDashboard from "./components/DropShipperDashboard";
import AdvertiserDashboard from "./components/AdvertiserDashboard";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Seller Steps */}
        <Route path="/register/seller/step1" element={<SellerStep1 />} />
        <Route path="/register/seller/step2" element={<SellerStep2 />} />
        <Route path="/register/seller/step3" element={<SellerStep3 />} />

        {/* DropShipper Steps */}
        <Route path="/register/dropshipper/step1" element={<DropShipperStep1 />} />
        <Route path="/register/dropshipper/step2" element={<DropShipperStep2 />} />
        <Route path="/register/dropshipper/step3" element={<DropShipperStep3 />} />

        {/* Advertiser Steps */}
        <Route path="/register/advertiser/step1" element={<AdvertiserStep1 />} />
        <Route path="/register/advertiser/step2" element={<AdvertiserStep2 />} />
        <Route path="/register/advertiser/step3" element={<AdvertiserStep3 />} />

        {/* ✅ Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/dropshipper-dashboard" element={<DropShipperDashboard />} />
        <Route path="/advertiser-dashboard" element={<AdvertiserDashboard />} />


      </Routes>
    </Router>
  );
}

export default App;
