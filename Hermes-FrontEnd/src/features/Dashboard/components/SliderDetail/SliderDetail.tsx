import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../services/i18n";
import "./SliderDetail.css";

interface SliderDetailProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LocationFormData {
  name: string;
  address: string;
  pipeline: string;
  dueDate: string;
  chainage: string;
  landSurvey: "completed" | "pending" | "";
  description: string;
}

export const SliderDetail: React.FC<SliderDetailProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<LocationFormData>({
    name: "",
    address: "",
    pipeline: "",
    dueDate: "",
    chainage: "",
    landSurvey: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Here you could send the data to an API or handle it however you need
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="location-form"
    >
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-3 col-md-6">
            <label className="form-label">{t("location.name")}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3 col-md-6">
            <label className="form-label">{t("location.address")}</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="row">
          <div className="mb-3 col-md-6">
            <label className="form-label">{t("location.pipeline")}</label>
            <input
              type="text"
              name="pipeline"
              value={formData.pipeline}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3 col-md-6">
            <label className="form-label">{t("location.dueDate")}</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="row">
          <div className="mb-3 col-md-6">
            <label className="form-label">{t("location.chainage")}</label>
            <input
              type="text"
              name="chainage"
              value={formData.chainage}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3 col-md-6">
            <label className="form-label">{t("location.landSurvey")}</label>
            <select
              name="landSurvey"
              value={formData.landSurvey}
              onChange={handleChange}
              className="form-control"
            >
              <option value="">{t("general.selectOption")}</option>
              <option value="completed">{t("location.completed")}</option>
              <option value="pending">{t("location.pending")}</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">{t("location.description")}</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            rows={3}
          />
        </div>

        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={onClose}
          >
            {t("general.cancel")}
          </button>
          <button type="submit" className="btn btn-primary">
            {t("general.save")}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

