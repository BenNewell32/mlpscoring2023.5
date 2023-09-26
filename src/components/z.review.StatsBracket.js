// import {useState} from "react";
// import {useEffect} from "react";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// // import { MatchLayout } from "./MatchLayout";

// import {db} from "../firebase-config";
// import {collection, where, query, getDocs} from "firebase/firestore";

// export const StatsBracket = (props) => {
//     const {division, location} = props;
//     const [teams, setTeams] = useState('TBD');
//     const [Q1T1, setQ1T1] = useState('TBD');
//     const [Q1T2, setQ1T2] = useState('TBD');
//     const [Q2T1, setQ2T1] = useState('TBD');
//     const [Q2T2, setQ2T2] = useState('TBD');
//     const [Q3T1, setQ3T1] = useState('TBD');
//     const [Q3T2, setQ3T2] = useState('TBD');
//     const [Q4T1, setQ4T1] = useState('TBD');
//     const [Q4T2, setQ4T2] = useState('TBD');
//     const [S1T1, setS1T1] = useState('TBD');
//     const [S1T2, setS1T2] = useState('TBD');
//     const [S2T1, setS2T1] = useState('TBD');
//     const [S2T2, setS2T2] = useState('TBD');
//     const [FT1, setFT1] = useState('TBD');
//     const [FT2, setFT2] = useState('TBD');

//     const [Q2T1score, setQ2T1score] = useState('');
//     const [Q2T2score, setQ2T2score] = useState('');
//     const [Q3T1score, setQ3T1score] = useState('');
//     const [Q3T2score, setQ3T2score] = useState('');
//     const [Q4T1score, setQ4T1score] = useState('');
//     const [Q4T2score, setQ4T2score] = useState('');
//     const [S1T1score, setS1T1score] = useState('');
//     const [S1T2score, setS1T2score] = useState('');
//     const [S2T1score, setS2T1score] = useState('');
//     const [S2T2score, setS2T2score] = useState('');
//     const [FT1score, setFT1score] = useState('');
//     const [FT2score, setFT2score] = useState('');

//     useEffect(() => {

//         let roundSelect = [
//             "QUARTERFINALS 1",
//             "QUARTERFINALS 2",
//             "QUARTERFINALS 3",
//             "QUARTERFINALS 4",
//             "SIMIFINALS 1",
//             "SIMIFINALS 2",
//             "FINALS",
//         ];
//         let roundSelector = "in";;
//         (async () => {
//             const listMatches = query(collection(db, "mlpmatches"), where("divisionID", "==", division), where("eventID", "==", location), where("roundID", roundSelector, roundSelect));

//             const querySnapshot = await getDocs(listMatches);
//             let teamsList = [];
//             querySnapshot.forEach((doc) => {
//                 teamsList.push({
//                     ...doc.data(),
//                     id: doc.id
//                 });
//             });
//             setTeams(teamsList);
//             teamsList.forEach((match) => {
//               if (match.roundID==='QUARTERFINALS 1'){
//                 setQ1T1(match.team1)
//                 setQ1T2(match.team2)
//               }
//               if (match.roundID==='QUARTERFINALS 2'){
//                 setQ2T1(match.team1)
//                 setQ2T2(match.team2)
//                 setQ2T1score(match.team1Score)
//                 setQ2T2score(match.team2Score)
//               }
//               if (match.roundID==='QUARTERFINALS 3'){
//                 setQ3T1(match.team1)
//                 setQ3T2(match.team2)
//                 setQ3T1score(match.team1Score)
//                 setQ3T2score(match.team2Score)
//               }
//               if (match.roundID==='QUARTERFINALS 4'){
//                 setQ4T1(match.team1)
//                 setQ4T2(match.team2)
//               }
//               if (match.roundID==='SIMIFINALS 1'){
//                 setS1T1(match.team1)
//                 setS1T2(match.team2)
//                 setS1T1score(match.team1Score)
//                 setS1T2score(match.team2Score)
//               }
//               if (match.roundID==='SIMIFINALS 2'){
//                 setS2T1(match.team1)
//                 setS2T2(match.team2)
//                 setS2T1score(match.team1Score)
//                 setS2T2score(match.team2Score)
//               }
//               if (match.roundID==='FINALS'){
//                 setFT1(match.team1)
//                 setFT2(match.team2)
//                 setFT1score(match.team1Score)
//                 setFT2score(match.team2Score)
//               }

//             })

//             setTeams(teamsList);

//         })()
//     }, [])
//     return (
//         <div style={{backgroundColor: "#fafafb", padding: 20, color: "#0a2137",
//       }}>
//             <style type="text/css">
//                 {`

// .bracket {

