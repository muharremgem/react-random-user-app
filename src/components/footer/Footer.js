import React from "react";
import "./Footer.css";
import designSvg from "../../assets/design.svg";

const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://www.muharremgem.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <code className="brand">{"Muharrem GEM "}</code>
      </a>
      <img
        src={designSvg}
        alt="design"
        style={{ width: "30px", margin: "0  25px 0 10px" }}
      />
      <span>design</span>
    </div>
  );
};

export default Footer;
