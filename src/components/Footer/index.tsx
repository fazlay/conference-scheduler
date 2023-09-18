import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faFacebook,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FooterIcon from "@/public/assets/images/icons/footerIcon";

const Footer = () => {
  return (
    <>
      <div className="py-12 bg-blue-dark flex flex-col  items-center">
        <FooterIcon />
        <div className=" flex flex-row justify-center pt-12 pb-4  ">
          <FontAwesomeIcon icon={faFacebook} className="mr-8" />
          <FontAwesomeIcon icon={faLinkedinIn} className="mr-8" />
          <FontAwesomeIcon icon={faTwitter} className="mr-8" />
          <FontAwesomeIcon icon={faDribbble} className="" />
        </div>
        <p className="text-grey_light">
          © 2023 Lemonhive. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
