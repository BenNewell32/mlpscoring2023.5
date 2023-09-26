import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import { TabsRound } from "./TabsRound";
import { TabsRoundTeams } from "./TabsRoundTeams";

import { LiveMatches } from "./LiveMatches";
import { StatsPlayer002Fire } from "./StatsPlayer002Fire";
// import {StatsTeamBen} from "./StatsTeamBen";
// import {StatsBracket} from "./StatsBracket";
// import {StatsPlayerBen} from "./StatsPlayerBen";

import { StatsBracket002 } from "./StatsBracket002";

export const TabsAnalytics = (props) => {
  const { event, location } = props;
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitle: event.toUpperCase(),
      tabTitle2: "MATCHES",

      content: (
        <>
          <Row>
            <LiveMatches location={location} division={event} />
          </Row>
          <TabsRound location={location} division={event} />
        </>
      ),
    },
    {
      id: 2,
      tabTitle: "PLAYER",
      tabTitle2: "STANDINGS",
      content: (
        <>
          <StatsPlayer002Fire location={location} division={event} />
        </>
      ),
    },
    {
      id: 3,
      tabTitle: "TEAM",
      tabTitle2: "STANDINGS",

      content: (
        <>
          <TabsRoundTeams location={location} division={event} />
          {/* <StatsTeamBen location={location}
                        division={event}/> */}
        </>
      ),
    },
    {
      id: 4,
      tabTitle: "PLAYOFF",
      tabTitle2: "BRACKET",
      content: (
        <>
          <StatsBracket002 location={location} division={event} />
        </>
      ),
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <>
      <style type="text/css">
        {`
    .analyticsBtn{
      background-color: #0a2137;
      border: none;
      color: white;
      cursor: pointer;
      transition: all 0.25s ease-out;
      margin: 1px;
    }

    .analyticsBtn:hover{
      background-color: #0a2137;
      border: none;
      color: white;
      cursor: pointer;
      transition: all 0.25s ease-out;
      margin: 1px;
    }

    .analyticsBtn:focus{
      background-color: #0a2137;
      border: none;
      color: white;
      cursor: pointer;
      transition: all 0.25s ease-out;
      margin: 1px;
    }

    `}{" "}
      </style>
      <div>
        <div
          style={{
            maxWidth: "1200px",
            alignContent: "center",
            justifyContent: "center",
            backgroundColor: "#0a2137",
            marginTop: "-16.5px",
            color: "#ef612d",
          }}
        >
          <div
            style={
              {
                // backgroundColor: "#0a2137",
              }
            }
            className=" d-flex justify-content-around"
          >
            {/* <ButtonGroup
              className="d-flex justify-content-around"
              aria-label="Basic example"
            > */}
            {tabs.map((tab, i) => (
              <Button
                className="analyticsBtn"
                style={{
                  width: "50vw",
                  height: "40px",
                  marginTop: "5px",
                  marginBottom: "-5px",
                  margin: "1px",
                  fontSize: "12px",
                  fontWeight: "600",
                  borderRadius: "0px",
                  color: "white",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                  fontFamily: "SofiaCondensed",
                }}
                key={i}
                id={tab.id}
                active={currentTab !== `${tab.id}`}
                onClick={handleTabClick}
                variant="primary"
                size="sm"
              >
                <a id={tab.id} onClick={handleTabClick}>
                  {tab.tabTitle}{" "}
                </a>
                <br></br>
                <a id={tab.id} onClick={handleTabClick}>
                  {tab.tabTitle2}{" "}
                </a>
              </Button>
            ))}
            {/* </ButtonGroup> */}{" "}
          </div>
          <div
            style={{
              marginTop: "-17px",
              backgroundColor: "#0a2137",
            }}
            className="content container"
          >
            {tabs.map((tab, i) => (
              <div
                style={{ backgroundColor: "#0a2137", paddingTop: "10px" }}
                key={i}
              >
                {currentTab === `${tab.id}` && (
                  <div>
                    <p className="title">{tab.title}</p>
                    <div>{tab.content}</div>
                  </div>
                )}{" "}
              </div>
            ))}{" "}
          </div>
        </div>
      </div>
    </>
  );
};
