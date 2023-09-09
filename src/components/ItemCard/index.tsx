import React from "react";
import Image from "next/image";

interface ItemCardProps {
  cardIcon: any;
  cardTitle: string;
  cardDescription: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  cardIcon,
  cardTitle,
  cardDescription,
}) => {
  return (
    <div>
      {/* <div className="flex justify-center items-center h-20 border-b-2 w-full">
        <FontAwesomeIcon icon={faFacebook} style={{ color: "#1860dc" }} />
      </div> */}
      <div className="flex justify-start items-center h-20  w-full">
        <Image
          src={cardIcon}
          alt="Picture of the author"
          width={50}
          height={50}
        />
      </div>
      <h4 className="text-left text-md font-bold pb-4">
        {/* Accuracy */}
        {cardTitle}
      </h4>
      <p className="font-thin text-faded_black ">
        {cardDescription}
        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iure
        earum omnis deserunt fugit cum rem nostrum? Blanditiis, quam ullam. */}
      </p>
    </div>
  );
};

export default ItemCard;
