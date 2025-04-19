import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faChartLine,
  faUsers,
  faSliders,
  faPercent,
  faFileInvoice,
  faLock,
  faShare,
  faStar,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

const SettingsLink = ({ to, icon, text }) => (
  <Link to={to} className="text-decoration-none text-dark">
    <div className="d-flex align-items-center py-3">
      <div
        className="settings-icon me-3"
        style={{ width: "24px", color: "#666" }}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <span>{text}</span>
    </div>
  </Link>
);

const Divider = () => <hr className="my-2" style={{ opacity: 0.1 }} />;

const Settings = () => {
  return (
    <div className="settings-container bg-white min-vh-100">
      <div className="px-3">
        {/* Organization section */}
        <SettingsLink
          to="/dashboard/settings/organization-profile"
          icon={faBuilding}
          text="Organization Profile"
        />

        <SettingsLink
          to="/dashboard/settings/users"
          icon={faUsers}
          text="Users"
        />

        <SettingsLink
          to="/dashboard/settings/logs"
          icon={faChartLine}
          text="Logs"
        />

        <Divider />

        {/* Invoice Settings */}
        <SettingsLink
          to="/dashboard/settings/preferences"
          icon={faSliders}
          text="Preferences"
        />

        <SettingsLink
          to="/dashboard/settings/taxes"
          icon={faPercent}
          text="Taxes"
        />

        <SettingsLink
          to="/dashboard/settings/invoice-templates"
          icon={faFileInvoice}
          text="Invoice Template Customization"
        />

        <Divider />

        <SettingsLink
          to="/dashboard/settings/privacy"
          icon={faLock}
          text="Privacy & Security"
        />

        <SettingsLink
          to="/dashboard/settings/share"
          icon={faShare}
          text="Share"
        />

        <SettingsLink
          to="/dashboard/settings/rate"
          icon={faStar}
          text="Rate App"
        />

        <SettingsLink
          to="/dashboard/settings/about"
          icon={faCircleInfo}
          text="About"
        />
      </div>
    </div>
  );
};

export default Settings;
