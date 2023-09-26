import {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AdminMatchLayoutRight } from "./AdminMatchLayoutRight";
import { AdminMatchLayoutLeft } from "./AdminMatchLayoutLeft";
import { Button } from "react-bootstrap";

import { updateTime } from "./scoring.js";


export const AdminMatchLayout = (props) => {
  const { matchDetails, matchID } = props;
  const [newMatchStartTime, setNewMatchStartTime] = useState("");

  return (
    <>
      <Row>
        <Col>
          <p>Division: {matchDetails.divisionID}</p>
        </Col>
        <Col>
          <p>Round: {matchDetails.roundID}</p>
        </Col>
      </Row>
      <p>
        Date and Time: {matchDetails.date} - {matchDetails.startTime}
      </p>
      <input style={
            {
                border: "none",
                borderRadius: "5px",
                margin: 1,
                width: "150px"
            }
        }
        type="time"
        className="new-match-input"
        placeholder="Select Start Time:"        
        onChange={
          (e) => setNewMatchStartTime(e.target.value)
      }
        time={newMatchStartTime}
        />
        <Button
        onClick={
          // (e) => setNewMatchStartTime(e.target.value)
          (e) => updateTime(matchID,newMatchStartTime)
      }
        >
          Change Time
        </Button>
      <Row>
        <Col>
          <Row>
            <h5>{matchDetails.team1}</h5>
          </Row>

          <AdminMatchLayoutLeft matchDetails={matchDetails} matchID={matchID} />
        </Col>
        <Col>
          <Row>
            <h5>{matchDetails.team2}</h5>
          </Row>
          <AdminMatchLayoutRight
            matchDetails={matchDetails}
            matchID={matchID}
          />
        </Col>
      </Row>
      <p style={{ fontSize: "10px" }}>{matchID}</p>
    </>
  );
};
