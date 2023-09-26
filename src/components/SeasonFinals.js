import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import { SeasonFinalsPremier } from "./SeasonFinalsPremier";
import { SeasonFinalsChallenger } from "./SeasonFinalsChallenger";

export const SeasonFinals = (props) => {
  const [currentTab, setCurrentTab] = useState("1");
  const eventLocation = "Atlanta, GA";
  const tabs = [
    {
      id: 1,
      tabTitle: "FINALS",
      content: (
        <>
          <SeasonFinalsPremier location={eventLocation} event={"Premier"} />
          <SeasonFinalsChallenger
            location={eventLocation}
            event={"Challenger"}
          />
        </>
      ),
    },
  ];
  const handleTabClick = (e) => {
    // console.log("firing");
    // console.log(e.target.id);
    setCurrentTab(e.target.id);
    if (e.target.id === "1") {
      document.getElementById("1").style.backgroundColor = "white";
      document.getElementById("2").style.backgroundColor = "#44566e";
    }
    if (e.target.id === "2") {
      document.getElementById("2").style.backgroundColor = "white";
      document.getElementById("1").style.backgroundColor = "#44566e";
    }
  };

  return (
    <>
      <style type="text/css">
        {`
    .divisionBtn{
      background-color: white;
      border: none;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      color: #ef612d;
      cursor: pointer;
      transition: all 0.25s ease-out;
      margin: 1px;
    }

    .divisionBtn:hover{
      background-color: white;
      border: none;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      color: #ef612d;
      cursor: pointer;
      transition: all 0.25s ease-out;
      margin: 1px;
    }

    .divisionBtn:focus{
      background-color: white;
      border: none;
      color: #ef612d;
      cursor: pointer;
      transition: all 0.25s ease-out;
      margin: 1px;
    }

    `}{" "}
      </style>
      <div
        style={{
          maxWidth: "1200px",
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "white",
          padding: "1px",
        }}
        className="container"
      >
        {/* <div
          style={{
            alignContent: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "#0a2137",
            color: "white",
            fontSize: "calc(1em + 1vw)",
            fontFamily: "SofiaCondensed",
            fontWeight: "500",
            paddingTop: "30px",
          }}
          className="d-flex justify-content-around"
        >
          SEASON FINALS
        </div>
        <div
          style={{
            alignContent: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "#0a2137",
            color: "white",
            fontSize: "calc(1em + 1vw)",
            fontFamily: "SofiaCondensed",
            fontWeight: "500",
            paddingBottom: "30px",
          }}
          className="d-flex justify-content-around "
        >
          
        </div> */}
        <div
          style={{ backgroundColor: "#0a2137" }}
          className="tabs d-flex justify-content-around"
        ></div>
        <div className="content">
          {tabs.map((tab, i) => (
            <div key={i}>
              {currentTab === `${tab.id}` && (
                <div>
                  {/* <p className="title">{tab.title}</p> */}
                  <div>{tab.content}</div>
                </div>
              )}{" "}
            </div>
          ))}{" "}
        </div>
      </div>
    </>
  );
};
