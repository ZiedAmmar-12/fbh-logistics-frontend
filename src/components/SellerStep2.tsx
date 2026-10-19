import React, { useState } from 'react';
import '../styles/DropShipperStep.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SellerStep2: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [location, setLocation] = useState('');
  const [paymentModel, setPaymentModel] = useState('');
  const [fulfillment, setFulfillment] = useState('');
  const [error, setError] = useState('');

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const handleSubmit = () => {
    if (!location || !paymentModel || !fulfillment) {
      setError(t('fillAllFields'));
      return;
    }
    setError('');
    navigate('/register/seller/step3');
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

          <button className="back-btn" onClick={() => navigate('/register/seller/step1')}>
            ← {t('back')}
          </button>

          <h2>{t('tellUsMore')}</h2>
          <p className="subtitle">{t('getStartedSubtitle')}</p>

          <label htmlFor="products">{t('whereShip')}*</label>
          <select
            id="products"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="" disabled>{t('pleaseSelect')}</option>
            <option value="locally">{t('locallyOnly')}</option>
            <option value="cross-border">{t('crossBorder')}</option>
            <option value="B2B2C">{t('b2b2c')}</option>
          </select>

          <label htmlFor="customers">{t('howPay')}*</label>
          <select
            id="customers"
            value={paymentModel}
            onChange={(e) => setPaymentModel(e.target.value)}
          >
            <option value="" disabled>{t('pleaseSelect')}</option>
            <option value="prepaid">{t('prepaid')}</option>
            <option value="cod">{t('cod')}</option>
            <option value="both">{t('both')}</option>
          </select>

          <label htmlFor="fulfillment">{t('whichShippingParts')}*</label>
          <select
            id="fulfillment"
            value={fulfillment}
            onChange={(e) => setFulfillment(e.target.value)}
          >
            <option value="" disabled>{t('pleaseSelect')}</option>
            <option value="fb">{t('onlyShipping')}</option>
            <option value="mix">{t('fulfillment')}</option>
            <option value="shipping">{t('bothDepends')}</option>
          </select>

          {error && <div className="error">{error}</div>}

          <button className="primary-button" onClick={handleSubmit}>
            {t('saveContinue')}
          </button>

          <p className="secure-text">🔒 {t('yourInfoSecured')}</p>
        </div>

        <div className="language-selector">
          🌐 {t('language')}:
          <select onChange={handleLanguageChange} value={i18n.language}>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SellerStep2;
