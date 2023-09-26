import {useState} from "react";
import {useEffect} from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {ScheduledMatchLayout} from "./ScheduledMatchLayout";

import {db} from "../firebase-config";
import {collection, where, query, getDocs} from "firebase/firestore";

import {VscRefresh} from "react-icons/vsc";

export const ScheduledMatches = (props) => {
    const {division, location, round} = props;
    const [matches, setMatches] = useState([]);

    let roundSelect = "";
    let roundSelector = "";

    if (round === "GROUP A") {
        roundSelect = "GROUP A";
    }
    if (round === "GROUP B") {
        roundSelect = "GROUP B";
    }
    if (round === "GROUP C") {
        roundSelect = "GROUP C";
    }
    if (!round.includes("GROUP")) {
        roundSelect = [
            "QUARTERFINALS 2",
            "QUARTERFINALS 3",
            "SIMIFINALS 1",
            "SIMIFINALS 2",
            "FINALS",
        ];
    }

    if (round === "GROUP A") {
        roundSelector = "==";
    }
    if (round === "GROUP B") {
        roundSelector = "==";
    }
    if (round === "GROUP C") {
        roundSelector = "==";
    }
    if (!round.includes("GROUP")) {
        roundSelector = "in";
    }

    useEffect(() => {;
        (async () => {
            const listMatches = query(collection(db, "mlpmatches"), where("divisionID", "==", division), where("eventID", "==", location), where("live", "==", false), where("roundID", roundSelector, roundSelect));

            const querySnapshot = await getDocs(listMatches);
            let matches = [];
            querySnapshot.forEach((doc) => {
                matches.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            setMatches(matches);
            // console.log(matches);
            matches.sort((a, b) => {
                if (a.date === b.date) {
                    // console.log(a.startTime.replace(":", ""));
                    // console.log(b.startTime.replace(":", ""));
                    return Number(a.startTime.replace(":", "")) < Number(b.startTime.replace(":", "")) ? -1 : 1;
                } else {
                    return a.date < b.date ? -1 : 1;
                }
            });
        })()
    }, [])

    return (
        <div style={
            {
                paddingBottom: "5px",
                backgroundColor: "white"

            }
        }>
            <Row style={
                    {
                        alignContent: "center",
                        justifyContent: "center",
                        color: "white",
                        backgroundColor: "#0a2137",
                        height: "40px",
                        paddingTop: "10px"

                    }
                }
                className=" d-flex justify-content-md-center font-kanit">
                <Col style={
                    {margin: "0"}
                }>
                    <hr style={
                        {
                            height: "4px",
                            color: "#ef612d"
                        }
                    }/>
                </Col>
                <Col style={
                        {textAlign: "center",
                        paddingBottom: "20px",
                    }
                    }
                    xs={8}>
                    {division.toUpperCase()} {round} MATCHES
                </Col>
                <Col style={
                    {margin: "0"}
                }>
                    <hr style={
                        {
                            height: "4px",
                            color: "#ef612d"
                        }
                    }/>
                </Col>
            </Row>
            <div> {" "}
                <div>
                    <div> {
                        matches.map((match) => (
                            <ScheduledMatchLayout match={match}
                                live={false}/>
                        ))
                    } </div>
                </div>
            </div>
        </div>
    );
};
