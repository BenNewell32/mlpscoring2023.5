import {useState} from "react";
import {useEffect} from "react";
import {Live} from "./Live";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {SeasonFinalsLive} from "./SeasonFinalsLive";

import {db} from "../firebase-config";
import {
    collection,
    where,
    query,
    onSnapshot,
    getDocs
} from "firebase/firestore";

export const SeasonFinalsChallenger = (props) => {
    const division = 'Challenger'
    const {location} = props;
    // console.log(division)
    const dbname = 'mlpLiveMatches' + division  ;
    const listMatches = collection(db, dbname);
    const [matches, setMatches] = useState([]);

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
                                    Challenger Season Finals
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
                                    <SeasonFinalsLive match={match}
                                        live={false}/> {/* {JSON.stringify(match)} */} </>
                            ))
                        } </div>
             </>       
            ) : ("")
        } 
        </div>
        </>
    );
};
