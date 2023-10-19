import { useState } from "react";
import { useEffect } from "react";

import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { db } from "../firebase-config";
import { collection, where, query, getDocs } from "firebase/firestore";

export const StatsTopTeam002Fire = (props) => {
  const { division, round, season} = props;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  console.log( division);
  console.log(round );
  console.log( season);

  useEffect(() => {
    (async () => {
      let listMatches = "";
      if (division === "Premier" && round === "ALL" && season === "S12023") {
        listMatches = query(collection(db, "002SeasonPremierTeamTotal"));
        console.log("002SeasonPremierTeamTotal")

      }

      if (division === "Challenger" && round === "ALL" && season === "S12023") {
        listMatches = query(collection(db, "002SeasonChallengerTeamTotal"));
        console.log("002SeasonChallengerTeamTotal")

      }

      if (division === "ALL" && round === "ALL" && season === "S12023") {
        listMatches = query(collection(db, "002SeasonAllTeamTotal"));
        console.log("002SeasonAllTeamTotal")
      }

      if (division === "Premier" && round === "ALL" && season === "S22023") {
        listMatches = query(collection(db, "002SeasonPremierTeamTotalS22023"));
        console.log("002SeasonPremierTeamTotalS22023")
      }

      if (division === "Challenger" && round === "ALL" && season === "S22023") {
        listMatches = query(collection(db, "002SeasonChallengerTeamTotalS22023"));
        console.log("002SeasonChallengerTeamTotalS22023")
      }

      if (division === "ALL" && round === "ALL" && season === "S22023") {
        listMatches = query(collection(db, "002SeasonAllTeamTotalS22023"));
        console.log("002SeasonAllTeamTotalS22023")
      }

      const querySnapshot = await getDocs(listMatches);
      let matches = [];
      let list = [];
      let order = { values: [] };
      querySnapshot.forEach((doc) => {
        matches.push({
          ...doc.data(),
        });
      });
      list = JSON.parse(matches[0].result);

      // list.values.shift()
      // order.values.shift()
      // console.log(round);

      if (round === "GROUP A") {
        order.values.push(list.values[0]);

        for (let i = 0; i < list.values.length; i++) {
          if (list.values[i][2] === "A") {
            order.values.push(list.values[i]);
            console.log(order);
          }
        }
      }
      if (round === "GROUP B") {
        order.values.push(list.values[0]);

        for (let i = 0; i < list.values.length; i++) {
          if (list.values[i][2] === "B") {
            order.values.push(list.values[i]);
            console.log(order);
          }
        }
      }
      if (round === "GROUP C") {
        order.values.push(list.values[0]);

        for (let i = 0; i < list.values.length; i++) {
          if (list.values[i][2] === "C") {
            order.values.push(list.values[i]);
            console.log(order);
          }
        }
      }
      if (round === "ALL") {
        for (let i = 0; i < list.values.length; i++) {
          order.values.push(list.values[i]);
        }
      }
      console.log(order);
      setItems(order);

      setIsLoaded(true);
    })();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div
        style={{
          paddingBottom: "5px",
          paddingTop: "5px",
          // zoom: "100%",
          backgroundColor: "white",
          overflow: "auto",
        }}
        className=""
      >
        <Table>
          {/* <thead>
                    <tr style={
                        {
                            fontSize: "14px",
                            fontFamily: "SofiaCondensed"
                        }
                    }>
                        <th style={
                            {minWidth: "20px"}
                        }>Rank</th>

                        <th style={
                            {minWidth: "200px"}
                        }>Team Name (group)</th>

                        <th style={
                            {minWidth: "75px"}
                        }>Team
                            <br></br>DUPR</th>

                        <th style={
                            {minWidth: "75px"}
                        }>Matches Won</th>

                        <th style={
                            {minWidth: "75px"}
                        }>Matches Lost</th>

                        <th style={
                            {minWidth: "75px"}
                        }>Games NET</th>

                        <th style={
                            {minWidth: "75px"}
                        }>Points Won</th>

                        <th style={
                            {minWidth: "75px"}
                        }>Points Lost</th>

                        <th style={
                            {minWidth: "75px"}
                        }>Points Won %</th>
                    </tr>
                </thead>   */}
          <tbody>
            {items.values.map((team, index) => (
              <tr style={{ fontSize: "11px" }}>
                <td
                  style={{
                    backgroundColor: "#f0612e",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "14px",
                    minWidth: "20px",
                  }}
                >
                  {team[0]}{" "}
                </td>
                <td
                  style={{
                    fontFamily: "Kanit",
                    boxShadow: "3px 0 5px -2px #888",
                    minWidth: "200px",
                  }}
                >
                  <Row>
                    <Col>
                      <Row>
                        <Col xs={3}>
                          {team[1] === "LOS ANGELES MAD DROPS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngmaddrops.png")}
                            />
                          ) : null}{" "}
                          {team[1] === "NEW YORK HUSTLERS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pnghustlers.png")}
                            />
                          ) : null}
                          {team[1] === "SEATTLE PIONEERS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngpioneers.png")}
                            />
                          ) : null}
                          {team[1] === "FLORIDA SMASH" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngsmash.png")}
                            />
                          ) : null}
                          {team[1] === "NEW JERSEY 5S" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./png5s.png")}
                            />
                          ) : null}
                          {team[1] === "MILWAUKEE MASHERS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngmashers.png")}
                            />
                          ) : null}
                          {team[1] === "CALIFORNIA BLQK BEARS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngblqk.png")}
                            />
                          ) : null}
                          {team[1] === "ST. LOUIS SHOCK" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngshock.png")}
                            />
                          ) : null}
                          {team[1] === "SOCAL HARD EIGHTS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngeights.png")}
                            />
                          ) : null}
                          {team[1] === "ATX PICKLEBALLERS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngatx.png")}
                            />
                          ) : null}
                          {team[1] === "LAS VEGAS NIGHT OWLS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pnglv.png")}
                            />
                          ) : null}
                          {team[1] === "FRISCO CLEAN CAUSE" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngclean.png")}
                            />
                          ) : null}
                          {team[1] === "FRISCO PANDAS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngclean.png")}
                            />
                          ) : null}
                          {team[1] === "BAY AREA BREAKERS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngbreakers.png")}
                            />
                          ) : null}
                          {team[1] === "UTAH BLACK DIAMONDS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngdiamonds.png")}
                            />
                          ) : null}
                          {team[1] === "CHICAGO SLICE" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngslice.png")}
                            />
                          ) : null}
                          {team[1] === "ATLANTA BOUNCERS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngbouncers.png")}
                            />
                          ) : null}
                          {team[1] === "ORLANDO SQUEEZE" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngorlando.png")}
                            />
                          ) : null}
                          {team[1] === "BROOKLYN ACES" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngaces.png")}
                            />
                          ) : null}
                          {team[1] === "TEXAS RANCHERS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngranchers.png")}
                            />
                          ) : null}
                          {team[1] === "D.C. PICKLEBALL TEAM" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngdc.png")}
                            />
                          ) : null}
                          {team[1] === "AZ DRIVE" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngdrive.png")}
                            />
                          ) : null}
                          {team[1] === "DALLAS PICKLEBALL CLUB" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngdallas.png")}
                            />
                          ) : null}
                          {team[1] === "MIAMI PICKLEBALL CLUB" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngmiami.png")}
                            />
                          ) : null}
                          {team[1] === "COLUMBUS P.C." ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngcolumbus.png")}
                            />
                          ) : null}
                        </Col>

                        <Col xs={9}>
                          <Row
                            style={{
                              color: "#0a2137",
                              fontSize: "12px",
                            }}
                          >
                            {team[1]}
                          </Row>
                          <Row
                            style={{
                              color: "#ef612d",
                              fontSize: "12px",
                            }}
                          >
                            {round.includes("GROUP") ? team[2] : ""}
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </td>
                {/* <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[4]}
                >
                  {team[4]}
                </td> */}
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[5]}
                >
                  {team[5]}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[6]}
                >
                  {team[6]}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[7]}
                >
                  {team[7]}
                </td>
               
