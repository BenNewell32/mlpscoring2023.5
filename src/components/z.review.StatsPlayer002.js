// import { useState } from "react";
// import { useEffect } from "react";

// import Table from "react-bootstrap/Table";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// export const StatsPlayer002 = (props) => {
//   const {division, round} = props;
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   let url = '';

//   if (division==='Premier'){
//     url = "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Player%20Standings%20-%20Premier%20Total'!A1:R?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
//   } else {
//     url = "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Player%20Standings%20-%20Challenger%20Total'!A1:R?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
//   }

//   useEffect(() => {
//     fetch(url)
//       .then(res => res.json())
//       .then(
//         (result) => {
//           result.values.shift();
//           setIsLoaded(true);
//           setItems(result);
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       )
//   }, [])

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <div style={
//           {
//             paddingBottom: "5px",
//             paddingTop: "5px",
//             backgroundColor: "white",
//             overflow: "auto"
//           }
//         }
//         className="d-flex justify-content-around">
//         <Table responsive>
//         <thead>
//                     <tr style={
//                         {
//                             fontSize: "14px",
//                             fontFamily: "SofiaCondensed"
//                         }
//                     }>
//                         <th style={
//                             {minWidth: "20px"}
//                         }>Rank</th>
//                         <th style={
//                             {minWidth: "200px"}
//                         }>Player Name
//                             <br></br>(Team)</th>
//                         <th style={
//                             {minWidth: "75px"}
//                         }>DUPR
//                             <br></br>DBLS</th>
//                         <th style={
//                             {minWidth: "75px"}
//                         }>Matches Won</th>
//                         <th style={
//                             {minWidth: "75px"}
//                         }>Matches Lost</th>
//                         <th style={
//                             {minWidth: "75px"}
//                         }>Games NET</th>

//                         <th style={
//                             {minWidth: "75px"}
//                         }>Points Won</th>
//                         <th style={
//                             {minWidth: "75px"}
//                         }>Points Lost</th>
//                         <th style={
//                             {minWidth: "75px"}
//                         }>Point Won %</th>
//                         <th style={
//                             {minWidth: "75px"}
//                         }>Adj +/- %</th>
//                     </tr>
//                 </thead>
//                 <tbody> {
//                     items.values.map((team, index) => (
//                         <tr style={
//                             {fontSize: "11px"}
//                         }>
//                             <td style={
//                                 {
//                                     backgroundColor: "#f0612e",
//                                     color: "white",
//                                     fontWeight: "bold",
//                                     fontSize: "14px"
//                                 }
//                             }>
//                                 {
//                                 team[0]
//                             } </td>
//                             <td style={
//                                 {
//                                     boxShadow: "3px 0 5px -2px #888"
//                                 }
//                             } >
//                                 <Row>
//                                     <Col>
//                                         <Row>
//                                             <Col style={
//                                 {
//                                     fontFamily: "Kanit",
//                                     fontSize: "14px",
//                                     color: "#0a2137"
//                                 }
//                             }
//                                                 id={
//                                                     team[1]
//                                             }>
//                                                 {
//                                                 team[1]
//                                             }</Col>
//                                         </Row>
//                                         <Row>
//                                             <Col style={
//                                 {
//                                     fontFamily: "Kanit",
//                                     fontSize: "12px",
//                                     color: "#ef612d"

//                                 }
//                             }>
//                                                 {
//                                                 team[3]
//                                             }</Col>
//                                         </Row>
//                                     </Col>
//                                 </Row>
//                             </td>

//                                   <td style={
//                                     {
//                                         fontFamily: "SofiaCondensed",
//                                         fontSize: "16px",
//                                         fontWeight: "bold"
//                                     }
//                                 }
//                                 id={
//                                     team[17]
//                             }>
//                                 {
//                                     team[17]
//                                   }</td>
//                                   <td style={
//                                     {
//                                         fontFamily: "SofiaCondensed",
//                                         fontSize: "16px",
//                                         fontWeight: "bold"
//                                     }
//                                 }
//                                 id={
//                                     team[4]
//                             }>
//                                 {
//                                     team[4]
//                                   }</td>
//                                   <td style={
//                                     {
//                                         fontFamily: "SofiaCondensed",
//                                         fontSize: "16px",
//                                         fontWeight: "bold"
//                                     }
//                                 }
//                                 id={
//                                     team[5]
//                             }>
//                                 {
//                                     team[5]
//                                   }</td>
//                                   {/* <td style={
//                                     {
//                                         fontFamily: "SofiaCondensed",
//                                         fontSize: "16px",
//                                         fontWeight: "bold"
//                                     }
//                                 }
//                                 id={
//                                     team[9]
//                             }>
//                                 {
//                                     team[9]
//                                   }</td> */}
//                                   <td style={
//                                     {
//                                         fontFamily: "SofiaCondensed",
//                                         fontSize: "16px",
//                                         fontWeight: "bold"
//                                     }
//                                 }
//                                 id={
//                                     team[10]
//                             }>
//                                 {
//                                     team[10]
//                                   }</td>
//                                   <td style={
//                                     {
//                                         fontFamily: "SofiaCondensed",
//                                         fontSize: "16px",
//                                         fontWeight: "bold"
//                                     }
//                                 }
//                                 id={
//                                     team[11]
//                             }>
//                                 {
//                                     team[11]
//                                   }</td>
//                                   <td style={
//                                     {
//                                         fontFamily: "SofiaCondensed",
//                                         fontSize: "16px",
//                                         fontWeight: "bold"
//                                     }
//                                 }
//                                 id={
//                                     team[12]
//                             }>
//                                 {
//                                     team[12]
//                                   }</td>
//                                                               <td style={
//                                     {
//                                         fontFamily: "SofiaCondensed",
//                                         fontSize: "16px",
//                                         fontWeight: "bold"
//                                     }
//                                 }
//                                 id={
//                                     team[15]
//                             }>
//                                 {
//                                     team[15]
//                                   }</td>
//                                                             <td style={
//                                     {
//                                         fontFamily: "SofiaCondensed",
//                                         fontSize: "16px",
//                                         fontWeight: "bold"
//                                     }
//                                 }
//                                 id={
//                                     team[16]
//                             }>
//                                 {
//                                     team[16]
//                                   }</td>

//                         </tr>

//                     ))
//                 } </tbody>
//         </Table>
//         {/* <div>
//           {JSON.stringify(items.values[0])}

//         </div> */}
//       </div>
//     );
//   }
// };
