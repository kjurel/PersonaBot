import React from "react";
import Navbar from "../components/navbar";

export default function Home() {
  const navbarHeight = 4;
  const availableHeight = `calc(100vh - ${navbarHeight}rem)`;
  const user = null; // You can replace null with an actual user object

  const personalitySections = [
    {
      id: "architect",
      name: "Architect",
      description: "INTJ-A / INTJ-T",
      backgroundImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.16personalities.com%2Farticles%2Fproductivity-tips-for-architects-intjs-handling-the-routine&psig=AOvVaw3hMqiJhRoQtC1hVVwB47ym&ust=1693056684227000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKigtuP194ADFQAAAAAdAAAAABAE",
    },
    {
      id: "logician",
      name: "Logician",
      description: "INTP-A / INTP-T",
      backgroundImage: "URL_TO_LOGICIAN_IMAGE",
    },
    {
      id: "commander",
      name: "Commander",
      description: "ENTJ-A / ENTJ-T",
      backgroundImage: "URL_TO_COMMANDER_IMAGE",
    },
    {
      id: "debater",
      name: "Debater",
      description: "ENTP-A / ENTP-T",
      backgroundImage: "URL_TO_DEBATER_IMAGE",
    },
    {
      id: "advocate",
      name: "Advocate",
      description: "INFJ-A / INFJ-T",
      backgroundImage: "URL_TO_ADVOCATE_IMAGE",
    },
    {
      id: "mediator",
      name: "Mediator",
      description: "INFP-A / INFP-T",
      backgroundImage: "URL_TO_MEDIATOR_IMAGE",
    },
    {
      id: "protagonist",
      name: "Protagonist",
      description: "ENFJ-A / ENFJ-T",
      backgroundImage: "URL_TO_PROTAGONIST_IMAGE",
    },
    {
      id: "campaigner",
      name: "Campaigner",
      description: "ENFP-A / ENFP-T",
      backgroundImage: "URL_TO_CAMPAIGNER_IMAGE",
    },
    {
      id: "logistician",
      name: "Logistician",
      description: "ISTJ-A / ISTJ-T",
      backgroundImage: "URL_TO_LOGISTICIAN_IMAGE",
    },
    {
      id: "defender",
      name: "Defender",
      description: "ISFJ-A / ISFJ-T",
      backgroundImage: "URL_TO_DEFENDER_IMAGE",
    },
    {
      id: "executive",
      name: "Executive",
      description: "ESTJ-A / ESTJ-T",
      backgroundImage: "URL_TO_EXECUTIVE_IMAGE",
    },
    {
      id: "consul",
      name: "Consul",
      description: "ESFJ-A / ESFJ-T",
      backgroundImage: "URL_TO_CONSUL_IMAGE",
    },
    {
      id: "virtuoso",
      name: "Virtuoso",
      description: "ISTP-A / ISTP-T",
      backgroundImage: "URL_TO_VIRTUOSO_IMAGE",
    },
    {
      id: "adventurer",
      name: "Adventurer",
      description: "ISFP-A / ISFP-T",
      backgroundImage: "URL_TO_ADVENTURER_IMAGE",
    },
    {
      id: "entrepreneur",
      name: "Entrepreneur",
      description: "ESTP-A / ESTP-T",
      backgroundImage: "URL_TO_ENTREPRENEUR_IMAGE",
    },
    {
      id: "entertainer",
      name: "Entertainer",
      description: "ESFP-A / ESFP-T",
      backgroundImage: "URL_TO_ENTERTAINER_IMAGE",
    },
  ];
  

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
                    backgroundSize: "100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                  }}
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                    {section.name}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
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
