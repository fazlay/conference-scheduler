import React from "react";

import EventDetailsCard from "../EventDetailsCard";

interface EventDetailsProps {
  dataArray: [];
}

const EventDetails: React.FC<EventDetailsProps> = ({ dataArray }) => {
  return (
    <div>
      {" "}
      <div className="left_container bg-slate-300 w-3/4">
        {dataArray?.map(() => <EventDetailsCard titleText={`first Card `} />)}
      </div>
    </div>
  );
};

export default EventDetails;
