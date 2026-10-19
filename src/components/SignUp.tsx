import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/SignUp.scss';

const SignUp: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSellerClick = () => {
    navigate('/register/seller/step1');
  };

  const handleDropShipperClick = () => {
    navigate('/register/dropshipper/step1');
  };

  const handleAdvertiserClick = () => {
    navigate('/register/advertiser/step1');
  };

  return (
    <div className="fulfillment-container">
      <div className="top-right-link">
        {t('Already have an account?')} <Link to="/login">{t('Sign In')}</Link>
      </div>

      <div className={`left-panel ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">🏠</div>
        <h1>Fulfillment Bridge</h1>
        <p className="tagline">CONNECT.. FULFILL.</p>
        <p className="description">{t('leftPanelDescription')}</p>
      </div>

      <div className="right-panel">
        <div className="form-content">
          <h2>{t('Join Us')}</h2>
          <p className="login-subtitle">{t('subtitle')}</p>

          <div className="options">
            <button className="option-card" onClick={handleSellerClick}>
              <div className="icon">🛍️</div>
              <div>
                <h3>{t('Seller')}</h3>
                <p>{t('SellerDesc')}</p>
              </div>
              <div className="arrow">➔</div>
            </button>

            <button className="option-card" onClick={handleDropShipperClick}>
              <div className="icon">🚚</div>
              <div>
                <h3>{t('DropShipper')}</h3>
                <p>{t('DropShipperDesc')}</p>
              </div>
              <div className="arrow">➔</div>
            </button>

            <button className="option-card" onClick={handleAdvertiserClick}>
              <div className="icon">📢</div>
              <div>
                <h3>{t('Advertiser')}</h3>
                <p>{t('AdvertiserDesc')}</p>
              </div>
              <div className="arrow">➔</div>
            </button>
          </div>
        </div>

        <div className="language-selector">
          🌐 {t('language')}:
          <select onChange={handleLanguageChange} defaultValue={i18n.language}>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
