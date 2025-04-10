import React, { useState} from "react";
import { LayoutDashboard, Home as HomeIcon, LogOut, Plus } from "lucide-react";
import { useLanguage } from "../../services/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { SliderDetail } from "./components/SliderDetail/SliderDetail";
import { DashboardMap } from "./components/Map/Map";
import "leaflet/dist/leaflet.css";
import "./Dashboard.css";


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
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<
    typeof defaultLocation | null
  >(null);
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
          <DashboardMap
            center={mapCenter}
            location={defaultLocation}
            onSelectLocation={setSelectedLocation}
          />
        </div>

        {/* Action Buttons */}
        <div className="action-bar">
          <div className="container">
            <button
              className="btn btn-primary"
              onClick={() => setIsAddFormOpen(true)}
            >
              <Plus size={20} className="me-1" /> {t("location.add")}
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
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>{t("location.name")}</th>
                    <th>{t("location.pipeline")}</th>
                    <th>{t("location.dueDate")}</th>
                    <th>{t("location.chainage")}</th>
                    <th>{t("location.landSurvey")}</th>
                    <th>{t("location.address")}</th>
                    <th>{t("location.description")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    onClick={() => setSelectedLocation(defaultLocation)}
                    style={{ cursor: "pointer" }}
                  >
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
            </div>
          </motion.div>
        </div>

        {/* Add Location Form (slide-in) */}
        <AnimatePresence>
          {isAddFormOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="location-form"
            >
              <h3 style={{ paddingTop: "60px" }}>{t("location.add")}</h3>
              <form className="mt-4" style={{ maxHeight: "70vh" }}>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label className="form-label">{t("location.name")}</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">{t("location.address")}</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>

                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label className="form-label">{t("location.pipeline")}</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">{t("location.dueDate")}</label>
                    <input type="date" className="form-control" />
                  </div>
                </div>

                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label className="form-label">{t("location.chainage")}</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">{t("location.landSurvey")}</label>
                    <select className="form-control">
                      <option value="">{t("general.selectOption")}</option>
                      <option value="completed">{t("location.completed")}</option>
                      <option value="pending">{t("location.pending")}</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">{t("location.description")}</label>
                  <textarea className="form-control" rows={3}></textarea>
                </div>

                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    onClick={() => setIsAddFormOpen(false)}
                  >
                    {t("general.cancel")}
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {t("general.save")}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slider Detail for Viewing Location */}
        <AnimatePresence>
          {selectedLocation && (
            <SliderDetail
              isOpen={true}
              location={selectedLocation}
              onClose={() => setSelectedLocation(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
