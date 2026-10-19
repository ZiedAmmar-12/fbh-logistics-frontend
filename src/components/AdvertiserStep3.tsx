import React, { useState } from 'react';
import '../styles/DropShipperStep.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const AdvertiserStep3: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!companyName || !phoneNumber) {
      setError(t('pleaseCompleteFields'));
      return;
    }

    console.log('Company:', companyName);
    console.log('Phone:', phoneNumber);

    setError('');

    // ✅ Sauvegarder le rôle en localStorage
    localStorage.setItem("userRole", "advertiser");

     navigate('/dashboard'); 
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
            <span>{t('step3Count')}</span>
            <strong>{t('step3Label')}</strong>
          </p>

          <button className="back-btn" onClick={() => navigate("/register/advertiser/step2")}>
            ← {t('back')}
          </button>

          <h2>{t('completeProfile')}</h2>
          <p className="subtitle">{t('getStartedSubtitle')}</p>

          <label htmlFor="company">{t('companyNameRequired')}</label>
          <input
            id="company"
            type="text"
            placeholder={t('enterCompanyName')}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <div className="form-group">
            <label htmlFor="phone">{t('phoneNumberRequired')}</label>
            <PhoneInput
              country={'us'}
              value={phoneNumber}
              onChange={(value: string) => setPhoneNumber(value)}
              enableSearch={true}
              inputProps={{
                name: 'phone',
                required: true,
                id: 'phone'
              }}
              containerClass="phone-input-container"
              inputClass="phone-input-field"
              buttonClass="phone-country-button"
            />
          </div>

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
            <option value="en">English (United States)</option>
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AdvertiserStep3;
