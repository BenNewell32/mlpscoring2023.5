import React, { useState } from "react";
import Button from "react-bootstrap/Button";

// import LogoImage from "./Capture2.svg";
import AtlantaLogo from "./DALLAS3.png";
import LogoImage from "./logo.png";
import background from "./DALLAS.PNG";
import background2 from "./DALLAS1.jpg";

import { TabsDivision } from "./TabsDivision";
import { TabsTopYear } from "./TabsTopYear";
import { SeasonFinals } from "./SeasonFinals";
import useWindowDimensions from "./WindowDimensions";

export const TabsTop = (props) => {
  var sectionStyle = {
    backgroundImage: `url(${LogoImage})`,
  };
  const { height, width } = useWindowDimensions();
  const mobileScreen = width < 900 ? background : background2;

  const [currentTab, setCurrentTab] = useState("11");
  const eventLocation = "Dallas, TX";
  const tabs = [
    {
      id: 11,
      tabTitle: "SCORING/STANDINGS",

      content: (
        <>
          <TabsDivision />
        </>
      ),
    },
    {
      id: 12,
      tabTitle: "WATCH MATCHES",
      content: (
        <>
          <p>loading...</p>
        </>
      ),
    },
    {
      id: 13,
      tabTitle: "2023 STANDINGS",

      content: (
        <>
          <TabsTopYear />
        </>
      ),
    },

    // {
    //   id: 13,
    //   tabTitle: "SEASON FINALS",

    //   content: (
    //     <>
    //       <SeasonFinals />
    //     </>
    //   ),
    // },
  ];

  const handleTabClick = (e) => {
    if (e.target.id === "12") {
      window.location.href =
        "https://www.majorleaguepickleball.net/atlanta-streaming/";
    }

    // console.log("firing");
    // console.log(e.target.id);
    setCurrentTab(e.target.id);
    // if (e.target.id === "1") {
    //   document.getElementById("11").style.backgroundColor = "white";
    //   document.getElementById("12").style.backgroundColor = "#44566e";
    //   document.getElementById("13").style.backgroundColor = "#44566e";
    // }
    // if (e.target.id === "2") {
    //   window.location.href="https://www.majorleaguepickleball.net/watchfollow/";
    //   document.getElementById("12").style.backgroundColor = "white";
    //   document.getElementById("11").style.backgroundColor = "#44566e";
    //   document.getElementById("13").style.backgroundColor = "#44566e";
    // }
    // if (e.target.id === "3") {
    //   document.getElementById("13").style.backgroundColor = "white";
    //   document.getElementById("11").style.backgroundColor = "#44566e";
    //   document.getElementById("12").style.backgroundColor = "#44566e";
    // }
  };

  return (
    <>
      <style type="text/css">
        {`
    .TOPsBtn{
      background-color: #121f34;
      border: none;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;

      color: white;
      cursor: pointer;
      transition: all 0.25s ease-out;
      margin: 1px;
    }

    .TOPsBtn:hover{
      background-color: #121f34;
      border: none;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      color: #white;
      cursor: pointer;
      transition: all 0.25s ease-out;
      margin: 1px;
    }

    .TOPsBtn:focus{
      background-color: #121f34;
      border: none;
      color: white;
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
          backgroundColor: "0a2137",
          padding: "0px",
        }}
        className="container"
      >
        <div
          style={{
            backgroundColor: "#ef612dff",
            position: "-webkit-sticky",
            position: "sticky",
            top: 60,
            zIndex: 100,
            margin: "auto",
            display: "flex",
            alignItems: "center",
          }}
          className="tabs justify-content-around"
        >
          {tabs.map((tab, i) => (
            <Button
              type="button"
              style={{
                marginTop: "2px",
                marginLeft: "2px",
                marginRight: "2px",
                marginBottom: ".5px",
                fontSize: "11px",
                lineHeight: "14px",
                fontWeight: "600",
                height: "30px",
                margin: "10px",
                width: "30%",
                borderRadius: "0px",
                transform: "skewX(-20deg)",
                // borderTopLeftRadius: "5px",
                // borderTopRightRadius: "5px",
                // borderBottomLeftRadius: "5px",
                // borderBottomRightRadius: "5px",
                fontFamily: "SofiaCondensed",
              }}
              key={i}
              className={"btn btn-lg TOPsBtn font-sofia"}
              id={tab.id}
              active={currentTab !== `${tab.id}`}
              onClick={handleTabClick}
              variant="info"
              size="sm"
            >
              <div
                id={tab.id}
                onClick={handleTabClick}
                style={{ transform: "skewX(20deg)" }}
              >
                <a id={tab.id} onClick={handleTabClick}>
                  {tab.tabTitle}
                </a>
              </div>
            </Button>
          ))}{" "}
        </div>
        {currentTab === "11" ? (
          <>
            <div
              align="center"
              style={{
                paddingBottom: "5px",

                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // background: "center",
                // backgroundImage: `url(${background})`
                backgroundImage:
                  // "linear-gradient(to bottom, transparent 0%, white 95%)," +
                  `url(${mobileScreen})`,
              }}
            >
              <div
                style={{
                  // maxWidth: "1700px",
                  paddingTop: "20px",
                  paddingBottom: "10px",
                }}
              >
                <div
                  style={{
                    paddingTop: "50px",
                    // paddingBottom: "15px",
                    textAlign: "center",
                  }}
                >
                  <img
                    style={{ width: "100vw", maxWidth: "600px" }}
                    src={AtlantaLogo}
                    alt="React Logo"
                  />
                </div>
              </div>
            </div>

            <div
              align="center"
              style={{
                fontSize: "calc(1.2em + 1.2vw)",
                color: "#ef612d",
                fontFamily: "kanit",
                paddingTop: "10px",
              }}
            >
              DALLAS SCORING AND STANDINGS
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="content">
          {tabs.map((tab, i) =>
            i === 2 ? (
              <div key={i}>
                {currentTab === `${tab.id}` && (
                  <div>
                    <p className="title">{tab.title}</p>
                    <div>{tab.content}</div>
                  </div>
                )}{" "}
              </div>
            ) : (
              <div key={i}>
                {currentTab === `${tab.id}` && (
                  <div>
                    <p className="title">{tab.title}</p>
                    <div>{tab.content}</div>
                  </div>
                )}{" "}
              </div>
            )
          )}{" "}
        </div>
      </div>
    </>
  );
};
