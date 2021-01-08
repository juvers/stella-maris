import PropTypes from "prop-types";
import React from "react";
import SubscribeEmail from "./sub-components/SubscribeEmail";

const FooterNewsletter = ({
  spaceBottomClass,
  spaceLeftClass,
  sideMenu,
  colorClass,
  widgetColorClass
}) => {
  return (
    <div
      className={`footer-widget ${spaceBottomClass ? spaceBottomClass : ""} ${
        sideMenu ? "ml-ntv5" : spaceLeftClass ? spaceLeftClass : ""
      } ${widgetColorClass ? widgetColorClass : ""}`}
    >
      <div className="footer-title">
        <h3>SUBSCRIBE</h3>
      </div>
      <div className={`subscribe-style ${colorClass ? colorClass : ""}`}>
        <p>Get E-mail updates about our latest news and stories.</p>
        {/* subscribe email */}
        <SubscribeEmail mailchimpUrl="https://us7.list-manage.com/contact-form?u=f2d3d12764b1421ddeafa57b1&form_id=de803a9645ab4e34d755ba4a1c32cb57" />
      </div>
    </div>
  );
};

FooterNewsletter.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  colorClass: PropTypes.string,
  widgetColorClass: PropTypes.string
};

export default FooterNewsletter;
