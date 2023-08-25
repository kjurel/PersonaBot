import React, { FC, useState } from "react";

interface MbtiCardProps {
  id: string;
  name: string;
  description: string;
  backgroundImage: string;
}

const MbtiCard: FC<MbtiCardProps> = (props) => {
  const [user, setUser] = useState("");
  const handleSectionClick = (description: string | any[]) => {
    if (typeof description === "string") {
      const shortenedDescription = description.slice(0, 4);
      setUser(shortenedDescription);
    }
  };
  return (
    <>
      <div
        key={props.id}
        id={props.id}
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
          backgroundSize: "cover", // Use 'cover' to maintain aspect ratio
          backgroundPosition: "center top", // Center the background image
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Adjust alignment for better spacing
          alignItems: "center", // Center text horizontally
          padding: "20px",
          cursor: "pointer",
          position: "relative", // Add position to control text overflow
        }}
        onClick={() => handleSectionClick(props.description)}
        className="opacity-80 hover:opacity-100 hover:scale-105 group-hover:opacity-40 transition-opacity transition-scale rounded-lg"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black bg-white px-2">
          {props.name}
        </h5>
        <p className="font-normal text-gray-700 bg-white x-2 ">
          {props.description}
        </p>
      </div>
    </>
  );
};

export default MbtiCard;
