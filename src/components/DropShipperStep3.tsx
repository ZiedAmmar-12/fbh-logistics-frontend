import React, { useState } from 'react';
import '../styles/DropShipperStep.scss';
import { useNavigate } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { useTranslation } from 'react-i18next';

const DropShipperStep3: React.FC = () => {
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
    localStorage.setItem("userRole", "dropshipper");

    // ✅ Redirection vers le dashboard générique
    navigate('/dashboard'); 
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
            <span>{t('step3Count')}</span>
            <strong>{t('step3Label')}</strong>
          </p>

          <button className="back-btn" onClick={() => navigate("/register/dropshipper/step2")}>← {t('back')}</button>

          <h2>{t('completeYourProfile')}</h2>
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
          <select value={i18n.language} onChange={handleLanguageChange}>
            <option value="en">English (United States)</option>
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DropShipperStep3;