//   white-space: nowrap;
//   font-size: 0;
//   overflow: auto;
// }
// .bracket .round {
//   display: inline-block;
//   vertical-align: middle;
// }
// .bracket .round .winners > div {
//   display: inline-block;
//   vertical-align: middle;
// }
// .bracket .round .winners > div.matchups .matchup:last-child {
//   margin-bottom: 0 !important;
// }
// .bracket .round .winners > div.matchups .matchup .participants {
//   border-radius: 0.25rem;
//   // overflow: hidden;
// }
// .bracket .round .winners > div.matchups .matchup .participants .participant {
//   box-sizing: border-box;
//   color: #002b46;
//   border-left: 0.25rem solid #858585;
//   background: white;
//   width: 250px;
//   height: 50px;
//   box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);
// }
// .bracket .round .winners > div.matchups .matchup .participants .participant.winner {
//   color: #ef612d;
//   border-color: #002b46;
//   background-color: white;
// }
// .bracket .round .winners > div.matchups .matchup .participants .participant.loser {
//   color: #dc563f;
//   border-color: #dc563f;
// }
// .bracket .round .winners > div.matchups .matchup .participants .participant:not(:last-child) {
//   border-bottom: thin solid #f0f2f2;
// }
// .bracket .round .winners > div.matchups .matchup .participants .participant div {
//   padding: 5;
//   line-height: 3;
//   font-family: "Kanit"
// }
// .score{
//   padding-right: 20px;
//   color: #ef612d;
//   text-align: right;
//   font-size: 20px;
// }
// .seed{
//   background-color: #b2ebf2;
//   color: #0a2137;
//   text-align: center;
//   font-size: 16px;
//   height: 100%;

// }
// .seed2{
//   background-color: #ef612d;
//   color: white;
//   text-align: center;
//   font-size: 16px;
//   height: 100%;
// }
// .team{
//   padding-left: 20px;
//   text-align: left;
//   font-size: 16px;

// }
// .bye{
//   color: white;
// }
// .headerbracket{
//   font-size: 20px;
//   padding-bottom: 50px;
//   font-family: "Kanit";
//   text-align: center;
//   justify-content: center;
//   width: 900px;
//   height: 50px;
// }
// .headerCol{
//   border-color: #fafafb;
//   border-right-style: solid;
//   border-left-style: solid;
//   border-width: thick;
// }
// .bracket .round .winners > div.connector.filled .line, .bracket .round .winners > div.connector.filled.bottom .merger:after, .bracket .round .winners > div.connector.filled.top .merger:before {
//   border-color: white;
// }
// .bracket .round .winners > div.connector .line, .bracket .round .winners > div.connector .merger {
//   box-sizing: border-box;
//   width: 2rem;
//   display: inline-block;
//   vertical-align: top;
//   border-color: #ef612d;

// }
// .bracket .round .winners > div.connector .line {
//   border-bottom: 3px solid ;
//   height: 4rem;
//   border-color: #ef612d;

// }
// .bracket .round .winners > div.connector .merger {
//   position: relative;
//   height: 8rem;
// }
// .bracket .round .winners > div.connector .merger:before, .bracket .round .winners > div.connector .merger:after {
//   content: "";
//   display: block;
//   box-sizing: border-box;
//   height: 50%;
//   border: 0 solid;
//   border-color: #ef612d;
// }
// .bracket .round .winners > div.connector .merger:before {
//   border-right-width: 3px;
//   border-top-width: 3px;
// }
// .bracket .round .winners > div.connector .merger:after {
//   border-right-width: 3px;
//   border-bottom-width: 3px;
// }
// .bracket .round.quarterfinals .winners:not(:last-child) {
//   margin-bottom: 2rem;
// }
// .bracket .round.quarterfinals .winners .matchups .matchup:not(:last-child) {
//   margin-bottom: 2rem;
// }
// .bracket .round.semifinals .winners .matchups .matchup:not(:last-child) {
//   margin-bottom: 10rem;
// }
// .bracket .round.semifinals .winners .connector .merger {
//   height: 16rem;
// }
// .bracket .round.semifinals .winners .connector .line {
//   height: 8rem;
//   border-color: #ef612d;
// }
// .bracket .round.finals .winners .connector .merger {
//   height: 3rem;
// }
// .bracket .round.finals .winners .connector .line {
//   height: 1.5rem;
//   color: #ef612d;
// }
// .names{
//   fontFamily:
// }

// `} </style>
//             <div className="bracket d-flex justify-content-center">
//             <div className="bracket">
//             <Row style={{  backgroundColor: "#fafafb"}} className='headerbracket'>
//                 <Col style={{backgroundColor:'#b2ebf2'}} className='headerCol'>QUARTER FINALS</Col>
//                 <Col style={{backgroundColor:'#f57523'}} className='headerCol'>SEMI FINALS</Col>
//                 <Col style={{backgroundColor:'#f3bb2a'}} className='headerCol'>FINALS</Col>
//              </Row>
//                 <section className="round quarterfinals">

