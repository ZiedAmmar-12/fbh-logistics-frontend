import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/SignIn.scss';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { t, i18n } = useTranslation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // ici ta logique de connexion
  };

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fulfillment-container">
      <div className="top-right-link">
        {t('noAccount')} <Link to="/signup">{t('signUp')}</Link>
      </div>

      <div className={`left-panel ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">🏠</div>
        <h1>Fulfillment Bridge</h1>
        <p className="tagline">CONNECT.. FULFILL.</p>
        <p className="description">{t('leftPanelDescription')}</p>
      </div>

      <div className="right-panel">
        <div className="form-content">
          <h2>{t('welcome')}</h2>
          <p className="login-subtitle">{t('subtitle')}</p>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email">{t('email')}</label>
              <input
                id="email"
                type="email"
                placeholder={t('email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">{t('password')}</label>
              <div className="password-wrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t('password')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? t('hide') || 'Hide' : t('show') || 'Show'}
                </button>
              </div>
            </div>

            <Link to="/forgot-password" className="forgot-password">
              {t('forgot')}
            </Link>

            <button type="submit" className="login-button">
              {t('login')}
            </button>
          </form>
        </div>

        <div className="language-selector">
          🌐 {t('language')}:
          <select onChange={(e) => handleChangeLanguage(e.target.value)} value={i18n.language}>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
