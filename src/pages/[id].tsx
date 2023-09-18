import React, { ReactNode, useEffect, useState } from "react";

import { StyledButton } from "@/button/Button";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { gql, useQuery } from "@apollo/client";
import BaseLayout from "@/layout/BaseLayout";
import EventDetails from "@/components/EventDetails";

// organizers: GET_ORGANIZERS,
// speakers: GET_SPEKARS,
// schedules: GET_SHEDULES,
// sponsors: GET_SPONSORS,
const selectedTab = [
  {
    id: "organizers",
    title: "Organizer",
  },
  {
    id: "speakers",
    title: "Speakers",
  },
  {
    id: "schedules",
    title: "Schedules",
  },
  {
    id: "sponsors",
    title: "Sponsors",
  },
];
const GET_ORGANIZERS = `
  query getOrganizers {
    conference(id: "freezing-edge-2020") {
      organizers {
        firstName
        image {
          url
        }
        about
      }
    }
  }
`;
const GET_SPEKARS = `
  query getSpeakers {
    conference(id: "freezing-edge-2020") {
      speakers {
        name
        image {
          url
        }
        aboutShort
      }
    }
  }
`;
const GET_SHEDULES = `
  query getSchedules {
    conference(id: "freezing-edge-2020") {
      schedules {
        day
        description
      }
    }
  }
`;
const GET_SPONSORS = `
  query getSponsors {
    conference(id: "freezing-edge-2020") {
      sponsors {
        name
        aboutShort
        image {
          url
        }
      }
    }
  }
`;
const selectedEventInfo = {
  organizers: GET_ORGANIZERS,
  speakers: GET_SPEKARS,
  schedules: GET_SHEDULES,
  sponsors: GET_SPONSORS,
};

const ConferenceDetails = () => {
  const [characters, updateCharacters] = useState<any>(selectedTab);
  const [activeTab, setActiveTab] = useState("organizers");
  const { data, loading, error } = useQuery<any>(gql`
    ${selectedEventInfo[activeTab]}
  `);
  console.log(data?.conference);
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
  return (
    <div className="container_margin max-w-screen-2xl">
      <div className="flex flex-row pt-16 gap-12">
        <div className="right_container w-1/4 ">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {characters.map(({ id, title }) => {
                    return (
                      <Draggable key={id} draggableId={id} index={id}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <StyledButton setActiveTab={setActiveTab} id={id}>
                              {title}
                            </StyledButton>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        {activeTab === "organizers" ? (
          <EventDetails dataArray={data?.conference?.organizers} />
        ) : null}
        {activeTab === "speakers" ? (
          <EventDetails dataArray={data?.conference?.speakers} />
        ) : null}
        {activeTab === "schedules" ? (
          <EventDetails dataArray={data?.conference?.schedules} />
        ) : null}
        {activeTab === "sponsors" ? (
          <EventDetails dataArray={data?.conference?.sponsors} />
        ) : null}
      </div>
    </div>
  );
};
ConferenceDetails.getLayout = (page: ReactNode) => {
  return <BaseLayout className="">{page}</BaseLayout>;
};

export default ConferenceDetails;
