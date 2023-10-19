import { useState } from "react";
import { useEffect } from "react";

import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { db } from "../firebase-config";
import { collection, where, query, getDocs } from "firebase/firestore";

export const StatsPlayer002Fire = (props) => {
  const { division } = props;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      let listMatches = "";

      if (division === "Premier") {
        listMatches = query(collection(db, "002PremierPlayerTotalS22023"));
      }
      if (division === "Challenger") {
        listMatches = query(collection(db, "002ChallengerPlayerTotalS22023"));
      }

      const querySnapshot = await getDocs(listMatches);
      console.log("ran");
      let matches = [];
      let list = [];
      let order = { values: [] };
      querySnapshot.forEach((doc) => {
        matches.push({
          ...doc.data(),
        });
      });
      order = JSON.parse(matches[0].result);

      // list.values.shift()
      // order.values.shift()

      // if (round==="GROUP A"){
      //     order.values.push(list.values[0])

      //     for (let i = 0; i < list.values.length; i++) {
      //         if (list.values[i][2]==='A'){
      //             order.values.push(list.values[i])
      //             console.log(order)
      //         }
      //       }
      // }
      // if (round==="GROUP B"){
      //     order.values.push(list.values[0])

      //     for (let i = 0; i < list.values.length; i++) {
      //         if (list.values[i][2]==='B'){
      //             order.values.push(list.values[i])
      //             console.log(order)
      //         }
      //       }
      // }
      // if (round==="GROUP C"){
      //     order.values.push(list.values[0])

      //     for (let i = 0; i < list.values.length; i++) {
      //         if (list.values[i][2]==='C'){
      //             order.values.push(list.values[i])
      //             console.log(order)
      //         }
      //       }
      // }
      // if (round==="ALL"){
      //     for (let i = 0; i < list.values.length; i++) {
      //         order.values.push(list.values[i])
      //       }
      // }
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
                          {team[3].toUpperCase() === "LOS ANGELES MAD DROPS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngmaddrops.png")}
                            />
                          ) : null}{" "}
                          {team[3].toUpperCase() === "NEW YORK HUSTLERS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pnghustlers.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "SEATTLE PIONEERS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngpioneers.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "FLORIDA SMASH" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngsmash.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "NEW JERSEY 5S" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./png5s.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "MILWAUKEE MASHERS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngmashers.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "CALIFORNIA BLQK BEARS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngblqk.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "ST. LOUIS SHOCK" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngshock.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "SOCAL HARD EIGHTS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngeights.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "ATX PICKLEBALLERS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngatx.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "LAS VEGAS NIGHT OWLS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pnglv.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "FRISCO CLEAN CAUSE" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngclean.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "FRISCO PANDAS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngclean.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "BAY AREA BREAKERS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngbreakers.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "UTAH BLACK DIAMONDS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngdiamonds.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "CHICAGO SLICE" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngslice.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "ATLANTA BOUNCERS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngbouncers.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "ORLANDO SQUEEZE" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngorlando.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "BROOKLYN ACES" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngaces.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "TEXAS RANCHERS" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngranchers.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "D.C. PICKLEBALL TEAM" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngdc.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "AZ DRIVE" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngdrive.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() ===
                          "DALLAS PICKLEBALL CLUB" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngdallas.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "MIAMI PICKLEBALL CLUB" ? (
                            <Image
                              style={{ width: "30px" }}
                              src={require("./pngmiami.png")}
                            />
                          ) : null}
                          {team[3].toUpperCase() === "Sliders" ? (
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
                            {team[3]}
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </td>

                {/* <td style={
                                    {
                                        fontFamily: "SofiaCondensed",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        minWidth: "75px"
                                    }
                                }
                                id={
                                    team[1]
                            }>
                                {
                                    team[1]
                                  }</td> */}
                {/* <td style={
                                    {
                                        fontFamily: "SofiaCondensed",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        minWidth: "75px"
                                    }
                                }
                                id={
                                    team[2]
                            }>
                                {
                                    team[2]
                                  }</td> */}
                {/* <td style={
                                    {
                                        fontFamily: "SofiaCondensed",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        minWidth: "75px"
                                    }
                                }
                                id={
                                    team[3]
                            }>
                                {
                                    team[3]
                                  }</td> */}
                {/* <td style={
                                    {
                                        fontFamily: "SofiaCondensed",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        minWidth: "75px"
                                    }
                                }
                                id={
                                    team[4]
                            }>
                                {
                                    team[4]
                                  }</td> */}
                {/* <td style={
                                    {
                                        fontFamily: "SofiaCondensed",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        minWidth: "75px"
                                    }
                                }
                                id={
                                     team[5]
                            }>
                                {
                                     team[5]
                                  }</td>                                  */}
                {/* <td style={
                                    {
                                        fontFamily: "SofiaCondensed",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        minWidth: "75px"
                                    }
                                }
                                id={
                                    team[6]
                            }>
                                {
                                     team[6]
                                  }</td> */}
                {/* <td style={
                                    {
                                        fontFamily: "SofiaCondensed",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        minWidth: "75px"
                                    }
                                }
                                id={
                                    team[7]
                            }>
                                {
                                     team[7]
                                  }</td> */}
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[8]}
                >
                  {team[8]}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[9]}
                >
                  {team[9]}
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
                </td>
                {/* <td style={
                                    {
                                        fontFamily: "SofiaCondensed",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        minWidth: "75px"
                                    }
                                }
                                id={
                                    team[13]
                            }>
                                {
                                     team[13]
                                  }</td> */}
                {/* <td style={
                                    {
                                        fontFamily: "SofiaCondensed",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        minWidth: "75px"
                                    }
                                }
                                id={
                                    team[14]
                            }>
                                {
                                     team[14]
                                  }</td> */}

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
                {/* <td style={
                                    {
                                        fontFamily: "SofiaCondensed",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        minWidth: "75px"
                                    }
                                }
                                id={
                                    team[15]
                            }>
                                {
                                     team[15]
                                  }</td> */}
                {/* <td style={
                                    {
                                        fontFamily: "SofiaCondensed",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        minWidth: "75px"
                                    }
                                }
                                id={
                                    team[16]
                            }>
                                {
                                     team[16]
                                  }</td> */}
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
                  id={team[19]}
                >
                  {team[19]}
                </td>
                <td
                  style={{
                    fontFamily: "SofiaCondensed",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "75px",
                  }}
                  id={team[20]}
                >
                  {team[20]}
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
