import { useState } from "react";
import { useEffect } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { db } from "../firebase-config";
import { collection, where, query, getDocs } from "firebase/firestore";

import Table from "react-bootstrap/Table";
import { recalculateStandings } from "./standings.js";

export const StatsTeamBen = (props) => {
  const { division, location, round } = props;

  const listTeams = collection(db, "mlpStandingsTeam");
  const [teams, setTeams] = useState([]);
  const [mlpTeams, setmlpTeams] = useState([]);

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
      "QUARTERFINALS 1",
      "QUARTERFINALS 2",
      "QUARTERFINALS 3",
      "QUARTERFINALS 4",
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

  useEffect(() => {
    (async () => {
      const listMatches = query(
        collection(db, "mlpStandingsTeam"),
        where("division", "==", division),
        where("event", "==", location)
      );

      const listTeams = query(
        collection(db, "mlpteams"),
        where("divisionID", "==", division),
        where("eventID", "==", location)
      );

      const querySnapshot = await getDocs(listMatches);
      let teamsList = [];
      querySnapshot.forEach((doc) => {
        teamsList.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setTeams(teamsList);

      const queryTeamsSnapshot = await getDocs(listTeams);
      let mlpTeamsList = [];
      queryTeamsSnapshot.forEach((doc) => {
        mlpTeamsList.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setmlpTeams(mlpTeamsList);
      // console.log(mlpTeams)

      // console.log(teamsList);
      for (let i = 0; i < mlpTeamsList.length; i++) {
        // console.log(mlpTeamsList[i].teamName)
        for (let r = 0; r < teamsList[0].teamRank.length; r++) {
          // console.log(teamsList[0].teamRank[r].team)
          if (mlpTeamsList[i].teamName === teamsList[0].teamRank[r].team) {
            // console.log(teamsList[0].teamRank[r].team)
            // console.log(mlpTeamsList[i].teamName)
            teamsList[0].teamRank[r]["teamDUPR"] = mlpTeamsList[i].teamDUPR;
            // console.log(teamsList[0].teamRank[r].teamDUPR)
            let logo1 = "5s";
            switch (mlpTeamsList[i].teamName) {
              case "ATX Pickleballers":
                logo1 = "atx";
                break;
              case "Las Vegas Night Owls":
                logo1 = "lv";
                break;
              case "California BLQK Bears":
                logo1 = "blqk";
                break;
              case "Florida Smash":
                logo1 = "smash";
                break;
              case "LA Mad Drops":
                logo1 = "maddrops";
                break;
              case "Milwaukee Mashers":
                logo1 = "mashers";
                break;
              case "New Jersey 5s":
                logo1 = "5s";
                break;
              case "Frisco Clean Cause":
                logo1 = "clean";
                break;
              case "Frisco Pandas":
                logo1 = "clean";
                break;
              case "NY Hustlers":
                logo1 = "hustlers";
                break;
              case "Seattle Pioneers":
                logo1 = "pioneers";
                break;
              case "Socal Hard Eights":
                logo1 = "eights";
                break;
              case "STL Shock":
                logo1 = "shock";
                break;
              case "AZ Drive":
                logo1 = "drive";
                break;
              case "ATL Bouncers":
                logo1 = "bouncers";
                break;
              case "Bay Area Breakers":
                logo1 = "breakers";
                break;
              case "Brooklyn Aces":
                logo1 = "aces";
                break;
              case "Chicago Slice":
                logo1 = "slice";
                break;
              case "Columbus Sliders":
                logo1 = "columbus";
                break;
              case "D.C. Pickleball Team":
                logo1 = "dc";
                break;
              case "Dallas Pickleball Club":
                logo1 = "dallas";
                break;
              case "Miami Pickleball Club":
                logo1 = "miami";
                break;
              case "Orlando Squeeze":
                logo1 = "orlando";
                break;
              case "Texas Ranchers":
                logo1 = "ranchers";
                break;
              case "Utah Black Diamonds":
                logo1 = "diamonds";
                break;
              default:
              // code block
            }
            teamsList[0].teamRank[r]["logo"] = logo1;
          }
        }
      }
      // console.log(teamsList[0].teamRank[i].team);
      // setTeams(teamsList);

      for (let i = 0; i < teamsList[0].teamRank.length; i++) {
        // console.log(teamsList[0].teamRank[i].team);
        if (teamsList[0].teamRank[i].team === null) {
          teamsList[0].teamRank.splice(i, 1);
        }
        if (teamsList[0].teamRank[i].team === "") {
          teamsList[0].teamRank.splice(i, 1);
        }
        if (teamsList[0].teamRank[i].team === " ") {
          teamsList[0].teamRank.splice(i, 1);
        }
        if (teamsList[0].teamRank[i].team === "BYE") {
          teamsList[0].teamRank.splice(i, 1);
        }
        if (teamsList[0].teamRank[i].team === "-") {
          teamsList[0].teamRank.splice(i, 1);
        }
      }

      teamsList[0].teamRank.sort((a, b) => {
        return Math.floor(
          (a.pointsFor / (a.pointsAgainst + a.pointsFor)) * 100
        ) < Math.floor((b.pointsFor / (b.pointsAgainst + b.pointsFor)) * 100)
          ? 1
          : -1;
      });
      console.log(teamsList[0]);

      teamsList[0].teamRank.forEach((team, index) => {
        // console.log(round)
        // if (team.roundID===round){
        //     console.log('adding team')
        // }else{
        //     teamsList[0].teamRank.splice(index, 1)
        // }
      });
      setTeams(teamsList);
      console.log(teamsList);
    })();
  }, []);

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
    <div
      style={{
        paddingBottom: "5px",
        paddingTop: "5px",
        zoom: "100%",
        backgroundColor: "white",
      }}
      className="d-flex justify-content-around"
    >
      <Table responsive>
        <thead>
          <tr
            style={{
              fontSize: "14px",
              fontFamily: "SofiaCondensed",
            }}
          >
            <th style={{ width: "12vw" }}>Rank</th>
            <th style={{ width: "20vw" }}>
              Team Name
              <br></br>(group)
            </th>
            <th style={{ width: "12vw" }}>
              Team
              <br></br>DUPR
            </th>
            <th style={{ width: "12vw" }}>Matches Won</th>
            <th style={{ width: "12vw" }}>Matches Lost</th>
            <th style={{ width: "12vw" }}>Matches Win %</th>
            <th style={{ width: "12vw" }}>Games Won</th>
            <th style={{ width: "12vw" }}>Games Lost</th>
            <th style={{ width: "12vw" }}>Games Won %</th>
            <th style={{ width: "12vw" }}>Points Won</th>
            <th style={{ width: "12vw" }}>Points Lost</th>
            <th style={{ width: "12vw" }}>Point Won %</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {teams.map((team) =>
            team.teamRank.map((team, index) => (
              <tr style={{ fontSize: "11px" }}>
                <td
                  style={{
                    backgroundColor: "#f0612e",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  {index + 1}{" "}
                </td>
                <td
                  style={{
                    fontFamily: "Kanit",
                    boxShadow: "3px 0 5px -2px #888",
                  }}
                >
                  <Row>
                    <Col>
                      <Row>
                        <Col style={{ fontSize: "14px" }} id={team.team}>
                          {team.team}
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          style={{
                            color: "#ef612d",
                            fontSize: "12px",
                          }}
                        >
                          {team.roundID}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                  id={team.teamDUPR}
                >
                  {team.teamDUPR}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {team.matchesFor}{" "}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {team.matchesAgainst}{" "}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {Math.floor(
                    (team.matchesFor /
                      (team.matchesAgainst + team.matchesFor)) *
                      100
                  )}
                  %
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {team.gamesFor}{" "}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {team.gamesAgainst}{" "}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {Math.floor(
                    (team.gamesFor / (team.gamesAgainst + team.gamesFor)) * 100
                  )}
                  %
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {team.pointsFor}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {team.pointsAgainst}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {Math.floor(
                    (team.pointsFor / (team.pointsAgainst + team.pointsFor)) *
                      100
                  )}
                  %
                </td>
              </tr>
            ))
          )}{" "}
        </tbody>
      </Table>
    </div>
  );
};
