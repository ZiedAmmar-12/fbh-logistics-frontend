import React, { useState } from 'react';
import '../styles/DropShipperStep.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DropShipperStep2: React.FC = () => {
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
    navigate('/register/dropshipper/step3');
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
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

          <button className="back-btn" onClick={() => navigate("/register/dropshipper/step1")}>← {t('back')}</button>

          <h2>{t('tellUsMore')}</h2>
          <p className="subtitle">{t('getStartedSubtitle')}</p>

          <label htmlFor="location">{t('whereDoYouFulfillOrders')}*</label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="" disabled>{t('pleaseSelect')}</option>
            <option value="domestic">{t('domestic')}</option>
            <option value="international">{t('international')}</option>
          </select>

          <label htmlFor="payment">{t('primaryPaymentModel')}*</label>
          <select
            id="payment"
            value={paymentModel}
            onChange={(e) => setPaymentModel(e.target.value)}
          >
            <option value="" disabled>{t('pleaseSelect')}</option>
            <option value="prepaid">{t('prepaidOnly')}</option>
            <option value="cod">{t('cashOnDelivery')}</option>
            <option value="hybrid">{t('hybrid')}</option>
          </select>

          <label htmlFor="fulfillment">{t('howDoYouHandleFulfillment')}*</label>
          <select
            id="fulfillment"
            value={fulfillment}
            onChange={(e) => setFulfillment(e.target.value)}
          >
            <option value="" disabled>{t('pleaseSelect')}</option>
            <option value="fb">{t('fulfillmentBridgeHandlesEverything')}</option>
            <option value="mix">{t('mixTeamAndFB')}</option>
            <option value="shipping">{t('shippingSupportOnly')}</option>
          </select>

          {error && <div className="error">{error}</div>}

          <button className="primary-button" onClick={handleSubmit}>
            {t('saveContinue')}
          </button>

          <p className="secure-text">🔒 {t('yourInfoSecured')}</p>
        </div>

        <div className="language-selector">
          🌐 {t('language')}:
          <select value={i18n.language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DropShipperStep2;
