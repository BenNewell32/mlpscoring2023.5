import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {LiveMatches} from "./LiveMatches";
import {ScheduledMatches} from "./ScheduledMatches";
import {StatsTeam002Fire} from "./StatsTeam002Fire";

export const TabsRoundTeams = (props) => {
    const {division, location} = props;

    const [currentTab, setCurrentTab] = useState("1");
    const tabs = [
        {
            id: 1,
            tabTitle: "ALL",
            content: (
                <>                  
                   <StatsTeam002Fire location={location}
                        division={division}
                        round="ALL"/>
                </>
            )
        },
        {
            id: 2,
            tabTitle: "GROUP A",
            content: (
                <>                  
                   <StatsTeam002Fire location={location}
                        division={division}
                        round="GROUP A"/>
                </>
            )
        }, {
            id: 3,
            tabTitle: "GROUP B",
            content: (
                <>                  
                   <StatsTeam002Fire location={location}
                        division={division}
                        round="GROUP B"/>
                </>
            )
        }, {
            id: 4,
            tabTitle: "GROUP C",
            content: (
                <>                  
                   <StatsTeam002Fire location={location}
                        division={division}
                        round="GROUP C"/>
                </>
            )
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    };

    return (
        <>
            <style type="text/css">
                {`
    .matchListHeader{
      background-color: #1b3448;
      border-radius: 25px;
      padding: 5px;
    }
    .matchListHeader2{
      background-color: #ef612d;
      border-radius: 25px;
      padding: 5px;
    }
    .matchListTitle{
      color: white;
    }

    .roundBtn{
      background-color: #0a2137;
      color: #ef612d;

      cursor: pointer;
      transition: all 0.25s ease-out;
      margin: 1px;
    }

    .roundBtn:hover{
      background-color: #0a2137;
      color: #ef612d;

      cursor: pointer;
      transition: all 0.25s ease-out;
      margin: 1px;
    }

    .roundBtn:focus{
      background-color: #0a2137;
      color: #ef612d;

      cursor: pointer;
      transition: all 0.25s ease-out;
      margin: 1px;
    }

    `} </style>
            <div style={
                {
                    maxWidth: "1200px",
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: "-10px",
                    backgroundColor: "#121f34"
                }
            }>
                <div style={
                        {backgroundColor: "#0a2137"}
                    }
                    className="tabs d-flex justify-content-around font-kanit">
                    {
                    tabs.map((tab, i) => (
                        <> {/* <div
                style={{
                  backgroundColor: "#ef612d",
                  width: "2px",
                }}
              ></div> */}

                            <Button type="button"
                                style={
                                    {
                                        width: "50vw",
                                        height: "40px",
                                        margin: "1px",
                                        fontSize: "12px",
                                        fontWeight: "bold",
                                        borderRadius: "0px",
                                        borderColor: "transparent"
                                    }
                                }
                                key={i}
                                className={"btn btn-lg roundBtn"}
                                id={
                                    tab.id
                                }
                                active={
                                    currentTab !== `${
                                        tab.id
                                    }`
                                }
                                onClick={handleTabClick}
                                variant="info"
                                size="sm">
                                <a id={
                                        tab.id
                                    }
                                    onClick={handleTabClick}>
                                    {
                                    tab.tabTitle ? tab.tabTitle : "ALL"
                                } </a>
                            </Button>
                        </>
                    ))
                } </div>
                <div className="content">
                    {
                    tabs.map((tab, i) => (
                        <>
                            <div key={i}>
                                {
                                currentTab === `${
                                    tab.id
                                }` && (
                                    <div>
                                        <p className="title">
                                            {
                                            tab.title
                                        }</p>
                                        <div>{
                                            tab.content
                                        }</div>
                                    </div>
                                )
                            } </div>
                        </>
                    ))
                } </div>
            </div>
        </>
    );
};
