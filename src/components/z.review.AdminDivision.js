// import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Table from "react-bootstrap/Table";

// import {
//   addDoc,
//   collection,
//   serverTimestamp,
//   onSnapshot,
//   query,
//   where,
// } from "firebase/firestore";
// import { auth, db } from "../firebase-config";

// export const AdminDivision = (props) => {
//   // const { room } = props;

//   const [newDivisionName, setNewDivisionName] = useState("");
//   const divisionsRef = collection(db, "mlpdivisions");
//   const [divisions, setDivisions] = useState("<td></td>");

//   useEffect(() => {
//     const queryDivisions = query(divisionsRef);
//     const unsubscribe = onSnapshot(queryDivisions, (snapshot) => {
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
//     await addDoc(divisionsRef, {
//       name: newDivisionName,
//       createdAt: serverTimestamp(),
//       createdBy: auth.currentUser.displayName,
//     });

//     setNewDivisionName("");
//   };
//   return (
//     <div className="chat-app">
//       <h3>Add Division</h3>
//       <form onSubmit={handleSubmit} className="new-division-form">
//         <input
//           className="new-division-input"
//           placeholder="Enter Division Name"
//           onChange={(e) => setNewDivisionName(e.target.value)}
//           value={newDivisionName}
//         />
//         <Button size="sm" type="submit" className="send-button">
//           Submit
//         </Button>
//       </form>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Division</th>
//           </tr>
//         </thead>
//         <tbody>{divisions}</tbody>
//       </Table>
//     </div>
//   );
// };
