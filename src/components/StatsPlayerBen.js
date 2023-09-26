import {useState} from "react";
import {useEffect} from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {db} from "../firebase-config";
import {collection, where, query, getDocs} from "firebase/firestore";

import Table from "react-bootstrap/Table";

export const StatsPlayerBen = (props) => {
    const {division, location} = props;

    const [teams, setTeams] = useState([]);

    useEffect(() => {;
        (async () => {
            const listMatches = query(collection(db, "mlpStandingsPlayer"), where("division", "==", division), where("event", "==", location));

            const querySnapshot = await getDocs(listMatches);
            let teamsList = [];
            querySnapshot.forEach((doc) => {
                teamsList.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            setTeams(teamsList);

            for (let i = 0; i < teamsList[0].teamRank.length; i++) {
                console.log(teamsList[0].teamRank[i].name);
                if (teamsList[0].teamRank[i].name === null) {

                    teamsList[0].teamRank.splice(i, 1)
                }
                if (teamsList[0].teamRank[i].name === '') {

                    teamsList[0].teamRank.splice(i, 1)
                }
                if (teamsList[0].teamRank[i].name === ' ') {

                    teamsList[0].teamRank.splice(i, 1)
                }
                if (teamsList[0].teamRank[i].name === 'BYE') {
                    teamsList[0].teamRank.splice(i, 1)
                }
                if (teamsList[0].teamRank[i].name === '-') {
                    teamsList[0].teamRank.splice(i, 1)
                }
            }
            teamsList[0].teamRank.sort((a, b) => {
                return Math.floor((a.pointsFor / (a.pointsAgainst + a.pointsFor)) * 100) < Math.floor((b.pointsFor / (b.pointsAgainst + b.pointsFor)) * 100) ? 1 : -1;
            });
            // console.log(teamsList[0])

            setTeams(teamsList);

        })()
    }, [])


    // useEffect(() => {
    //     // recalculateStandings(division, location);
    //     const queryTeams = query(listTeams, where("division", "==", division), where("event", "==", location));

    //     const unsubscribe = onSnapshot(queryTeams, (snapshot) => {
    //         let teams = [];
    //         console.log(division);
    //         console.log(location);
    //         snapshot.forEach((doc) => {
    //             teams.push({
    //                 ...doc.data(),
    //                 id: doc.id
    //             });
    //         });
    //         setTeams(teams);
    //         teams[0].teamRank.sort((a, b) => {
    //             return Math.floor((a.pointsFor / (a.pointsAgainst + a.pointsFor)) * 100) < Math.floor((b.pointsFor / (b.pointsAgainst + b.pointsFor)) * 100) ? 1 : -1;
    //         });
    //     });
    //     return() => unsubscribe();
    // }, []);


    //     useEffect(()=>{
    // ;(async()=>{
    //     const listMatches = query(collection(db, "mlpmatches"),
    //     where("divisionID", "==", division),
    //     where("eventID", "==", location),
    //     where("live", "==", false),
    //     where("roundID", roundSelector, roundSelect));

    //     const querySnapshot = await getDocs(listMatches);
    //     let matches = [];
    //       querySnapshot.forEach((doc) => {
    //         matches.push({
    //             ...doc.data(),
    //             id: doc.id
    //         });
    //     });
    //     setMatches(matches);
    //     // console.log(matches);
    //     matches.sort((a, b) => {
    //       if (a.date === b.date) {
    //         // console.log(a.startTime.replace(":", ""));
    //         // console.log(b.startTime.replace(":", ""));
    //         return Number(a.startTime.replace(":", "")) <
    //           Number(b.startTime.replace(":", ""))
    //           ? -1
    //           : 1;
    //       } else {
    //         return a.date < b.date ? -1 : 1;
    //       }
    //     });
    // })()
    // },[])
    return (
        <div style={
                {
                    paddingBottom: "5px",
                    paddingTop: "5px",
                    zoom: "100%",
                    backgroundColor: "white"
                }
            }
            className="d-flex justify-content-around">
            <Table responsive>
                <thead>
                    <tr style={
                        {
                            fontSize: "14px",
                            fontFamily: "SofiaCondensed"
                        }
                    }>
                        <th style={
                            {width: "12vw"}
                        }>Rank</th>
                        <th style={
                            {width: "20vw"}
                        }>Player
                            <br></br>Name</th>
                        <th style={
                            {width: "12vw"}
                        }>DUPR
                            <br></br>DBLS</th>
                        {/* <th style={
                            {width: "12vw"}
                        }>Matches Won</th>
                        <th style={
                            {width: "12vw"}
                        }>Matches Lost</th>
                        <th style={
                            {width: "12vw"}
                        }>Match Win%</th> */}
                        <th style={
                            {width: "12vw"}
                        }>Games Won</th>
                        <th style={
                            {width: "12vw"}
                        }>Games Loss</th>
                        <th style={
                            {width: "12vw"}
                        }>Games Won %</th>
                        <th style={
                            {width: "12vw"}
                        }>Points Won</th>
                        <th style={
                            {width: "12vw"}
                        }>Points Lost</th>
                        <th style={
                            {width: "12vw"}
                        }>Point Won %</th>
                    </tr>
                </thead>
                <tbody> {
                    teams.map((team) => team.teamRank.map((team, index) => (
                        <tr style={
                            {fontSize: "11px"}
                        }>
                            <td style={
                                {
                                    backgroundColor: "#f0612e",
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "14px"
                                }
                            }>
                                {
                                index + 1
                            } </td>
                            <td style={
                                {
                                    fontSize: "14px",
                                    fontFamily: "Kanit",
                                    boxShadow: "3px 0 5px -2px #888"
                                }
                            }>
                                <Row>
                                    <Col>{
                                        team.name
                                    }</Col>
                                </Row>
                            </td>
                            <td style={
                                    {
                                        fontFamily: "SofiaCondensed",
                                        fontSize: "16px",
                                        fontWeight: "bold"
                                    }
                                }>DUPR</td>
                            {/* <td>team.matchesFor</td> */}
                            {/* <td>team.matchesAgainst</td> */}
                            {/* <td> {
                                Math.floor((team.matchesFor / (team.matchesAgainst + team.matchesFor)) * 100)
                            }
                                %
                            </td> */}
                            <td style={
                                    {
                                        fontFamily: "SofiaCondensed",
                                        fontSize: "16px",
                                        fontWeight: "bold"
                                    }
                                }>{team.gamesFor}</td>
                            <td style={
                                    {
                                        fontFamily: "SofiaCondensed",
                                        fontSize: "16px",
                                        fontWeight: "bold"
                                    }
                                }>{team.gamesAgainst}</td>
                            <td style={
                                    {
                                        fontFamily: "SofiaCondensed",
                                        fontSize: "16px",
                                        fontWeight: "bold"
                                    }
                                }> {
                                Math.floor((team.gamesFor / (team.gamesAgainst + team.gamesFor)) * 100)
                            }
                                %
                            </td>
                            <td style={
                                    {
                                        fontFamily: "SofiaCondensed",
                                        fontSize: "16px",
                                        fontWeight: "bold"
                                    }
                                }>{
                                team.pointsFor
                            }</td>
                            <td style={
                                    {
                                        fontFamily: "SofiaCondensed",
                                        fontSize: "16px",
                                        fontWeight: "bold"
                                    }
                                }>{
                                team.pointsAgainst
                            }</td>
                            <td style={
                                    {
                                        fontFamily: "SofiaCondensed",
                                        fontSize: "16px",
                                        fontWeight: "bold"
                                    }
                                }> {
                                Math.floor((team.pointsFor / (team.pointsAgainst + team.pointsFor)) * 100)
                            }
                                %
                            </td>
                        </tr>
                    )))
                } </tbody>
            </Table>
        </div>
    );
};