{season === "S22023" && division === 'ALL'?
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    backgroundColor:"#b2ebf2",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[11]}
                >
                  {team[11]}
                </td>:
                <td
                style={{
                  fontFamily: "SofiaCondensed",
                  backgroundColor:"#b2ebf2",
                  fontSize: "16px",
                  fontWeight: "bold",
                  minWidth: "75px",
                }}
                id={team[8]}
              >
                {team[8]}
              </td>
  }
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[2]}
                >
                  {team[2]}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[3]}
                >
                  {team[3]}
                </td>
                {/* <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={round === "ALL" ? team[9] : team[8]}
                >
                  {round === "ALL" ? team[9] : team[8]}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[10]}
                >
                  {team[10]}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[11]}
                >
                  {team[11]}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[12]}
                >
                  {team[12]}
                </td> */}
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[13]}
                >
                  {team[13]}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[14]}
                >
                  {team[14]}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[15]}
                >
                  {team[15]}
                </td>
                {/* <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[16]}
                >
                  {team[16]}
                </td> */}
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[17]}
                >
                  {team[17]}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[18]}
                >
                  {team[18]}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[21]}
                >
                  {team[21]}
                </td>
              </tr>
            ))}{" "}
          </tbody>
        </Table>
        {/* <div>
          {JSON.stringify(items.values)}

        </div> */}
      </div>
    );
  }
};
