import React from "react";

import { ConferenceType } from "@/type/conferanceType";
import ThunderIcon from "@/public/assets/images/icons/thundercon";

import ConferenceCard from "../ConferenceCard";

interface LeftTimeLineProps {
  item: ConferenceType;
}

const LeftTimeLine: React.FC<LeftTimeLineProps> = ({ item }) => {
  return (
    <div className="flex flex-col md:grid grid-cols-9 mx-auto ">
      <div className="col-start-1 col-end-5">
        <ConferenceCard item={item} />
      </div>
      <div className="col-start-5 col-end-6 md:mx-auto relative mr-10 flex items-center">
        <div className="h-full w-6 flex items-center justify-center ">
          <div className="h-full w-[3px] bg-slate-300 pointer-events-none"></div>
        </div>
        <div className=" absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 shadow">
          <ThunderIcon width="32" height="32" color="#ffc93e" />
        </div>
      </div>
    </div>
  );
};

export default LeftTimeLine;
