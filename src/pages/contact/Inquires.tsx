import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDays,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Inquires = () => {
  const InquiresData = [
    {
      icon: faPhone,
      title: "PHONE",
      subTitle: "Local: +880 173 1120 281",
    },
    {
      icon: faEnvelope,
      title: "TOLL FREE",
      subTitle: "(800) 123-4567",
    },
    {
      icon: faEnvelope,
      title: "EMAIL",
      subTitle: "info@clippath.com",
    },
    {
      icon: faCalendarDays,
      title: "TIME",
      subTitle: "24/7 Hours<br />Monday - Friday",
    },
  ];
  return (
    <div className="bg-black py-12 pl-8 my-12 container_margin">
      <h1
        className={`text-4xl font-bold font-primary-heading text-secondary text-center`}
      >
        Sales & General Inquires
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4   md:divide-x-2 divide-gray-400  text-secondary justify-around items-center">
        {InquiresData.map((item) => (
          <div className="flex flex-col items-center text-center">
            <FontAwesomeIcon
              style={{
                height: "25px",
                width: "25px",
                color: "#000",
                padding: "10px",
                backgroundColor: "#fff",
                borderRadius: "100%",
              }}
              icon={item.icon}
            />

            <p className="tracking-widest font-semibold"> {item.title}</p>
            <p className=" font-medium">
              Local:{" "}
              <span className="tabular-nums">
                {" "}
                {item.subTitle.includes("<br />") ? (
                  <span dangerouslySetInnerHTML={{ __html: item.subTitle }} />
                ) : (
                  <span>{item.subTitle}</span>
                )}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Inquires;
