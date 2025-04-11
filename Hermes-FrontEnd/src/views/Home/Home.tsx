import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../services/i18n';
import { motion } from 'framer-motion';
import './Home.css';

export const Home: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Background Map */}
      <div className="background-map" />

      {/* Content */}
      <div className="content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="title">Hermes</h1>
          <p className="description">{t('location.description')}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
            onClick={() => navigate('/dashboard')}
          >
            {t('general.tryNow')}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
