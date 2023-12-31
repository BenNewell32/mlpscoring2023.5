import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import { TabsAnalytics } from "./TabsAnalytics";

export const TabsDivision = (props) => {
  const [currentTab, setCurrentTab] = useState("1");
  const eventLocation = "Dallas, TX";
  const tabs = [
    {
      id: 1,
      tabTitle: "PREMIER",
      content: (
        <>
          <TabsAnalytics location={eventLocation} event={"Premier"} />
        </>
      ),
    },
    {
      id: 2,
      tabTitle: "CHALLENGER",
      content: (
        <>
          <TabsAnalytics location={eventLocation} event={"Challenger"} />
        </>
      ),
    },

    // {
    // id: 3,
    // content: (
    //     <>
    //       <TabsAnalytics event={"All"} />
    //     </>
    // ),
    // },
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
          backgroundColor: "#0a2137", //HERE WHITE
          padding: "0px",
        }}
        className="container"
      >
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
            paddingTop: "20px",
          }}
          className="d-flex justify-content-around"
        >
          VIEW PREMIER AND CHALLENGER LEVEL
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
            paddingBottom: "20px",
          }}
          className="d-flex justify-content-around "
        >
          SCORINGS AND STANDINGS BELOW
        </div>
        <div
          style={{ backgroundColor: "#0a2137" }}
          className="tabs d-flex justify-content-around"
        >
          {tabs.map((tab, i) => (
            <Button
              type="button"
              style={{
                width: "50vw",
                marginTop: "2px",
                marginLeft: "2px",
                marginRight: "2px",
                marginBottom: ".5px",
                fontSize: "16px",
                fontWeight: "600",
                height: "40px",
                borderRadius: "0px",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
                fontFamily: "SofiaCondensed",
              }}
              key={i}
              className={"btn btn-lg divisionBtn font-sofia"}
              id={tab.id}
              active={currentTab !== `${tab.id}`}
              onClick={handleTabClick}
              variant="danger"
              size="sm"
            >
              <div
                id={tab.id}
                onClick={handleTabClick}
                // style={{fontFamily: "Kanit"}}
              >
                {tab.tabTitle ? (
                  <img
                    id={tab.id}
                    onClick={handleTabClick}
                    alt=""
                    width="30px"
                    src={
                      tab.tabTitle
                        ? require("./" + tab.tabTitle.toLowerCase() + ".png")
                        : null
                    }
                  />
                ) : (
                  ""
                )}
                <a id={tab.id} onClick={handleTabClick}>
                  {tab.tabTitle ? tab.tabTitle + " LEVEL" : "ALL"}{" "}
                </a>
              </div>
            </Button>
          ))}{" "}
        </div>
        <div className="content">
          {tabs.map((tab, i) => (
            <div key={i}>
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
    </>
  );
};
