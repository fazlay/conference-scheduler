import Link from "next/link";
import React from "react";

import { ConferenceType } from "@/type/conferanceType";

interface ConferenceCardProps {
  item: ConferenceType;
}

const ConferenceCard: React.FC<ConferenceCardProps> = ({ item }) => {
  return (
    <Link href={`/${item?.id}}`}>
      <div className=" hover:scale-105 transition-transform drop-shadow-lg h-32 flex-row border-2 w-full border-t-4 items-center  flex rounded-xl pl-4">
        <div className="flex flex-row gap-4">
          <div className="h-6 w-6 border-8 border-yellow-primary rounded-full"></div>
          <div>
            <p className="text-lg font-bold">{item?.name}</p>
            <p className=" pt-2 text-sm text-grey_dark font-medium">
              {item?.slogan}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ConferenceCard;
