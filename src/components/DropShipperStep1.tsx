import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SellerStep.scss";
import { useTranslation } from 'react-i18next';

const DropShipperStep1: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullname || !email || !password || !confirmPassword) {
      setError(t('fillAllFields'));
      return;
    }
    if (password !== confirmPassword) {
      setError(t('passwordsMismatch'));
      return;
    }

    setError("");
    console.log("✅ Step1 data:", { fullname, email });
    navigate("/register/dropshipper/step2");
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="seller-step-container">
      <div className="left-panel">
        <h1>Fulfillment Bridge</h1>
        <p className="tagline">CONNECT.. FULFILL.</p>
        <p className="description">{t('leftPanelDescription')}</p>
      </div>

      <div className="right-panel">
        <div className="step-indicator">
          <span className="step-count">{t('step1Count')}</span>
          <span className="step-label">{t('step1Label')}</span>
        </div>

        <button className="back-btn" onClick={() => navigate("/signup")}>← {t('back')}</button>

        <h2>{t('registerDropshipperAccount')}</h2>
        <p className="subtitle">{t('getStartedSubtitle')}</p>

        <form onSubmit={handleSubmit} className="form-box">
          {error && <div className="error">{error}</div>}

          <label>{t('fullname')}*</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder={t('enterFullname')}
          />

          <label>{t('email')}*</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('enterEmail')}
          />

          <label>{t('createPassword')}*</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t('createPassword')}
          />

          <label>{t('confirmPassword')}*</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder={t('confirmPassword')}
          />

          <div className="terms">
            <input type="checkbox" required /> {t('termsAndConditions')}
          </div>

          <button type="submit" className="submit-btn">{t('registerAccount')}</button>
        </form>

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

export default DropShipperStep1;
