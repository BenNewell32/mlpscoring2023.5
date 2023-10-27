import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import {MDBCollapse, MDBBtn} from "mdb-react-ui-kit";

import {Live} from "./Live";
import {TiArrowSortedDown} from "react-icons/ti";
import {TiArrowSortedUp} from "react-icons/ti";

import {VscCircleFilled} from "react-icons/vsc";
import {TbTrademark} from "react-icons/tb";

import {useState} from "react";
import {useEffect} from "react";


import {db} from "../firebase-config";
import {
    collection,
    where,
    query,
    doc,
    onSnapshot,
    getDocs
} from "firebase/firestore";

export const LiveMatchLayout = (props) => {

    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

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
    const [matchLive, setMatch] = useState([]);


    useEffect(() => {
        const unsub = onSnapshot(doc(db, "mlpmatches", match), (doc) => { // console.log("Current data: ", doc.data());
            setMatch({
                ...doc.data(),
                id: doc.id
            })
        });
        return() => unsub();

    }, []);

    return(matchLive.court ? <div style={{backgroundColor: "white"}}>
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
            
            key={
                matchLive.id
        }>

            <Container style={{paddingBottom: "15px"}} className="justify-content-md-center">
                <Row className="justify-content-md-center">
                    <Col style={
                            {
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "#ef612d",
                                fontSize: "14px",
                                backgroundColor: "#ebedf0",
                            }
                        }
                        className="font-sofia">
                        {weekday[new Date().getDay()].toUpperCase()}
                     </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col style={
                            {
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "#1b3448",
                                fontSize: "14px",
                                backgroundColor: "#ebedf0",
                                // borderColor: "red",
                                // borderWidth: "2px",
                                // borderStyle:"solid"
                            }
                        }
                        className="font-kanit">
                        {
                        matchLive.court.toUpperCase()
                    }&nbsp; {
                        live === true ? "" : <VscCircleFilled/>
                    }
                        &nbsp; {
                        live === true ? <Live/>: matchLive.startTime.split(":")[0] % 12 || 12
                    }
                        {
                        live === true ? "" : ":" + matchLive.startTime.split(":")[1]
                    }
                        {
                        live === true ? "" : matchLive.startTime.split(":")[0] < 12 ? " AM CT" : " PM CT"
                    } </Col>
                </Row>

                <Row style={{paddingTop:"15px"}} className="justify-content-md-center">
                    <Col xs={4}>
                        <Row className="d-flex justify-content-center align-items-center text-center" width="20px">
                            <Image style={
                                    {width: "80px"}
                                }
                                src={
                                    require("./png" + matchLive.team1Logo + ".png")
                                }/>
                        </Row>
                        <Row style={
                                {textAlign: "center"}
                            }
                            xs={3}
                            className="d-flex justify-content-center align-items-center text-center teamName">
                            {
                            matchLive.team1
                        } </Row>
                    </Col>
                    <Col xs={4}
                        className="justify-content-center align-items-center text-center">
                        <Row>
                            <Col className="d-flex justify-content-center align-items-center text-center leftScore"
                                style={
                                    {
                                        borderStyle: "solid",
                                        borderColor: "white"
                                    }
                            }>
                                {
                                matchLive.team1Score
                            }
                                 </Col>
                            
                            <Col className="d-flex justify-content-center align-items-center text-center rightScore"
                                
                                style={
                                    {
                                        borderStyle: "solid",
                                        borderColor: "white"
                                    }
                            }>
                                {
                                matchLive.team2Score
                            }
                               </Col>
                        </Row>
                        <Row>
                            <MDBBtn size="sm"
                                id={
                                    matchLive.id
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
                                    require("./png" + matchLive.team2Logo + ".png")
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
                            matchLive.team2
                        } </Row>
                    </Col>
                </Row>
                <MDBCollapse show={showShow}>
                    {matchLive.endTime==='M'? 
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
                                matchLive.MD.team1Player1
                            }</Row>
                            <Row className="playerNameLeft">
                                {
                                matchLive.MD.team1Player2
                            }</Row>
                        </Col>
                        {
                        matchLive.MD.winner === 1 ? (
                            <Col xs={2}
                                className="gameScoreLeftWin">
                                {
                                matchLive.MD.team1Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreLeft">
                                {
                                matchLive.MD.team1Score
                            } </Col>
                        )
                    }

                        {
                        matchLive.MD.winner === 2 ? (
                            <Col xs={2}
                                className="gameScoreRightWin">
                                {
                                matchLive.MD.team2Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreRight">
                                {
                                matchLive.MD.team2Score
                            } </Col>
                        )
                    }
                        <Col xs={4}>
                            <div className="playerNameRight">
                                {
                                matchLive.MD.team2Player1
                            }</div>
                            <div className="playerNameRight">
                                {
                                matchLive.MD.team2Player2
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
                                matchLive.WD.team1Player1
                            } </Row>
                            <Row xs={12}
                                className="playerNameLeft">
                                {
                                matchLive.WD.team1Player2
                            } </Row>
                        </Col>
                        {
                        matchLive.WD.winner === 1 ? (
                            <Col xs={2}
                                className="gameScoreLeftWin">
                                {
                                matchLive.WD.team1Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreLeft">
                                {
                                matchLive.WD.team1Score
                            } </Col>
                        )
                    }

                        {
                        matchLive.WD.winner === 2 ? (
                            <Col xs={2}
                                className="gameScoreRightWin">
                                {
                                matchLive.WD.team2Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreRight">
                                {
                                matchLive.WD.team2Score
                            } </Col>
                        )
                    }

                        <Col xs={4}>
                            <div className="playerNameRight">
                                {
                                matchLive.WD.team2Player1
                            }</div>
                            <div className="playerNameRight">
                                {
                                matchLive.WD.team2Player2
                            }</div>
                        </Col>
                    </Row>
                    </>
                    }
                    {matchLive.endTime==='W'? 
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
                                matchLive.MD.team1Player1
                            }</Row>
                            <Row className="playerNameLeft">
                                {
                                matchLive.MD.team1Player2
                            }</Row>
                        </Col>
                        {
                        matchLive.MD.winner === 1 ? (
                            <Col xs={2}
                                className="gameScoreLeftWin">
                                {
                                matchLive.MD.team1Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreLeft">
                                {
                                matchLive.MD.team1Score
                            } </Col>
                        )
                    }

                        {
                        matchLive.MD.winner === 2 ? (
                            <Col xs={2}
                                className="gameScoreRightWin">
                                {
                                matchLive.MD.team2Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreRight">
                                {
                                matchLive.MD.team2Score
                            } </Col>
                        )
                    }
                        <Col xs={4}>
                            <div className="playerNameRight">
                                {
                                matchLive.MD.team2Player1
                            }</div>
                            <div className="playerNameRight">
                                {
                                matchLive.MD.team2Player2
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
                                matchLive.WD.team1Player1
                            } </Row>
                            <Row xs={12}
                                className="playerNameLeft">
                                {
                                matchLive.WD.team1Player2
                            } </Row>
                        </Col>
                        {
                        matchLive.WD.winner === 1 ? (
                            <Col xs={2}
                                className="gameScoreLeftWin">
                                {
                                matchLive.WD.team1Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreLeft">
                                {
                                matchLive.WD.team1Score
                            } </Col>
                        )
                    }

                        {
                        matchLive.WD.winner === 2 ? (
                            <Col xs={2}
                                className="gameScoreRightWin">
                                {
                                matchLive.WD.team2Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreRight">
                                {
                                matchLive.WD.team2Score
                            } </Col>
                        )
                    }

                        <Col xs={4}>
                            <div className="playerNameRight">
                                {
                                matchLive.WD.team2Player1
                            }</div>
                            <div className="playerNameRight">
                                {
                                matchLive.WD.team2Player2
                            }</div>
                        </Col>
                    </Row>
                    </>
                    }
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
                                matchLive.MX1.team1Player1
                            }</Row>
                            <Row className="playerNameLeft">
                                {
                                matchLive.MX1.team1Player2
                            }</Row>
                        </Col>
                        {
                        matchLive.MX1.winner === 1 ? (
                            <Col xs={2}
                                className="gameScoreLeftWin">
                                {
                                matchLive.MX1.team1Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreLeft">
                                {
                                matchLive.MX1.team1Score
                            } </Col>
                        )
                    }

                        {
                        matchLive.MX1.winner === 2 ? (
                            <Col xs={2}
                                className="gameScoreRightWin">
                                {
                                matchLive.MX1.team2Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreRight">
                                {
                                matchLive.MX1.team2Score
                            } </Col>
                        )
                    }
                        <Col xs={4}>
                            <div className="playerNameRight">
                                {
                                matchLive.MX1.team2Player1
                            }</div>
                            <div className="playerNameRight">
                                {
                                matchLive.MX1.team2Player2
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
                                matchLive.MX2.team1Player1
                            }</Row>
                            <Row className="playerNameLeft">
                                {
                                matchLive.MX2.team1Player2
                            }</Row>
                        </Col>
                        {
                        matchLive.MX2.winner === 1 ? (
                            <Col xs={2}
                                className="gameScoreLeftWin">
                                {
                                matchLive.MX2.team1Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreLeft">
                                {
                                matchLive.MX2.team1Score
                            } </Col>
                        )
                    }

                        {
                        matchLive.MX2.winner === 2 ? (
                            <Col xs={2}
                                className="gameScoreRightWin">
                                {
                                matchLive.MX2.team2Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreRight">
                                {
                                matchLive.MX2.team2Score
                            } </Col>
                        )
                    }
                        <Col xs={4}>
                            <div className="playerNameRight">
                                {
                                matchLive.MX2.team2Player1
                            }</div>
                            <div className="playerNameRight">
                                {
                                matchLive.MX2.team2Player2
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
                        matchLive.DB.winner === 1 ? (
                            <Col xs={2}
                                className="gameScoreLeftWin">
                                {
                                matchLive.DB.team1Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreLeft">
                                {
                                matchLive.DB.team1Score
                            } </Col>
                        )
                    }

                        {
                        matchLive.DB.winner === 2 ? (
                            <Col xs={2}
                                className="gameScoreRightWin">
                                {
                                matchLive.DB.team2Score
                            } </Col>
                        ) : (
                            <Col xs={2}
                                className="gameScoreRight">
                                {
                                matchLive.DB.team2Score
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
                padding: "0",
                margin: "0"
            }
        }></hr>
    </div> : <></>);
};
