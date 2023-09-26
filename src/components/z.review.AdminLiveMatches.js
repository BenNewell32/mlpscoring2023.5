// import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";

// import {
//   addDoc,
//   collection,
//   serverTimestamp,
//   onSnapshot,
//   query,
// } from "firebase/firestore";
// import { auth, db } from "../firebase-config";

// export const AdminLiveMatches = (props) => {
//   const { court } = props;

//   const [newDivisionName, setNewDivisionName] = useState("");
//   const liveMatchesRef = collection(db, "mlpmatches");
//   const [divisions, setDivisions] = useState("<td></td>");

//   useEffect(() => {
//     const queryLiveMatches = query(liveMatchesRef);
//     const unsubscribe = onSnapshot(queryLiveMatches, (snapshot) => {
//       let list = [];
//       snapshot.forEach((doc) => {
//         list.push({ ...doc.data(), id: doc.id });
//         // console.log(list);
//       });
//       setDivisions(
//         list.map((division) => (
//           <tr key={division.id}>
//             <td>{division.name}</td>
//             <td>
//               <Button
//                 onClick={() => {
//                   alert(division.id);
//                 }}
//                 variant="danger"
//                 size="sm"
//                 disabled
//               >
//                 Edit
//               </Button>
//             </td>
//           </tr>
//         ))
//       );

//       return () => unsubscribe();
//     });
//   }, []);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (newDivisionName === "") return;
//     await addDoc(liveMatchesRef, {
//       name: newDivisionName,
//       createdAt: serverTimestamp(),
//       createdBy: auth.currentUser.displayName,
//     });

//     setNewDivisionName("");
//   };
//   return (
//     <div className="chat-app">
//       <h1>{court}</h1>
//       <form onSubmit={handleSubmit} className="center-court-form">
//         <input
//           className="new-division-input"
//           placeholder="Enter Court Name"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Enter Date"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Enter Time"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Enter Round"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Enter Division"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Enter Team 1"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Enter Team 1 Score"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Enter Team 2"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Enter Team 2 Score"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Winner"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Live"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <Button size="sm" type="submit" className="send-button">
//           Submit
//         </Button>
//       </form>
//       <h5>Women's Doubles Score</h5>
//       <form onSubmit={handleSubmit} className="center-court-form">
//         <input
//           className="new-division-input"
//           placeholder="Team 1 Player1"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Team 1 Player2"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Team 1 Score"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Team 2 Player1"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Team 2 Player2"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Team 2 Score"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Winner"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Live"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <Button size="sm" type="submit" className="send-button">
//           Submit
//         </Button>
//       </form>
//       <h5>Men's Doubles Score</h5>
//       <form onSubmit={handleSubmit} className="center-court-form">
//         <input
//           className="new-division-input"
//           placeholder="Team 1 Player1"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Team 1 Player2"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Team 1 Score"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Team 2 Player1"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Team 2 Player2"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Team 2 Score"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Winner"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <input
//           className="new-division-input"
//           placeholder="Live"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <Button size="sm" type="submit" className="send-button">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };
