import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Tabs } from "./Tabs";

export const TabsEvents = (props) => {
  const [currentTab, setCurrentTab] = useState("4");
  const tabs = [
    {
      id: 1,
      tabTitle: "Mesa, AZ",
      content: (
        <>
          <Tabs event={"Mesa, AZ"} />
        </>
      ),
    },
    {
      id: 2,
      tabTitle: "Daytona Beach, FL",
      content: (
        <>
          <Tabs event={"Daytona Beach, FL"} />
        </>
      ),
    },
    {
      id: 3,
      tabTitle: "San Clemente, CA",
      content: (
        <>
          <Tabs event={"San Clemente, CA"} />
        </>
      ),
    },
    {
      id: 4,
      tabTitle: "Atlanta, GA",
      content: (
        <>
          <Tabs event={"Atlanta, GA"} />
        </>
      ),
    },
    {
      id: 5,
      tabTitle: "La Quinta, CA",
      content: (
        <>
          <Tabs event={"La Quinta, CA"} />
        </>
      ),
    },
    {
      id: 6,
      tabTitle: "2nd San Clemente, CA",
      content: (
        <>
          <Tabs event={"2nd San Clemente, CA"} />
        </>
      ),
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <>
      <div className="container text-center justify-content-around">
        <div style={{ padding: "10px" }} className="tabs">
          {tabs.map((tab, i) => (
            <Button
              style={{
                height: "30px",
                marginTop: "5px",
                marginBottom: "-5px",
                margin: "1px",
                fontSize: "10px",
                fontWeight: "bold",
                borderRadius: "0px",
                color: "white",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
              }}
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTabClick}
              variant="primary"
              size="sm"
            >
              {tab.tabTitle}
            </Button>
          ))}
        </div>
        <div className="content">
          {tabs.map((tab, i) => (
            <div key={i}>
              {currentTab === `${tab.id}` && (
                <div>
                  <p className="title">{tab.title}</p>
                  <div>{tab.content}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
