import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LayoutDashboard, Home as HomeIcon, LogOut, Plus, Edit2, Trash2 } from 'lucide-react';
import { useLanguage } from '../services/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import 'leaflet/dist/leaflet.css';

export const Dashboard: React.FC = () => {
  const { t } = useLanguage();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const defaultLocation = {
    id: 1,
    name: 'Default Location',
    latitude: 51.505,
    longitude: -0.09,
    description: 'This is a default location.'
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className={`sidebar bg-dark text-white ${isSidebarOpen ? 'open' : ''}`} style={{ width: isSidebarOpen ? '250px' : '60px', transition: 'width 0.3s' }}>
        <div className="d-flex justify-content-end p-3">
          <button className="btn btn-link text-white" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            ☰
          </button>
        </div>
        <div className="p-3">
          <div className="d-flex align-items-center mb-3">
            <LayoutDashboard size={20} className="me-2" />
            {isSidebarOpen && <span>Dashboard</span>}
          </div>
          <div className="d-flex align-items-center mb-3">
            <HomeIcon size={20} className="me-2" />
            {isSidebarOpen && <span>Home</span>}
          </div>
          <div className="d-flex align-items-center">
            <LogOut size={20} className="me-2" />
            {isSidebarOpen && <span>Logout</span>}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Map */}
        <div style={{ height: '60vh' }}>
          <MapContainer center={[defaultLocation.latitude, defaultLocation.longitude]} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[defaultLocation.latitude, defaultLocation.longitude]}>
              <Popup>{defaultLocation.name}</Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Action Buttons */}
        <div className="bg-light p-3 border-bottom">
          <div className="container">
            <button className="btn btn-primary" onClick={() => setIsFormOpen(true)}>
              <Plus size={20} className="me-1" /> {t('addLocation')}
            </button>
          </div>
        </div>

        {/* Locations Table */}
        <div className="container mt-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <table className="table">
              <thead>
                <tr>
                  <th>{t('name')}</th>
                  <th>{t('address')}</th>
                  <th>{t('description')}</th>
                </tr>
              </thead>
              <tbody>
          
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Location Form */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="position-fixed top-0 end-0 h-100 bg-white shadow-lg p-4"
              style={{ width: '400px', zIndex: 1000 }}
            >
              <h3>{t('addLocation')}</h3>
              <form className="mt-4">
                <div className="mb-3">
                  <label className="form-label">{t('name')}</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">{t('address')}</label>
                  <input type="number" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">{t('description')}</label>
                  <textarea className="form-control" rows={3}></textarea>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="button" className="btn btn-secondary me-2" onClick={() => setIsFormOpen(false)}>
                    {t('cancel')}
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {t('save')}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
