import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer_image_container w-full p-8 mb-16">
        <h3 className="text-sm font-bold text-white pt-6">
          // We Carry More Than Just Good Coding Skills
        </h3>
        <div className="flex pt-8 justify-between">
          <h3 className="text-4xl font-bold text-white">
            Let's Make Your Business Profitable!
          </h3>
          <div>
            <button className="outer-button mt-4 mr-6">Contact</button>
          </div>
        </div>
      </div>
      <div className="flex w-full  bg-background-footer text-secondary gap-16">
        <div className="left-section flex-2 w-1/2">
          <div className="brand-icon p-2 mt-4">
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#1860dc" }} />
          </div>
          <p className="text-xs text-slate">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            iure earum omnis deserunt fugit cum rem nostrum? Blanditiis, quam
            ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dolore iure earum omnis deserunt fugit cum rem nostrum? Blanditiis,
            quam ullam.
          </p>

          <div className="social-icons py-8">
            <FontAwesomeIcon
              icon={faFacebook}
              className="social-icon-footer "
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="social-icon-footer "
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="social-icon-footer "
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="social-icon-footer "
            />
          </div>
        </div>
        <div className="middle-section flx-1 pt-8">
          <p className="text-sm font-bold text-white pb-4">Useful Links</p>
          <ul className={styles.footer_ul}>
            <li className={styles.footer_li}>Home</li>
            <li className={styles.footer_li}>Blog</li>
            <li className={styles.footer_li}>Home</li>
            <li className={styles.footer_li}>Home</li>
            <li className={styles.footer_li}>Blog</li>
            <li className={styles.footer_li}>Home</li>
          </ul>
        </div>
        <div className="right-section flex-1 pt-8">
          <p className="text-sm font-bold text-white pb-4">
            Subscribe to our newsletter
          </p>
          <div className="pr-8">
            <div className={styles.webflow_style_input}>
              <input
                // className=""
                type="email"
                placeholder="Enter your email"
              ></input>
              <button type="submit">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            <div className="contact_details pt-4">
              <div className="first_item flex pb-2">
                <div className="icon flex justify-center items-center">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="text pl-2">
                  <p className="text-xs text-secondary font-semibold pl-1 pb-0">
                    {" "}
                    24/7 Support:
                  </p>
                  <p className="text-xs text-secondary font-semibold ">
                    {" "}
                    +88017111 38456
                  </p>
                </div>
              </div>
              <div className="first_item flex pb-2">
                <div className="icon flex justify-center items-center">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="text pl-2">
                  <p className="text-xs text-secondary font-semibold pl-1 pb-0">
                    {" "}
                    24/7 Support:
                  </p>
                  <p className="text-xs text-secondary font-semibold ">
                    {" "}
                    +88017111 38456
                  </p>
                </div>
              </div>
              <div className="first_item flex pb-2">
                <div className="icon flex justify-center items-center">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="text pl-2">
                  <p className="text-xs text-secondary font-semibold pl-1 pb-0">
                    {" "}
                    24/7 Support:
                  </p>
                  <p className="text-xs text-secondary font-semibold ">
                    {" "}
                    +88017111 38456
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
