import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Cookies from "universal-cookie";

import { DivisionList } from "./DivisionList.js";

const cookies = new Cookies();

export const CreateTeam = (props) => {
  const { event } = props;

  const [isAdmin, setIsAdmin] = useState(cookies.get("auth-uid"));

  const [newTeamDUPR, setNewTeamDUPR] = useState("");
  const [newTeamDivision, setNewTeamDivision] = useState("");
  const [newTeamName, setNewTeamName] = useState("");

  const teamsRef = collection(db, "mlpteams");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newTeamName.trim() === "") return;
    if (newTeamDivision.trim() === "") return;
    if (newTeamDUPR.trim() === "") return;
    await addDoc(teamsRef, {
      createdAt: Date(),
      createdBy: isAdmin,
      teamName: newTeamName,
      eventID: event,
      divisionID: newTeamDivision,
      pointsWon: 0,
      pointsLost: 0,
      matchesWon: 0,
      matchesLost: 0,
      teamDUPR: newTeamDUPR,
    });
    alert("Team created!");
    setNewTeamName("");
    setNewTeamDUPR("");
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
              Create Team
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
                    placeholder="Team Name"
                    onChange={(e) => setNewTeamName(e.target.value)}
                    value={newTeamName}
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
                    placeholder="Team DUPR"
                    onChange={(e) => setNewTeamDUPR(e.target.value)}
                    value={newTeamDUPR}
                  />
                  <DivisionList
                    setValue={newTeamDivision}
                    setFunction={setNewTeamDivision}
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
