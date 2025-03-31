import React from 'react';
import { useLanguage } from '../services/i18n';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="position-relative min-vh-100">
      {/* Background Map */}
      <div 
        className="background-map"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      />

      {/* Content */}
      <div className="position-relative container d-flex flex-column justify-content-center align-items-center min-vh-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="display-1 fw-bold mb-4">
            Hermes
          </h1>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            {t('description')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary btn-lg px-5 py-3 rounded-pill"
          >
            {t('tryNow')}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};