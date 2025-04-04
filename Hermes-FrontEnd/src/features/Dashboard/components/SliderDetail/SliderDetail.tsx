import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../services/i18n";

interface SliderDetailProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SliderDetail: React.FC<SliderDetailProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="location-form"
    >
      {/* <h3>{t("")}</h3> */}
      <form className="mt-4" style={{ maxHeight: "70vh", paddingTop: "40px" }}>
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
            onClick={onClose}
          >
            {t("cancel")}
          </button>
          <button type="submit" className="btn btn-primary">
            {t("save")}
          </button>
        </div>
      </form>
    </motion.div>
  );
};
