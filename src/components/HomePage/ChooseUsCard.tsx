import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Slider from "../Slider";
import Image from "next/image";

const ChooseUsCard = () => {
  return (
    <div>
      <div className="flex justify-center items-center border-b-2 border-slate-600 w-full">
        <div className="pb-16 block">
          <Image
            src="/assets/images/accuracy_icon.png"
            alt="why choose us"
            width={50}
            height={50}
          />
        </div>
      </div>
      <h4 className="text-left text-md font-bold py-4">Accuracy</h4>
      <p className="font-thin ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iure
        earum omnis deserunt fugit cum rem nostrum? Blanditiis, quam ullam.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iure
        earum omnis deserunt fugit cum rem nostrum? Blanditiis, quam ullam.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iure
        earum omnis deserunt fugit cum rem nostrum? Blanditiis, quam ullam.
      </p>
    </div>
  );
};

export default ChooseUsCard;
