import React from "react";

interface EventDetailsCardProps {
  data: {};
}

const EventDetailsCard: React.FC<EventDetailsCardProps> = ({ data }) => {
  return (
    <div className="flex flex-row bg-white my-2 mx-4 rounded-md">
      <img src="/assets/images/conf/image_1.png" alt="hero" />
      <div>
        {data?.name ? <p className="font-bold">{data?.name}</p> : null}
        {data?.firstName ? (
          <p className="font-bold">{data?.firstName}</p>
        ) : null}
        <p className="font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default EventDetailsCard;