//                     <div className="winners">
//                         <div className="matchups">
//                             <div className="matchup">
//                                 <div className="participants">
//                                 <div className="participant">

//                                     <Row>
//                                       <Col className="seed2" xs={2}>#1</Col>
//                                       <Col className="team" xs={8}>{Q1T1}</Col>
//                                       <Col className="score" xs={2}></Col>
//                                     </Row>
//                                     </div>
//                                     <div className="participant ">
//                                     <Row>
//                                       <Col style={{color: '#ef612d'}} className="team" xs={8}>BYE</Col>
//                                       <Col className="score" xs={4}></Col>
//                                     </Row>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="matchup">
//                                 <div className="participants">
//                                     <div className="participant">
//                                     <Row>
//                                     <Col className="seed" xs={2}>#4</Col>
//                                       <Col className="team" xs={8}>{Q2T1}</Col>
//                                       <Col className="score" xs={2}>{Q2T1score}</Col>
//                                     </Row>
//                                     </div>
//                                     <div className="participant ">
//                                     <Row>
//                                     <Col className="seed" xs={2}>#5</Col>
//                                       <Col className="team" xs={8}>{Q2T2}</Col>
//                                       <Col className="score" xs={2}>{Q2T2score}</Col>
//                                     </Row>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="connector">
//                             <div className="merger"></div>
//                             <div className="line"></div>
//                         </div>
//                     </div>
//                     <div className="winners">
//                         <div className="matchups">
//                             <div className="matchup">
//                                 <div className="participants">
//                                 <div className="participant">
//                                     <Row>
//                                     <Col className="seed" xs={2}>#3</Col>
//                                       <Col className="team" xs={8}>{Q3T1}</Col>
//                                       <Col className="score" xs={2}>{Q3T1score}</Col>
//                                     </Row>
//                                     </div>
//                                     <div className="participant ">
//                                     <Row>
//                                     <Col className="seed" xs={2}>#6</Col>
//                                       <Col className="team" xs={8}>{Q3T2}</Col>
//                                       <Col className="score" xs={2}>{Q3T2score}</Col>
//                                     </Row>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="matchup">
//                                 <div className="participants">
//                                     <div className="participant">
//                                     <Row>
//                                       <Col style={{color: '#ef612d'}} className="team" xs={8}>BYE</Col>
//                                       <Col className="score" xs={4}></Col>
//                                     </Row>
//                                     </div>
//                                     <div className="participant ">
//                                     <Row>
//                                     <Col className="seed2" xs={2}>#2</Col>

//                                       <Col className="team" xs={8}>{Q4T1}</Col>
//                                       <Col className="score" xs={2}></Col>
//                                     </Row>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="connector">
//                             <div className="merger"></div>
//                             <div className="line"></div>
//                         </div>
//                     </div>
//                 </section>
//                 <section className="round semifinals">
//                     <div className="winners">
//                         <div className="matchups">
//                             <div className="matchup">
//                                 <div className="participants">
//                                 <div className="participant">
//                                     <Row>
//                                     <Col className="team" xs={8}>{S1T1}</Col>
//                                       <Col className="score" xs={4}>{S1T1score}</Col>
//                                     </Row>
//                                     </div>
//                                     <div className="participant ">
//                                     <Row>
//                                       <Col className="team" xs={8}>{S1T2}</Col>
//                                       <Col className="score" xs={4}>{S1T2score}</Col>
//                                     </Row>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="matchup">
//                             <div className="participants">
//                                 <div className="participant">
//                                     <Row>
//                                     <Col className="team" xs={8}>{S2T1}</Col>
//                                       <Col className="score" xs={4}>{S2T1score}</Col>
//                                     </Row>
//                                     </div>
//                                     <div className="participant ">
//                                     <Row>
//                                       <Col className="team" xs={8}>{S2T2}</Col>
//                                       <Col className="score" xs={4}>{S2T2score}</Col>
//                                     </Row>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="connector">
//                             <div className="merger"></div>
//                             <div className="line"></div>
//                         </div>
//                     </div>
//                 </section>
//                 <section className="round finals">
//                     <div className="winners">
//                         <div className="matchups">
//                             <div className="matchup">
//                             <div className="participants">
//                                 <div className="participant">
//                                     <Row>
//                                     <Col className="team" xs={8}>{FT1}</Col>
//                                       <Col className="score" xs={4}>{FT1score}</Col>
//                                     </Row>
//                                     </div>
//                                     <div className="participant ">
//                                     <Row>
//                                       <Col className="team" xs={8}>{FT2}</Col>
//                                       <Col className="score" xs={4}>{FT2score}</Col>
//                                     </Row>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//             </div>
//           </div>
//     );
// };
