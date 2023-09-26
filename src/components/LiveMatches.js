import {useState} from "react";
import {useEffect} from "react";
import {Live} from "./Live";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {LiveMatchLayout} from "./LiveMatchLayout";

import {db} from "../firebase-config";
import {
    collection,
    where,
    query,
    onSnapshot,
    getDocs
} from "firebase/firestore";

export const LiveMatches = (props) => {
    const {division, location} = props;
    // console.log(division)
    const dbname = 'mlpLiveMatches' + division;
    const listMatches = collection(db, dbname);
    const [matches, setMatches] = useState([]);

    // let roundSelect = "";
    // let roundSelector = "";

    // if (round === "GROUP A") {
    //     roundSelect = "GROUP A";
    // }
    // if (round === "GROUP B") {
    //     roundSelect = "GROUP B";
    // }
    // if (round === "GROUP C") {
    //     roundSelect = "GROUP C";
    // }
    // if (!round.includes("GROUP")) {
    //     roundSelect = [
    //         "QUARTERFINALS 1",
    //         "QUARTERFINALS 2",
    //         "QUARTERFINALS 3",
    //         "QUARTERFINALS 4",
    //         "SIMIFINALS 1",
    //         "SIMIFINALS 2",
    //         "FINALS",
    //     ];
    // }

    // if (round === "GROUP A") {
    //     roundSelector = "==";
    // }
    // if (round === "GROUP B") {
    //     roundSelector = "==";
    // }
    // if (round === "GROUP C") {
    //     roundSelector = "==";
    // }
    // if (!round.includes("GROUP")) {
    //     roundSelector = "in";
    // }

    // useEffect(() => {
    //     const queryMatches = query(listMatches, where("divisionID", "==", division), where("eventID", "==", location), where("live", "==", true), where("roundID", roundSelector, roundSelect));

    // const unsubscribe = onSnapshot(queryMatches, (snapshot) => {
    //     let matches = [];
    //     snapshot.forEach((doc) => {
    //         matches.push({
    //             ...doc.data(),
    //             id: doc.id
    //         });
    //     });
    //     setMatches(matches);
    //     matches.sort((a, b) => {
    //         if (a.date === b.date) {
    //             // console.log(a.startTime.replace(":", ""));
    //             // console.log(b.startTime.replace(":", ""));
    //             return Number(a.startTime.replace(":", "")) < Number(b.startTime.replace(":", "")) ? -1 : 1;
    //         } else {
    //             return a.date < b.date ? -1 : 1;
    //         }
    //     });
    // });
    // return() => unsubscribe();

    // }, []);


    useEffect(() => {

        const queryMatches = query(listMatches);

        const unsubscribe = onSnapshot(queryMatches, (snapshot) => {
            let matches = [];
            snapshot.forEach((doc) => {
                matches.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            setMatches(matches);
            // console.log(matches);
        });
        return() => unsubscribe();

    }, []);

    return (
        <>
        <div style={
                {
                    // paddingBottom: "5px",
                    //paddingTop: "5px",
                    zoom: "100%",
                    backgroundColor: "#0a2137"
                }
            }
            className=" justify-content-around">
            {

            matches.length > 0 ? ( 
                <>
                
                        <div> 
                        {
                            matches[0].matches.map((match,index) => (
                                // console.log(index),
                                index===0?
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
                                        {textAlign: "center"}
                                    }
                                    xs={8}>
                                    LIVE MATCHES
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
                            </Row>:
                                    // console.log('not live')
                                    <></>
                            ))
                        }
                            {
                            matches[0].matches.map((match) => (
                                <>
                                    <LiveMatchLayout match={match}
                                        live={true}/> {/* {JSON.stringify(match)} */} </>
                            ))
                        } </div>
             </>       
            ) : ("")
        } 
        </div>
        </>
    );
};
