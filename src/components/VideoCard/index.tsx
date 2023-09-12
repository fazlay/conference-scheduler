import React from "react";
import dynamic from "next/dynamic";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const VideoCard = () => {
  return (
    <div>
      <div>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=h9vETeRiulY"
          width="100%"
          height="500px"
          light={
            <img
              src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=366&q=80"
              alt="Thumbnail"
              height={200}
            />
          }
        />
      </div>
      {/* <FontAwesomeIcon icon={faPlay} /> */}
      <div className="text-area">
        <p className="italic text-sm font-light">
          “Lorem ipsum dolor sit amet, consectetur adipiscing. Etiam a nulla
          pretium, rhoncus ipsum eget”
        </p>
        <p className="font-bold text-sm">John Doe</p>
        <p className=" text-sm font-semibold">Lorem ipsum dolor</p>
      </div>
    </div>
  );
};

export default VideoCard;
