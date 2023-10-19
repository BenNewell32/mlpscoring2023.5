import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { TabsTopDivision } from "./TabsTopDivision";

export const TabsTopYear = (props) => {
  const [currentTab, setCurrentTab] = useState("32");
  const eventLocation = "Dallas, TX";
  const tabs = [
    {
      id: 31,
      tabTitle: "SEASON ONE",
      tabSubtitle: "(1-2-3)",
      tabEvent1: "Mesa, AZ",
      tabEvent2: "Daytona, FL",
      tabEvent3: "San Clemente, CA",

      content: (
        <>
          <TabsTopDivision location={eventLocation} season="S12023" />
        </>
      ),
    },
    {
      id: 32,
      tabTitle: "SEASON TWO",
      tabSubtitle: "(4-5-6)",
      tabEvent1: "Atlanta, GA",
      tabEvent2: "Dallas, TX",
      tabEvent3: "Social, CA",

      content: (
        <>
          <TabsTopDivision location={eventLocation} season="S22023" />
        </>
      ),
    },
  ];
  const handleTabClick = (e) => {
    // console.log("firing");
    // console.log(e.target.id);
    setCurrentTab(e.target.id);
    if (e.target.id === "1") {
      document.getElementById("31").style.color = "white";
      document.getElementById("31").style.backgroundColor = "092036";
      document.getElementById("32").style.color = "#536373";
      document.getElementById("32").style.backgroundColor = "#092036";
    }
    if (e.target.id === "2") {
      document.getElementById("32").style.color = "white";
      document.getElementById("32").style.backgroundColor = "092036";
      document.getElementById("31").style.color = "#536373";
      document.getElementById("31").style.backgroundColor = "#092036";
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
      color: #536373;
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
      background-color: #536373;
      border: none;
      color: #536373;
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
          marginTop: "-16px",
          padding: "0px",
        }}
        className="container"
      >
        <div
          style={{ backgroundColor: "#0a2137" }}
          className="tabs d-flex justify-content-around"
        >
          {tabs.map((tab, i) => (
            <Button
              type="button"
              style={{
                // color: "#536373",
                // backgroundColor:"#092036",
                marginTop: "2px",
                marginLeft: "2px",
                marginRight: "2px",
                marginBottom: ".5px",
                fontSize: "11px",
                lineHeight: "15px",
                fontWeight: "400",
                height: "50px",
                margin: "10px",
                width: "40%",
                borderRadius: "0px",
                borderColor: "white",
                borderWidth: "1px",
                borderStyle: "solid",
                transform: "skewX(-20deg)",
                fontFamily: "SofiaCondensed",
              }}
              key={i}
              className={"btn btn-lg divisionBtn font-sofia"}
              active={currentTab !== `${tab.id}`}
              variant="danger"
              id={tab.id}
              size="sm"
            >
              <div
                id={tab.id}
                onClick={handleTabClick}
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                <a id={tab.id} onClick={handleTabClick}>
                  {tab.tabTitle}
                </a>
              </div>
              <div
                id={tab.id}
                onClick={handleTabClick}
                style={{
                  fontSize: "12px",
                  fontWeight: "300",
                }}
              >
                <a id={tab.id} onClick={handleTabClick}>
                  {tab.tabSubtitle}
                </a>
              </div>
            </Button>
          ))}{" "}
        </div>
        <div className="content">
          {tabs.map((tab, i) => (
            <>
              {/* <div key={i}>
                {currentTab === `${tab.id}` && (
                  <div style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    alignContent: "center",
                    alignItems:"center",
                    textAlign:"center",
                    color:"white"
                  }}>
                    <Button
              type="button"
              //disabled={true}
              style={{
                backgroundColor: "#ef612d",
                color:"#092036",
                marginTop: "2px",
                marginLeft: "2px",
                marginRight: "2px",
                marginBottom: ".5px",
                fontSize: "11px",
                lineHeight: "15px",
                fontWeight: "400",
                height: "30px",
                margin:"10px",
                width: "25%",
                borderRadius: "0px",
                borderColor:"white",
                borderWidth:"1px",
                borderStyle:"solid",
                transform: "skewX(-20deg)",
                fontFamily: "SofiaCondensed",
              }}
              key={i}
              className={"btn btn-lg divisionBtn font-sofia"}
              variant="danger"
              id={tab.id}
              size="sm"
            >
              <div
                id={tab.id}
                onClick={handleTabClick}
                style={{transform: "skewX(20deg)"}}
              >
                <a id={tab.id} onClick={handleTabClick}>
                  {tab.tabEvent1}
                </a>
              </div>
            </Button>
            <Button
              type="button"
              //disabled={true}
              style={{
                backgroundColor: "#ef612d",
                color:"#092036",
                marginTop: "2px",
                marginLeft: "2px",
                marginRight: "2px",
                marginBottom: ".5px",
                fontSize: "11px",
                lineHeight: "15px",
                fontWeight: "400",
                height: "30px",
                margin:"10px",
                width: "25%",
                borderRadius: "0px",
                borderColor:"white",
                borderWidth:"1px",
                borderStyle:"solid",
                transform: "skewX(-20deg)",
                fontFamily: "SofiaCondensed",
              }}
              key={i}
              className={"btn btn-lg divisionBtn font-sofia"}
              variant="danger"
              id={tab.id}
              size="sm"
            >
              <div
                id={tab.id}
                onClick={handleTabClick}
                style={{transform: "skewX(20deg)"}}
              >
                <a id={tab.id} onClick={handleTabClick}>
                  {tab.tabEvent2}
                </a>
              </div>
            </Button>
            <Button
              type="button"
              //disabled={true}
              style={{
                backgroundColor: "#ef612d",
                color:"#092036",
                marginTop: "2px",
                marginLeft: "2px",
                marginRight: "2px",
                marginBottom: ".5px",
                fontSize: "11px",
                lineHeight: "15px",
                fontWeight: "400",
                height: "30px",
                margin:"10px",
                width: "25%",
                borderRadius: "0px",
                borderColor:"white",
                borderWidth:"1px",
                borderStyle:"solid",
                transform: "skewX(-20deg)",
                fontFamily: "SofiaCondensed",
              }}
              key={i}
              className={"btn btn-lg font-sofia"}
              variant="danger"
              id={tab.id}
              size="sm"
            >
              <div
                id={tab.id}
                onClick={handleTabClick}
                style={{transform: "skewX(20deg)"}}
              >
                <a id={tab.id} onClick={handleTabClick}>
                  {tab.tabEvent3}
                </a>
              </div>
            </Button>

                  </div>
                )}{" "}
              </div> */}
              <div key={i}>
                {currentTab === `${tab.id}` && (
                  <div>
                    <p className="title">{tab.title}</p>
                    <div>{tab.content}</div>
                  </div>
                )}{" "}
              </div>
            </>
          ))}{" "}
        </div>
      </div>
    </>
  );
};
