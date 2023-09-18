import React from "react";

import { ConferenceType } from "@/type/conferanceType";

import LeftTimeLine from "./LeftTimeLine";
import RightTimeLine from "./RightTimeLine";

interface TimelineViewProps {
  conferences: Array<ConferenceType>;
}

const TimelineView: React.FC<TimelineViewProps> = ({ conferences }) => {
  return (
    <div className="container mb-10">
      {conferences?.map((item: ConferenceType, index: number) =>
        index % 2 == 0 ? (
          <LeftTimeLine item={item} />
        ) : (
          <RightTimeLine item={item} />
        )
      )}
    </div>
  );
};

export default TimelineView;
