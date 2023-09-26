import {useState} from "react";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {db} from "../firebase-config";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import {TeamList} from "./TeamList.js";
import {RoundList} from "./RoundList.js";
import {DivisionList} from "./DivisionList.js";

export const CreateMatch = (props) => {
    const {court, event} = props;
    const [newMatchDate, setNewMatchDate] = useState("");
    const [newMatchDivisionID, setNewMatchDivisionID] = useState("");
    const [newMatchRoundID, setNewMatchRoundID] = useState("");
    const [newMatchStartTime, setNewMatchStartTime] = useState("");
    const [newMatchTeam1, setNewMatchTeam1] = useState("");
    const [newMatchTeam2, setNewMatchTeam2] = useState("");

    const matchesRef = collection(db, "mlpmatches");

    const handleSubmit = async (e) => {
        let logo1 = "";
        let logo2 = "";

        switch (newMatchTeam1) {
            case "ATX Pickleballers": logo1 = "atx";
                break;
            case "Las Vegas Night Owls": logo1 = "lv";
                break;
            case "California BLQK Bears": logo1 = "blqk";
                break;
            case "Florida Smash": logo1 = "smash";
                break;
            case "LA Mad Drops": logo1 = "maddrops";
                break;
            case "Milwaukee Mashers": logo1 = "mashers";
                break;
            case "New Jersey 5s": logo1 = "5s";
                break;
            case "Frisco Clean Cause": logo1 = "clean";
                break;
            case "Frisco Pandas": logo1 = "clean";
                break;
            case "NY Hustlers": logo1 = "hustlers";
                break;
            case "Seattle Pioneers": logo1 = "pioneers";
                break;
            case "Hard Eights": logo1 = "eights";
                break;
            case "STL Shock": logo1 = "shock";
                break;
            case "AZ Drive": logo1 = "drive";
                break;
            case "ATL Bouncers": logo1 = "bouncers";
                break;
            case "Bay Area Breakers": logo1 = "breakers";
                break;
            case "Brooklyn Aces": logo1 = "aces";
                break;
            case "Chicago Slice": logo1 = "slice";
                break;
            case "Columbus P.C.": logo1 = "columbus";
                break;
            case "D.C. Pickleball Team": logo1 = "dc";
                break;
            case "Dallas Pickleball Club": logo1 = "dallas";
                break;
            case "Miami Pickleball Club": logo1 = "miami";
                break;
            case "Orlando Squeeze": logo1 = "orlando";
                break;
            case "Texas Ranchers": logo1 = "ranchers";
                break;
            case "Utah Black Diamonds": logo1 = "diamonds";
                break;
            default:
                // code block
        }

        switch (newMatchTeam2) {
            case "ATX Pickleballers": logo2 = "atx";
                break;
            case "Las Vegas Night Owls": logo2 = "lv";
                break;
            case "Hard Eights": logo2 = "eights";
                break;
            case "California BLQK Bears": logo2 = "blqk";
                break;
            case "Florida Smash": logo2 = "smash";
                break;
            case "LA Mad Drops": logo2 = "maddrops";
                break;
            case "Milwaukee Mashers": logo2 = "mashers";
                break;
            case "New Jersey 5s": logo2 = "5s";
                break;
                case "Frisco Clean Cause": logo2 = "clean";
                break;
            case "Frisco Pandas": logo2 = "clean";
                break;
            case "NY Hustlers": logo2 = "hustlers";
                break;
            case "Seattle Pioneers": logo2 = "pioneers";
                break;
            case "Hard Eights": logo2 = "eights";
                break;
            case "STL Shock": logo2 = "shock";
                break;
            case "AZ Drive": logo2 = "drive";
                break;
            case "ATL Bouncers": logo2 = "bouncers";
                break;
            case "Bay Area Breakers": logo2 = "breakers";
                break;
            case "Brooklyn Aces": logo2 = "aces";
                break;
            case "Chicago Slice": logo2 = "slice";
                break;
            case "Columbus P.C.": logo2 = "columbus";
                break;
            case "D.C. Pickleball Team": logo2 = "dc";
                break;
            case "Dallas Pickleball Club": logo2 = "dallas";
                break;
            case "Miami Pickleball Club": logo2 = "miami";
                break;
            case "Orlando Squeeze": logo2 = "orlando";
                break;
            case "Texas Ranchers": logo2 = "ranchers";
                break;
            case "Utah Black Diamonds": logo2 = "diamonds";
                break;
            default:
                // code block
        }

        e.preventDefault();
        if (newMatchDate.trim() === "") 
            return;
        


        if (newMatchDivisionID.trim() === "") 
            return;
        


        if (newMatchRoundID.trim() === "") 
            return;
        


        if (newMatchStartTime.trim() === "") 
            return;
        


        if (newMatchTeam1.trim() === "") 
            return;
        


        if (newMatchTeam2.trim() === "") 
            return;
        

        if (newMatchRoundID==='QUARTERFINALS 1' || newMatchRoundID==='QUARTERFINALS 4'){
            await addDoc(matchesRef, {
                court: court,
                date: newMatchDate,
                divisionID: newMatchDivisionID,
                endTime: "",
                eventID: event,
                roundID: newMatchRoundID,
                startTime: newMatchStartTime,
                team1: newMatchTeam1,
                team1Logo: logo1,
                team1Score: 0,
                team2: 'BYE',
                team2Logo: logo1,
                team2Score: 0,
                winner: "",
                createdAt: serverTimestamp(),
                status: "",
                WD: {
                    team1Player1: "-",
                    team1Player2: "-",
                    team1Score: 0,
                    team2Player1: "BYE",
                    team2Player2: "BYE",
                    team2Score: 0,
                    winner: "-"
                },
                MD: {
                    team1Player1: "-",
                    team1Player2: "-",
                    team1Score: 0,
                    team2Player1: "BYE",
                    team2Player2: "BYE",
                    team2Score: 0,
                    winner: "-"
                },
                MX1: {
                    team1Player1: "-",
                    team1Player2: "-",
                    team1Score: 0,
                    team2Player1: "BYE",
                    team2Player2: "BYE",
                    team2Score: 0,
                    winner: "-"
                },
                MX2: {
                    team1Player1: "-",
                    team1Player2: "-",
                    team1Score: 0,
                    team2Player1: "BYE",
                    team2Player2: "BYE",
                    team2Score: 0,
                    winner: "-"
                },
                DB: {
                    team1Score: 0,
                    team2Score: 0,
                    winner: "-"
                },
                live: false
            });
        }else{
        await addDoc(matchesRef, {
            court: court,
            date: newMatchDate,
            divisionID: newMatchDivisionID,
            endTime: "",
            eventID: event,
            roundID: newMatchRoundID,
            startTime: newMatchStartTime,
            team1: newMatchTeam1,
            team1Logo: logo1,
            team1Score: 0,
            team2: newMatchTeam2,
            team2Logo: logo2,
            team2Score: 0,
            winner: "",
            createdAt: serverTimestamp(),
            status: "",
            WD: {
                team1Player1: "-",
                team1Player2: "-",
                team1Score: 0,
                team2Player1: "-",
                team2Player2: "-",
                team2Score: 0,
                winner: "-"
            },
            MD: {
                team1Player1: "-",
                team1Player2: "-",
                team1Score: 0,
                team2Player1: "-",
                team2Player2: "-",
                team2Score: 0,
                winner: "-"
            },
            MX1: {
                team1Player1: "-",
                team1Player2: "-",
                team1Score: 0,
                team2Player1: "-",
                team2Player2: "-",
                team2Score: 0,
                winner: "-"
            },
            MX2: {
                team1Player1: "-",
                team1Player2: "-",
                team1Score: 0,
                team2Player1: "-",
                team2Player2: "-",
                team2Score: 0,
                winner: "-"
            },
            DB: {
                team1Score: 0,
                team2Score: 0,
                winner: "-"
            },
            live: false
        });
        }
        alert("match created!");
        setNewMatchRoundID("");
        setNewMatchStartTime("");
        setNewMatchTeam1("");
        setNewMatchTeam2("");
    };
    return (
        <>
            <div style={
                    {
                        paddingBottom: "5px",
                        paddingTop: "5px"
                    }
                }
                className="d-flex justify-content-around">
                <Card className="bg-dark"
                    style={
                        {width: "400px"}
                }>
                    <Card.Body>
                        <Card.Subtitle className="d-flex justify-content-around"
                            style={
                                {
                                    fontSize: "1rem",
                                    color: "white"
                                }
                        }>
                            Create Match
                        </Card.Subtitle>

                        <div className="d-flex justify-content-around">
                            <form onSubmit={handleSubmit}
                                className="justify-content-around">
                                <Row className="justify-content-around">
                                    <Row>
                                        <Col>
                                            <h5 style={
                                                {color: "white"}
                                            }>Date:</h5>
                                        </Col>
                                        <Col>
                                            <input style={
                                                    {
                                                        border: "none",
                                                        borderRadius: "5px",
                                                        margin: 1,
                                                        width: "150px"
                                                    }
                                                }
                                                type="date"
                                                className="new-match-input"
                                                placeholder="Select Date:"
                                                onChange={
                                                    (e) => setNewMatchDate(e.target.value)
                                                }
                                                value={newMatchDate}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h5 style={
                                                {color: "white"}
                                            }>Time:</h5>
                                        </Col>
                                        <Col>
                                            <input style={
                                                    {
                                                        border: "none",
                                                        borderRadius: "5px",
                                                        margin: 1,
                                                        width: "150px"
                                                    }
                                                }
                                                type="time"
                                                className="new-match-input"
                                                placeholder="Select Start Time:"
                                                onChange={
                                                    (e) => setNewMatchStartTime(e.target.value)
                                                }
                                                value={newMatchStartTime}/>
                                        </Col>
                                    </Row>
                                    <DivisionList setValue={newMatchDivisionID}
                                        setFunction={setNewMatchDivisionID}/>
                                    <RoundList setValue={newMatchRoundID}
                                        setFunction={setNewMatchRoundID}/>
                                    <TeamList setValue={newMatchTeam1}
                                        setFunction={setNewMatchTeam1}
                                        event={event}/>
                                    <TeamList setValue={newMatchTeam2}
                                        setFunction={setNewMatchTeam2}
                                        event={event}/>
                                </Row>
                                <Row className="justify-content-around">
                                    <Button style={
                                            {
                                                border: "none",
                                                borderRadius: "5px",
                                                width: "80%"
                                            }
                                        }
                                        type="submit"
                                        className="send-button">
                                        Create
                                    </Button>
                                </Row>
                            </form>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};
