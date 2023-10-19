import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {CreateMatch} from "./CreateMatch";
import {CreatePlayer} from "./CreatePlayer";
import {AddBracket} from "./AddBracket";

import {CreateTeam} from "./CreateTeam";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {MDBCollapse, MDBBtn} from "mdb-react-ui-kit";

import {MatchList} from "./MatchList";

export const Tabs = (props) => {
    const {event} = props;
    const [currentTab, setCurrentTab] = useState("1");
    const [showShow, setShowShow] = useState(false);
    const toggleShow = () => setShowShow(!showShow);
    const tabs = [
        {
            id: 1,
            tabTitle: "Championship Court",
            content: (
                <>
                    <Row>
                        <MDBBtn className="me-1" color="secondary" rippleColor="light"
                            style={
                                {maxHeight: "38px"}
                            }
                            onClick={toggleShow}>
                            Create Items
                        </MDBBtn>
                    </Row>
                    <MDBCollapse show={showShow}>
                        <Row>
                            <Col>
                                <CreateMatch court={"Championship Court"}
                                    event={event}/>
                            </Col>
                             <Col>
                <CreatePlayer event={event} />
              </Col>
              <Col>
                <CreateTeam event={event} />
              </Col>  
              <Col>
                <AddBracket />
              </Col>
              </Row>
                    </MDBCollapse>
                    <MatchList court={"Championship Court"}
                        event={event}/>
                </>
            )
        },
        {
            id: 2,
            tabTitle: "Grandstand",
            content: (
                <>
                    <Row>
                        <MDBBtn className="me-1" color="secondary" rippleColor="light"
                            style={
                                {maxHeight: "38px"}
                            }
                            onClick={toggleShow}>
                            Create Items
                        </MDBBtn>
                    </Row>
                    <MDBCollapse show={showShow}>
                        <Row>
                            <Col>
                                <CreateMatch court={"Grandstand"}
                                    event={event}/>
                            </Col>
                            {/* <Col>
                <CreatePlayer event={event} />
              </Col>
              <Col>
                <CreateTeam event={event} />
              </Col> */} </Row>
                    </MDBCollapse>
                    <MatchList court={"Grandstand"}
                        event={event}/>
                </>
            )
        },
        {
            id: 3,
            tabTitle: "Court 3",
            content: (
                <>
                    <Row>
                        <MDBBtn className="me-1" color="secondary" rippleColor="light"
                            style={
                                {maxHeight: "38px"}
                            }
                            onClick={toggleShow}>
                            Create Items
                        </MDBBtn>
                    </Row>
                    <MDBCollapse show={showShow}>
                        <Row>
                            <Col>
                                <CreateMatch court={"Court 3"}
                                    event={event}/>
                            </Col>
                            {/* <Col>
                <CreatePlayer event={event} />
              </Col>
              <Col>
                <CreateTeam event={event} />
              </Col> */} </Row>
                    </MDBCollapse>
                    <MatchList court={"Court 3"}
                        event={event}/>
                </>
            )
        },
        {
            id: 4,
            tabTitle: "Court 4",
            content: (
                <>
                    <Row>
                        <MDBBtn className="me-1" color="secondary" rippleColor="light"
                            style={
                                {maxHeight: "38px"}
                            }
                            onClick={toggleShow}>
                            Create Items
                        </MDBBtn>
                    </Row>
                    <MDBCollapse show={showShow}>
                        <Row>
                            <Col>
                                <CreateMatch court={"Court 4"}
                                    event={event}/>
                            </Col>
                            {/* <Col>
                <CreatePlayer event={event} />
              </Col>
              <Col>
                <CreateTeam event={event} />
              </Col> */} </Row>
                    </MDBCollapse>
                    <MatchList court={"Court 4"}
                        event={event}/>
                </>
            )
        }, {
            id: 5,
            tabTitle: "Grandstand 4",
            content: (
                <>
                    <Row>
                        <MDBBtn className="me-1" color="secondary" rippleColor="light"
                            style={
                                {maxHeight: "38px"}
                            }
                            onClick={toggleShow}>
                            Create Items
                        </MDBBtn>
                    </Row>
                    <MDBCollapse show={showShow}>
                        <Row>
                            <Col>
                                <CreateMatch court={"Grandstand 4"}
                                    event={event}/>
                            </Col>
                            {/* <Col>
                <CreatePlayer event={event} />
              </Col>
              <Col>
                <CreateTeam event={event} />
              </Col> */} </Row>
                    </MDBCollapse>
                    <MatchList court={"Grandstand 4"}
                        event={event}/>
                </>
            )
        }, {
            id: 6,
            tabTitle: "Grandstand 5",
            content: (
                <>
                    <Row>
                        <MDBBtn className="me-1" color="secondary" rippleColor="light"
                            style={
                                {maxHeight: "38px"}
                            }
                            onClick={toggleShow}>
                            Create Items
                        </MDBBtn>
                    </Row>
                    <MDBCollapse show={showShow}>
                        <Row>
                            <Col>
                                <CreateMatch court={"Grandstand 5"}
                                    event={event}/>
                            </Col>
                            {/* <Col>
                <CreatePlayer event={event} />
              </Col>
              <Col>
                <CreateTeam event={event} />
              </Col> */} </Row>
                    </MDBCollapse>
                    <MatchList court={"Grandstand 5"}
                        event={event}/>
                </>
            )
        },
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    };

    return (
        <>
            <style type="text/css">
                {`
    .tabs button {
      // background-color: white;
    border: none;
    color: white;
    cursor: pointer;
    transition: all 0.25s ease-out;
    margin: 1px;
}

.tabs button:hover {
    color: white;
    // background-color: rgba(255, 255, 255, 0.15);
    margin: 1px;
}

.tabs button:disabled {
    // background-color: black;
    color: black;
    margin: 1px;
}
    `} </style>

            <div className="container text-center justify-content-around">
                <div className="tabs">
                    {
                    tabs.map((tab, i) => (
                        <Button style={
                                {
                                    height: "30px",
                                    marginTop: "5px",
                                    marginBottom: "-5px",
                                    margin: "1px",
                                    fontSize: "10px",
                                    fontWeight: "bold",
                                    borderRadius: "0px",
                                    color: "white",
                                    borderTopLeftRadius: "5px",
                                    borderTopRightRadius: "5px"
                                }
                            }
                            key={i}
                            id={
                                tab.id
                            }
                            disabled={
                                currentTab === `${
                                    tab.id
                                }`
                            }
                            onClick={handleTabClick}
                            variant="secondary"
                            size="sm">
                            {
                            tab.tabTitle
                        } </Button>
                    ))
                } </div>
                <div className="content">
                    {
                    tabs.map((tab, i) => (
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
                    ))
                } </div>
            </div>
        </>
    );
};
