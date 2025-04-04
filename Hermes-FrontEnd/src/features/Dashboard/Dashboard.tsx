import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LayoutDashboard, Home as HomeIcon, LogOut, Plus } from "lucide-react";
import { useLanguage } from "../../services/i18n";
import { motion, AnimatePresence } from "framer-motion";
import "leaflet/dist/leaflet.css";
import "./Dashboard.css";

const SetMapCenter: React.FC<{ center: [number, number]; zoom: number }> = ({
  center,
  zoom,
}) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);

  return null;
};

const AttributionControl: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    map.attributionControl.setPrefix(false);
    map.attributionControl.addAttribution("&copy; OpenStreetMap contributors");
  }, [map]);

  return null;
};

const defaultLocation = {
  id: 1,
  name: "Default Location",
  address: "221B Baker Street",
  pipeline: "Pipeline A",
  dueDate: "2025-04-01",
  chainage: "12+345",
  landSurvey: "Completed",
  latitude: 51.505,
  longitude: -0.09,
  description: "This is a default location.",
};

const mapCenter: [number, number] = [
  defaultLocation.latitude,
  defaultLocation.longitude,
];

export const Dashboard: React.FC = () => {
  const { t } = useLanguage();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="d-flex justify-content-end p-3">
          <button
            className="btn btn-link"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
        </div>
        <div className="p-3">
          <div className="menu-item">
            <LayoutDashboard size={20} />
            {isSidebarOpen && <span>Dashboard</span>}
          </div>
          <div className="menu-item">
            <HomeIcon size={20} />
            {isSidebarOpen && <span>Home</span>}
          </div>
          <div className="menu-item">
            <LogOut size={20} />
            {isSidebarOpen && <span>Logout</span>}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Map */}
        <div style={{ height: "60vh" }}>
          <MapContainer style={{ height: "100%", width: "100%" }}>
            <SetMapCenter center={mapCenter} zoom={13} />
            <AttributionControl />
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={mapCenter}>
              <Popup>{defaultLocation.name}</Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Action Buttons */}
        <div className="action-bar">
          <div className="container">
            <button
              className="btn btn-primary"
              onClick={() => setIsFormOpen(true)}
            >
              <Plus size={20} className="me-1" /> {t("addLocation")}
            </button>
          </div>
        </div>

        {/* Locations Table */}
        <div className="container mt-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>{t("name")}</th>
                  <th>{t("pipeline")}</th>
                  <th>{t("dueDate")}</th>
                  <th>{t("chainage")}</th>
                  <th>{t("landSurvey")}</th>
                  <th>{t("address")}</th>
                  <th>{t("description")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{defaultLocation.id}</td>
                  <td>{defaultLocation.name}</td>
                  <td>{defaultLocation.pipeline}</td>
                  <td>{defaultLocation.dueDate}</td>
                  <td>{defaultLocation.chainage}</td>
                  <td>{defaultLocation.landSurvey}</td>
                  <td>{defaultLocation.address}</td>
                  <td>{defaultLocation.description}</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Location Form */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="location-form"
            >
              <h3>{t("addLocation")}</h3>
              <form
                className="mt-4"
                style={{
                  maxHeight: "70vh",
                  /* overflowY: "hidden",
                  overflowX: "hidden", */
                }}
              >
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label className="form-label">{t("name")}</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">{t("address")}</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>

                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label className="form-label">{t("pipeline")}</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">{t("dueDate")}</label>
                    <input type="date" className="form-control" />
                  </div>
                </div>

                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label className="form-label">{t("chainage")}</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">{t("landSurvey")}</label>
                    <select className="form-control">
                      <option value="">{t("selectOption")}</option>
                      <option value="completed">{t("completed")}</option>
                      <option value="pending">{t("pending")}</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">{t("description")}</label>
                  <textarea className="form-control" rows={3}></textarea>
                </div>

                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    onClick={() => setIsFormOpen(false)}
                  >
                    {t("cancel")}
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {t("save")}
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
