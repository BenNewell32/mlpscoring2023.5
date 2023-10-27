import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {MDBCollapse, MDBBtn} from "mdb-react-ui-kit";

import {Live} from "./Live";
import {TiArrowSortedDown} from "react-icons/ti";
import {TiArrowSortedUp} from "react-icons/ti";

import {VscCircleFilled} from "react-icons/vsc";
import {TbTrademark} from "react-icons/tb";

import {useState} from "react";


export const ScheduledMatchLayout = (props) => {
    let suffixes =
    //    0     1     2     3     4     5     6     7     8     9
    [
        "th",
        "st",
        "nd",
        "rd",
        "th",
        "th",
        "th",
        "th",
        "th",
        "th",
        //    10    11    12    13    14    15    16    17    18    19
        "th",
        "th",
        "th",
        "th",
        "th",
        "th",
        "th",
        "th",
        "th",
        "th",
        //    20    21    22    23    24    25    26    27    28    29
        "th",
        "st",
        "nd",
        "rd",
        "th",
        "th",
        "th",
        "th",
        "th",
        "th",
        //    30    31
        "th",
        "st",
    ];
    const {match, live} = props;
    const [showShow, setShowShow] = useState(false);
    const toggleShow = () => setShowShow(!showShow);

    return(match.court ? <>
        <style type="text/css">
            {`
          .rightScore {
            background-color: #1b3448;
            color: white;
            font-weight: bold;
            font-size: 30px;
          }

          .leftScore {
            background-color: #1b3448;
            color: white;
            font-weight: bold;
            font-size: 30px;
          }
          .gameHeader{
            font-weight: bold;
            color: #ef612d;
            font-size: 15px;
            text-align: center;

          }
          .playerNameLeft{
            text-align: left;
            color: black;
            font-size: 14px;
            font-family: "SofiaCondensed";
            font-weight: bold;
            padding-left: 10px;

          }
          .playerNameRight{
            text-align: right;
            color: black;
            font-size: 14px;
            font-family: "SofiaCondensed";
            font-weight: bold;

          }
          .teamName{
            font-weight: bold;
            color: #1b3448;
            font-size: 14px;
          }
          .gameScoreLeft{
            font-weight: bold;
            font-size: 20px;
            text-align: center;
            color: #a0a7b4;

          }
          .gameScoreRight{
            font-weight: bold;
            font-size: 20px;
            text-align: center;
            color: #a0a7b4;

          }  
          .gameScoreLeftWin{
            font-weight: bold;
            font-size: 20px;
            text-align: center;
            color: #1b3448;
          }
          .gameScoreRightWin{
            font-weight: bold;
            font-size: 20px;
            text-align: center;
            color: #1b3448;
          }        
    `} </style>
        <hr style={
            {
                color: "#1b3448",
                height: "2px",
                borderWidth: "2",
                backgroundColor: "black",
                padding: "0",
                margin: "0"
            }
        }></hr>
        <div className="justify-content-md-center"
            style={
                {paddingTop: "5px"}
            }
            key={
                match.id
        }>

            <Container style={{paddingBottom: "15px"}} className="justify-content-md-center">
                <Row className="justify-content-md-center">
                    <Col style={
                            {
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "#ef612d",
                                fontSize: "14px",
                                backgroundColor: "#ebedf0"
                            }
                        }
                        className="font-sofia">
                        {
                        new Date(match.date).toLocaleDateString("en-US",{weekday: "long", timeZone: 'UTC'}).toUpperCase()
                    } </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col style={
                            {
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "#1b3448",
                                fontSize: "14px",
                                backgroundColor: "#ebedf0"
                            }
                        }
                        className="font-kanit">
                        {
                        match.court.toUpperCase()
                    }&nbsp; {
                        live === true ? "" : <VscCircleFilled/>
                    }
                        &nbsp; {
                        live === true ? <Live/>: match.startTime.split(":")[0] % 12 || 12
                    }
                        {
                        live === true ? "" : ":" + match.startTime.split(":")[1]
                    }
                        {
                        live === true ? "" : match.startTime.split(":")[0] < 12 ? " AM CT" : " PM CT"
                    } </Col>
                </Row>

                <Row style={{paddingTop:"15px"}} className="justify-content-md-center">
                    <Col xs={4}>
                        <Row className="d-flex justify-content-center align-items-center text-center" width="20px">
                            <Image style={
                                    {width: "80px"}
                                }
                                src={
                                    require("./png" + match.team1Logo + ".png")
                                }/>
                        </Row>
                        <Row style={
                                {textAlign: "center"}
                            }
                            xs={3}
                            className="d-flex justify-content-center align-items-center text-center teamName">
                            {
                            match.team1
                        } </Row>
                    </Col>
                    <Col xs={4}
                        className="justify-content-center align-items-center text-center">
                        <Row>
                        {(match.team1Score>match.team2Score && match.team1Score>2)?

                            <Col className="d-flex justify-content-center align-items-center text-center leftScore"
                                style={
                                    {
                                        borderStyle: "solid",
                                        borderColor: "white"
                                    }
                            }>
                                {
                                match.team1Score
                            }
                                {
                                match.winner === "1" ? "*" : ""
                            } </Col>:
                            <Col className="d-flex justify-content-center align-items-center text-center leftScore"
                                style={
                                    {
                                        borderStyle: "solid",
                                        borderColor: "white",
                                        color: "gray"
                                    }
                            }>
                                {
                                match.team1Score
                            }
                                {
                                match.winner === "1" ? "*" : ""
                            } </Col>
                        }
                        {(match.team2Score>match.team1Score && match.team2Score>2)?

                            <Col className="d-flex justify-content-center align-items-center text-center rightScore"
                                style={
                                    {
                                        borderStyle: "solid",
                                        borderColor: "white"
                                    }
                            }>
                                {
                                match.team2Score
                            }
                                {
                                match.winner === "2" ? "*" : ""
                            } </Col>:
                            <Col className="d-flex justify-content-center align-items-center text-center rightScore"
                                style={
                                    {
                                        borderStyle: "solid",
                                        borderColor: "white",
                                        color: "gray"
                                    }
                            }>
                                {
                                match.team2Score
                            }
                                {
                                match.winner === "2" ? "*" : ""
                            } </Col>
                        }
                        </Row>
                        <Row>
                            <MDBBtn size="sm"
                                id={
                                    match.id
                                }
                                className="me-1"
                                color="primary"
                                rippleColor="light"
                                style={
                                    {
                                        color: "white",
                                        height: "50px",
                                        borderRadius: "0",
                                        borderWidth: "3px",
                                        borderColor: "white"
                                    }
                                }
                                onClick={toggleShow}>
                                {
                                showShow ? "Close" : "Expand"
                            }
                                {
                                showShow ? <TiArrowSortedUp/>: <TiArrowSortedDown/>
                            } </MDBBtn>
                        </Row>
                    </Col>
                    <Col xs={4}>
                        <Row className="d-flex justify-content-center align-items-center text-center" width="20px">
                            <Image src={
                                    require("./png" + match.team2Logo + ".png")
                                }
                                style={
                                    {width: "80px"}
                                }/>
                        </Row>
                        <Row style={
                                {textAlign: "center"}
                            }
                            xs={3}
                            className="d-flex justify-content-center align-items-center text-center teamName">
                            {
                            match.team2
                        } </Row>
                    </Col>
                </Row>
                <MDBCollapse show={showShow}>
                        {match.endTime==='M'?
                        <>
                        <Row>
                        <Col className="gameHeader">
                            <hr style={
                                {color: "#ef612d"}
                            }></hr>
                            MEN'S DOUBLES
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Row className="playerNameLeft">
                                {
                                match.MD.team1Player1
                            }</Row>
                            <Row className="playerNameLeft">
                                {
                                match.MD.team1Player2
                            }</Row>
                        </Col>
                        {
                        match.MD.winner === 1 ? (
                            <Col xs={2}
                                className="gameScoreLeftWin">
                                {
                                match.MD.team1Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreLeft">
                                {
                                match.MD.team1Score
                            } </Col>
                        )
                    }

                        {
                        match.MD.winner === 2 ? (
                            <Col xs={2}
                                className="gameScoreRightWin">
                                {
                                match.MD.team2Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreRight">
                                {
                                match.MD.team2Score
                            } </Col>
                        )
                    }
                        <Col xs={4}>
                            <div className="playerNameRight">
                                {
                                match.MD.team2Player1
                            }</div>
                            <div className="playerNameRight">
                                {
                                match.MD.team2Player2
                            }</div>
                        </Col>
                    </Row>
                        </> 
                        :
                        <>
                        <Row>
                        <Col className="gameHeader">
                            <hr style={
                                {color: "#ef612d"}
                            }></hr>
                            WOMEN'S DOUBLES
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Row xs={12}
                                className="playerNameLeft">
                                {
                                match.WD.team1Player1
                            } </Row>
                            <Row xs={12}
                                className="playerNameLeft">
                                {
                                match.WD.team1Player2
                            } </Row>
                        </Col>
                        {
                        match.WD.winner === 1 ? (
                            <Col xs={2}
                                className="gameScoreLeftWin">
                                {
                                match.WD.team1Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreLeft">
                                {
                                match.WD.team1Score
                            } </Col>
                        )
                    }

                        {
                        match.WD.winner === 2 ? (
                            <Col xs={2}
                                className="gameScoreRightWin">
                                {
                                match.WD.team2Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreRight">
                                {
                                match.WD.team2Score
                            } </Col>
                        )
                    }

                        <Col xs={4}>
                            <div className="playerNameRight">
                                {
                                match.WD.team2Player1
                            }</div>
                            <div className="playerNameRight">
                                {
                                match.WD.team2Player2
                            }</div>
                        </Col>
                    </Row>
                        </>}

                        {match.endTime==='W'?
                        <>
                        <Row>
                        <Col className="gameHeader">
                            <hr style={
                                {color: "#ef612d"}
                            }></hr>
                            MEN'S DOUBLES
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Row className="playerNameLeft">
                                {
                                match.MD.team1Player1
                            }</Row>
                            <Row className="playerNameLeft">
                                {
                                match.MD.team1Player2
                            }</Row>
                        </Col>
                        {
                        match.MD.winner === 1 ? (
                            <Col xs={2}
                                className="gameScoreLeftWin">
                                {
                                match.MD.team1Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreLeft">
                                {
                                match.MD.team1Score
                            } </Col>
                        )
                    }

                        {
                        match.MD.winner === 2 ? (
                            <Col xs={2}
                                className="gameScoreRightWin">
                                {
                                match.MD.team2Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreRight">
                                {
                                match.MD.team2Score
                            } </Col>
                        )
                    }
                        <Col xs={4}>
                            <div className="playerNameRight">
                                {
                                match.MD.team2Player1
                            }</div>
                            <div className="playerNameRight">
                                {
                                match.MD.team2Player2
                            }</div>
                        </Col>
                    </Row>
                        </> 
                        :
                        <>
                        <Row>
                        <Col className="gameHeader">
                            <hr style={
                                {color: "#ef612d"}
                            }></hr>
                            WOMEN'S DOUBLES
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Row xs={12}
                                className="playerNameLeft">
                                {
                                match.WD.team1Player1
                            } </Row>
                            <Row xs={12}
                                className="playerNameLeft">
                                {
                                match.WD.team1Player2
                            } </Row>
                        </Col>
                        {
                        match.WD.winner === 1 ? (
                            <Col xs={2}
                                className="gameScoreLeftWin">
                                {
                                match.WD.team1Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreLeft">
                                {
                                match.WD.team1Score
                            } </Col>
                        )
                    }

                        {
                        match.WD.winner === 2 ? (
                            <Col xs={2}
                                className="gameScoreRightWin">
                                {
                                match.WD.team2Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreRight">
                                {
                                match.WD.team2Score
                            } </Col>
                        )
                    }

                        <Col xs={4}>
                            <div className="playerNameRight">
                                {
                                match.WD.team2Player1
                            }</div>
                            <div className="playerNameRight">
                                {
                                match.WD.team2Player2
                            }</div>
                        </Col>
                    </Row>
                        </>}
                    
                    
                    

                    <Row>
                        <Col className="gameHeader">
                            <hr style={
                                {color: "#ef612d"}
                            }></hr>
                            MIXED DOUBLES
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Row className="playerNameLeft">
                                {
                                match.MX1.team1Player1
                            }</Row>
                            <Row className="playerNameLeft">
                                {
                                match.MX1.team1Player2
                            }</Row>
                        </Col>
                        {
                        match.MX1.winner === 1 ? (
                            <Col xs={2}
                                className="gameScoreLeftWin">
                                {
                                match.MX1.team1Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreLeft">
                                {
                                match.MX1.team1Score
                            } </Col>
                        )
                    }

                        {
                        match.MX1.winner === 2 ? (
                            <Col xs={2}
                                className="gameScoreRightWin">
                                {
                                match.MX1.team2Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreRight">
                                {
                                match.MX1.team2Score
                            } </Col>
                        )
                    }
                        <Col xs={4}>
                            <div className="playerNameRight">
                                {
                                match.MX1.team2Player1
                            }</div>
                            <div className="playerNameRight">
                                {
                                match.MX1.team2Player2
                            }</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="gameHeader">
                            <hr style={
                                {color: "#ef612d"}
                            }></hr>
                            MIXED DOUBLES
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Row className="playerNameLeft">
                                {
                                match.MX2.team1Player1
                            }</Row>
                            <Row className="playerNameLeft">
                                {
                                match.MX2.team1Player2
                            }</Row>
                        </Col>
                        {
                        match.MX2.winner === 1 ? (
                            <Col xs={2}
                                className="gameScoreLeftWin">
                                {
                                match.MX2.team1Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreLeft">
                                {
                                match.MX2.team1Score
                            } </Col>
                        )
                    }

                        {
                        match.MX2.winner === 2 ? (
                            <Col xs={2}
                                className="gameScoreRightWin">
                                {
                                match.MX2.team2Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreRight">
                                {
                                match.MX2.team2Score
                            } </Col>
                        )
                    }
                        <Col xs={4}>
                            <div className="playerNameRight">
                                {
                                match.MX2.team2Player1
                            }</div>
                            <div className="playerNameRight">
                                {
                                match.MX2.team2Player2
                            }</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="gameHeader">
                            <hr style={
                                {color: "#ef612d"}
                            }></hr>
                            DREAMBREAKER
                            <TbTrademark/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}></Col>
                        {
                        match.DB.winner === 1 ? (
                            <Col xs={2}
                                className="gameScoreLeftWin">
                                {
                                match.DB.team1Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreLeft">
                                {
                                match.DB.team1Score
                            } </Col>
                        )
                    }

                        {
                        match.DB.winner === 2 ? (
                            <Col xs={2}
                                className="gameScoreRightWin">
                                {
                                match.DB.team2Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreRight">
                                {
                                match.DB.team2Score
                            } </Col>
                        )
                    }
                        <Col xs={4}></Col>
                    </Row>
                </MDBCollapse>
            </Container>
        </div>
        <hr style={
            {
                color: "#1b3448",
                height: "2px",
                borderWidth: "2",
                backgroundColor: "black",
                paddingTop: "0",
                margin: "0"
            }
        }></hr>
    </> : <></>);
};
