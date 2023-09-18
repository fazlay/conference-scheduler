import React from "react";

interface EventDetailsCardProps {
  titleText: string;
}

const EventDetailsCard: React.FC<EventDetailsCardProps> = ({ titleText }) => {
  return (
    <div className="flex flex-row bg-white my-2 mx-4 rounded-md">
      <img src="/assets/images/conf/image_1.png" alt="hero" />
      <div>
        <p className="font-bold">{titleText}</p>
        <p className="font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default EventDetailsCard;
