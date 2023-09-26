import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Cookies from "universal-cookie";

import { TeamList } from "./TeamList.js";
import { DivisionList } from "./DivisionList.js";

const cookies = new Cookies();

export const CreatePlayer = (props) => {
  const { event } = props;

  const [isAdmin, setIsAdmin] = useState(cookies.get("auth-uid"));

  const [newPlayerFirstName, setNewPlayerFirstName] = useState("");
  const [newPlayerLastName, setNewPlayerLastName] = useState("");
  const [newPlayerDUPR, setNewPlayerDUPR] = useState("");
  const [newPlayerDivision, setNewPlayerDivision] = useState("");
  const [newTeamName, setNewTeamName] = useState("");

  const playersRef = collection(db, "mlpplayers");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPlayerFirstName.trim() === "") return;
    if (newPlayerLastName.trim() === "") return;
    if (newTeamName.trim() === "") return;
    await addDoc(playersRef, {
      createdAt: Date(),
      createdBy: isAdmin,
      firstName: newPlayerFirstName,
      lastName: newPlayerLastName,
      teamName: newTeamName,
      eventID: event,
      divisionID: newPlayerDivision,
      pointsWon: 0,
      pointsLost: 0,
      playerDUPR: newPlayerDUPR,
    });
    alert("player created!");
    setNewPlayerFirstName("");
    setNewPlayerLastName("");
    setNewTeamName("");
  };
  return (
    <>
      <div
        style={{ paddingBottom: "5px", paddingTop: "5px" }}
        className="d-flex justify-content-around"
      >
        <Card className="bg-dark" style={{ width: "400px" }}>
          <Card.Body>
            <Card.Subtitle
              className="d-flex justify-content-around"
              style={{ fontSize: "1rem", color: "white" }}
            >
              Create Player
            </Card.Subtitle>

            <div className="d-flex justify-content-around">
              <form onSubmit={handleSubmit} className="justify-content-around">
                <Row className="justify-content-around">
                  <input
                    style={{
                      border: "none",
                      borderRadius: "5px",
                      margin: 1,
                      width: "80%",
                    }}
                    type="text"
                    className="new-match-input"
                    placeholder="First Name"
                    onChange={(e) => setNewPlayerFirstName(e.target.value)}
                    value={newPlayerFirstName}
                  />
                  <input
                    style={{
                      border: "none",
                      borderRadius: "5px",
                      margin: 1,
                      width: "80%",
                    }}
                    type="text"
                    className="new-match-input"
                    placeholder="Last Name"
                    onChange={(e) => setNewPlayerLastName(e.target.value)}
                    value={newPlayerLastName}
                  />
                  <input
                    style={{
                      border: "none",
                      borderRadius: "5px",
                      margin: 1,
                      width: "80%",
                    }}
                    type="number"
                    className="new-match-input"
                    placeholder="DUPR"
                    onChange={(e) => setNewPlayerDUPR(e.target.value)}
                    value={newPlayerDUPR}
                  />
                  <DivisionList
                    setValue={newPlayerDivision}
                    setFunction={setNewPlayerDivision}
                  />
                  <TeamList
                    setValue={newTeamName}
                    setFunction={setNewTeamName}
                    event={event}
                  />
                </Row>
                <Row className="justify-content-around">
                  <Button
                    style={{
                      border: "none",
                      borderRadius: "5px",
                      width: "80%",
                    }}
                    type="submit"
                    className="send-button"
                  >
                    Create
                  </Button>
                </Row>
              </form>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
