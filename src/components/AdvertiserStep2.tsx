import React, { useState } from 'react';
import '../styles/DropShipperStep.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AdvertiserStep2: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [paymentModel, setPaymentModel] = useState('');
  const [fulfillment, setFulfillment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!location || !paymentModel || !fulfillment) {
      setError(t('fillAllFields'));
      return;
    }

    setError('');
    navigate('/register/advertiser/step3');
  };

  return (
    <div className="dropshipper-step-container">
      <div className="left-panel">
        <h1>Fulfillment Bridge</h1>
        <p>CONNECT.. FULFILL.</p>
        <p>{t('leftPanelDescription')}</p>
      </div>

      <div className="right-panel">
        <div className="form-box">
          <p className="step-label">
            <span>{t('step2Count')}</span>
            <strong>{t('step2Label')}</strong>
          </p>

          <button className="back-btn" onClick={() => navigate("/register/advertiser/step1")}>
            ← {t('back')}
          </button>

          <h2>{t('tellUsMore')}</h2>
          <p className="subtitle">{t('getStartedSubtitle')}</p>

          <label htmlFor="location">{t('whereDoYouFulfillOrders')}*</label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="" disabled>{t('pleaseSelect')}</option>
            <option value="stock">{t('domestic')}</option>
            <option value="handle inventory">{t('international')}</option>
          </select>

          <label htmlFor="dashboard">{t('primaryPaymentModel')}*</label>
          <select
            id="dashboard"
            value={paymentModel}
            onChange={(e) => setPaymentModel(e.target.value)}
          >
            <option value="" disabled>{t('pleaseSelect')}</option>
            <option value="sales vs inventory">{t('sales vs inventory')}</option>
            <option value="earned vs pending">{t('earned vs pending')}</option>
            <option value="conversion tracking">{t('conversion tracking')}</option>
          </select>

          <label htmlFor="get paid">{t('howDoYouHandleFulfillment')}*</label>
          <select
            id="get paid"
            value={fulfillment}
            onChange={(e) => setFulfillment(e.target.value)}
          >
            <option value="" disabled>{t('pleaseSelect')}</option>
            <option value="revenue-based">{t('revenue-based')}</option>
            <option value="paid">{t('paid')}</option>
            <option value="campaign">{t('campaign')}</option>
          </select>

          {error && <div className="error">{error}</div>}

          <button className="primary-button" onClick={handleSubmit}>
            {t('saveContinue')}
          </button>

          <p className="secure-text">🔒 {t('yourInfoSecured')}</p>
        </div>

        <div className="language-selector">
          🌐 {t('language')}:
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            defaultValue={i18n.language}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AdvertiserStep2;
