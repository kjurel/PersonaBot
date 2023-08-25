"use client"
import React, { useState } from "react";
import Navbar from "../components/navbar";

export default function Home() {
  const navbarHeight = 4;
  const availableHeight = `calc(100vh - ${navbarHeight}rem)`;
  const [user, setUser] = useState("");

  const personalitySections = [
    {
      id: "architect",
      name: "Architect",
      description: "INTJ-A / INTJ-T",
      backgroundImage: "/Architect.jpeg",
    },
    {
      id: "logician",
      name: "Logician",
      description: "INTP-A / INTP-T",
      backgroundImage: "/Logician.png",
    },
    {
      id: "commander",
      name: "Commander",
      description: "ENTJ-A / ENTJ-T",
      backgroundImage: "/Commander.png",
    },
    {
      id: "debater",
      name: "Debater",
      description: "ENTP-A / ENTP-T",
      backgroundImage: "/Debater.png",
    },
    {
      id: "advocate",
      name: "Advocate",
      description: "INFJ-A / INFJ-T",
      backgroundImage: "/Advocate.jpeg",
    },
    {
      id: "mediator",
      name: "Mediator",
      description: "INFP-A / INFP-T",
      backgroundImage: "/Mediator.jpeg",
    },
    {
      id: "protagonist",
      name: "Protagonist",
      description: "ENFJ-A / ENFJ-T",
      backgroundImage: "/Protagonists.jpeg",
    },
    {
      id: "campaigner",
      name: "Campaigner",
      description: "ENFP-A / ENFP-T",
      backgroundImage: "/Campaigner.jpeg",
    },
    {
      id: "logistician",
      name: "Logistician",
      description: "ISTJ-A / ISTJ-T",
      backgroundImage: "/Lo.jpeg",
    },
    {
      id: "defender",
      name: "Defender",
      description: "ISFJ-A / ISFJ-T",
      backgroundImage: "/Defender.png",
    },
    {
      id: "executive",
      name: "Executive",
      description: "ESTJ-A / ESTJ-T",
      backgroundImage: "/Executive.png",
    },
    {
      id: "consul",
      name: "Consul",
      description: "ESFJ-A / ESFJ-T",
      backgroundImage: "/Consul.jpeg",
    },
    {
      id: "virtuoso",
      name: "Virtuoso",
      description: "ISTP-A / ISTP-T",
      backgroundImage: "/Virtuoso.jpeg",
    },
    {
      id: "adventurer",
      name: "Adventurer",
      description: "ISFP-A / ISFP-T",
      backgroundImage: "/isfp-adventurer.png",
    },
    {
      id: "entrepreneur",
      name: "Entrepreneur",
      description: "ESTP-A / ESTP-T",
      backgroundImage: "/Enterprenuer.jpeg",
    },
    {
      id: "entertainer",
      name: "Entertainer",
      description: "ESFP-A / ESFP-T",
      backgroundImage: "/Entertainer.jpeg",
    },
  ];
  
  const handleSectionClick = (description: string | any[]) => {
    if (typeof description === 'string') {
      const shortenedDescription = description.slice(0, 4);
      setUser(shortenedDescription);
      console.log(user);
    }
  };
  return (
    <div>
      <Navbar />
      <div style={{ height: availableHeight }}>
        {user ? (
          <div className="flex inset-x-0 bottom-0">
            <input
              type="text"
              style={{
                width: '85%',
                padding: '12px 20px',
                margin: '0',
                boxSizing: 'border-box',
                color:'black',
              }}
              className="rounded-l-lg"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white py-4 px-8 text-center text-lg font-semibold rounded-r-lg w-[15%]">
              Click me
            </button>
          </div>
        ) : (
                <div>
                <div
                  className="grid grid-cols-4 gap-4"
                  style={{ height: availableHeight }}
                >
                  {personalitySections.map((section) => (
                    <div
                      key={section.id}
                      id={section.id}
                      style={{
                        backgroundImage: `url(${section.backgroundImage})`,
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
                      onClick={() => handleSectionClick(section.description)}
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                        {section.name}
                      </h5>
                      <p className="font-normal text-gray-700">
                        {section.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>              
        )}
      </div>
    </div>
  );
}