import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Slider from "../Slider";

const ChooseUsCard = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-20 border-b-2 w-full">
        <FontAwesomeIcon icon={faFacebook} style={{ color: "#1860dc" }} />
      </div>
      <h4 className="text-left text-md font-bold">Accuracy</h4>
      <p className="font-thin ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iure
        earum omnis deserunt fugit cum rem nostrum? Blanditiis, quam ullam.
      </p>
    </div>
  );
};

export default ChooseUsCard;
