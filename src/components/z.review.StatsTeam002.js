// import { useState } from "react";
// import { useEffect } from "react";

// import Table from "react-bootstrap/Table";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";

// export const StatsTeam002 = (props) => {
//   const {division, round} = props;
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   let url = '';

//   if (division==='Premier' && round==='ALL'){
//     url = "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Team%20Standings%20-%20Premier%20Total'!A1:P?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
//   }
//   if (division==='Premier' && round.includes('GROUP')){
//     url = "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Team%20Standings%20-%20Premier%20Group%20Stage'!A1:O?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
//   }

//   if (division==='Challenger' && round==='ALL'){
//     url = "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Team%20Standings%20-%20Challenger%20Total'!A1:P?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
//   }
//   if (division==='Challenger' && round.includes('GROUP')){
//     url = "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Team%20Standings%20-%20Challenger%20Group%20Stage'!A1:O?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
//   }

//   useEffect(() => {
//     fetch(url)
//       .then(res => res.json())
//       .then(
//         (result) => {
//           let order={values:[]};
//           result.values.shift();
//           console.log(round)
//           if (round==="GROUP A"){
//             for (let i = 0; i < result.values.length; i++) {
//                 if (result.values[i][2]==='A'){
//                     order.values.push(result.values[i])
//                     console.log(order)
//                 }
//               }
//         }
//         if (round==="GROUP B"){
//             for (let i = 0; i < result.values.length; i++) {
//                 if (result.values[i][2]==='B'){
//                     order.values.push(result.values[i])
//                     console.log(order)
//                 }
//               }
//         }
//         if (round==="GROUP C"){
//             for (let i = 0; i < result.values.length; i++) {
//                 if (result.values[i][2]==='C'){
//                     order.values.push(result.values[i])
//                     console.log(order)
//                 }
//               }
//         }
//         if (round==="ALL"){
//             for (let i = 0; i < result.values.length; i++) {
//                 order.values.push(result.values[i])
//               }
//         }
//           setIsLoaded(true);
//           setItems(order);
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
//             // zoom: "100%",
//             backgroundColor: "white",
//             overflow: "auto"
//           }
//         }
//         className="">
//         <Table>
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
//                         }>Team Name (group)</th>
//                         <th style={
//                             {minWidth: "75px"}
//                         }>Team
//                             <br></br>DUPR</th>
//                         <th style={
//                             {minWidth: "75px"}
//                         }>Matches Won</th>
//                         <th style={
//                             {minWidth: "75px"}
//                         }>Matches Lost</th>
//                         <th style={
//                             {minWidth: "75px"}
//                         }>Matches Won %</th>

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
//                         }>Point NET</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
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
//                                     fontFamily: "Kanit",
//                                     boxShadow: "3px 0 5px -2px #888"
//                                 }
//                             }>
//                                 <Row>
//                                     <Col>
//                                         <Row>
//                                             <Col xs={3}
//                                                 >
//                                                 {
//                                                 team[1]==='LOS ANGELES MAD DROPS'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngmaddrops.png")
//                                                 }/>:

//                                                 null
//                                             } {
//                                                 team[1]==='NEW YORK HUSTLERS'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pnghustlers.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='SEATTLE PIONEERS'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngpioneers.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='FLORIDA SMASH'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngsmash.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='NEW JERSEY 5S'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./png5s.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='MILWAUKEE MASHERS'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngmashers.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='CALIFORNIA BLQK BEARS'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngblqk.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='ST. LOUIS SHOCK'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngshock.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='SOCAL HARD EIGHTS'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngeights.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='ATX PICKLEBALLERS'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngatx.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='LAS VEGAS NIGHT OWLS'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pnglv.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='FRISCO CLEAN CAUSE'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngclean.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='BAY AREA BREAKERS'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngbreakers.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='UTAH BLACK DIAMONDS'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngdiamonds.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='CHICAGO SLICE'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngslice.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='ATLANTA BOUNCERS'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngbouncers.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='ORLANDO SQUEEZE'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngorlando.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='BROOKLYN ACES'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngaces.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='TEXAS RANCHERS'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngranchers.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='D.C. PICKLEBALL TEAM'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngdc.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='AZ DRIVE'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngdrive.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='DALLAS PICKLEBALL CLUB'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngdallas.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='MIAMI PICKLEBALL CLUB'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngmiami.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             {
//                                                 team[1]==='COLUMBUS P.C.'?
//                                                 <Image style={
//                                                     {width: "30px"}
//                                                 }
//                                                 src={
//                                                     require("./pngcolumbus.png")
//                                                 }/>:

//                                                 null
//                                             }
//                                             </Col>

//                                             <Col xs={9}
//                                             >
//                                                 <Row style={
//                                                     {
//                                                         color: '#0a2137',
//                                                         fontSize: '12px',
//                                                 }}>
//                                                 {
//                                                     team[1]
//                                                 }
//                                                 </Row>
//                                                 <Row style={
//                                                     {
//                                                         color: '#ef612d',
//                                                         fontSize: '12px',
//                                                 }}>
//                                                     {round.includes('GROUP')?
//                                                     'GROUP '+team[2]: ''}
//                                                 </Row>
//                                             </Col>
//                                         </Row>
//                                     </Col>
//                                 </Row>
//                             </td>
//                             <td style={
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
//                                   <td style={
//                                     {
//                                         fontFamily: "SofiaCondensed",
//                                         fontSize: "16px",
//                                         fontWeight: "bold"
//                                     }
//                                 }
//                                 id={
//                                     team[3]
//                             }>
//                                 {
//                                     team[3]
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
//                                   <td style={
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
//                                   }</td>
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
//                                     team[13]
//                             }>
//                                 {
//                                     team[13]
//                                   }</td>
//                         </tr>

//                     ))
//                 } </tbody>
//         </Table>
//         {/* <div>
//           {JSON.stringify(items.values)}

//         </div> */}
//       </div>
//     );
//   }
// };
