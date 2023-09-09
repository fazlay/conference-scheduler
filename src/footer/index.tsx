import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex w-full ">
      <div className="left-section flex-2 w-1/2" >
        <div className="brand-icon m-2">
        <FontAwesomeIcon icon={faFacebook} style={{color: "#1860dc",}} />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iure
          earum omnis deserunt fugit cum rem nostrum? Blanditiis, quam ullam.
        </p>
     
        <div className="social-icons">
     
          <FontAwesomeIcon icon={faFacebook} className="social-icon-footer " />
          <FontAwesomeIcon icon={faFacebook}className="social-icon-footer " />
          <FontAwesomeIcon icon={faFacebook} className="social-icon-footer "/>
          <FontAwesomeIcon icon={faFacebook} className="social-icon-footer "/>
        </div>
      </div>
      <div className="middle-section flx-1">middle section</div>
      <div className="right-section flex-1">Right</div>
    </div>
  );
};

export default Footer;
