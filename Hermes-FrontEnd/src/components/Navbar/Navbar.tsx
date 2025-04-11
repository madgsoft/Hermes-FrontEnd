import React, { useState } from 'react';
import { Globe2, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../../services/i18n';
import { useTheme } from '../../services/theme';
import { useClickOutside } from '../../utils/OutsideClickFunction';

export const Navbar: React.FC = () => {
  const { setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useClickOutside(() => setIsDropdownOpen(false));

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top navbar-glass ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">Hermes</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">{t('general.about')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">{t('general.features')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">{t('general.contact')}</a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {/* Dropdown de selección de idioma */}
            <div className="dropdown me-2" ref={dropdownRef}>
              <button
                className="btn btn-language dropdown-toggle"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <Globe2 size={20} />
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu show" style={{ display: 'block' }}>
                  <li><button className="dropdown-item" onClick={() => setLanguage('es')}>{t('language.spanish')}</button></li>
                  <li><button className="dropdown-item" onClick={() => setLanguage('en')}>{t('language.english')}</button></li>
                  <li><button className="dropdown-item" onClick={() => setLanguage('fr')}>{t('language.french')}</button></li>
                </ul>
              )}
            </div>
            {/* Botón de cambio de tema */}
            <button onClick={toggleTheme} className="btn btn-theme">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

