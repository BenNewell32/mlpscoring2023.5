import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { addScore, updateWinner } from "./scoring.js";

import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { PlayerList } from "./PlayerList.js";

import { useState } from "react";

export const AdminMatchLayoutLeft = (props) => {
  const { matchDetails, matchID } = props;
  const [team1WD1, setTeam1WD1] = useState(matchDetails.WD.team1Player1);
  const [team1WD2, setTeam1WD2] = useState(matchDetails.WD.team1Player2);

  const [team1MD1, setTeam1MD1] = useState(matchDetails.MD.team1Player1);
  const [team1MD2, setTeam1MD2] = useState(matchDetails.MD.team1Player2);

  const [team1MX11, setTeam1MX11] = useState(matchDetails.MX1.team1Player1);
  const [team1MX12, setTeam1MX12] = useState(matchDetails.MX1.team1Player2);

  const [team1MX21, setTeam1MX21] = useState(matchDetails.MX2.team1Player1);
  const [team1MX22, setTeam1MX22] = useState(matchDetails.MX2.team1Player2);

  const [WDwinner, setWDwinner] = useState(matchDetails.WD.winner);
  const [MDwinner, setMDwinner] = useState(matchDetails.MD.winner);
  const [MX1winner, setMX1winner] = useState(matchDetails.MX1.winner);
  const [MX2winner, setMX2winner] = useState(matchDetails.MX2.winner);
  const [DBWinner, setDBwinner] = useState(matchDetails.DB.winner);

  return (
    <>
      <style type="text/css">
        {`input[type=checkbox] {

    display: inline-block;
    background-clip: content-box;
    border: 1.5px solid #bbbbbb;
    border-radius: 6px;
    background-color: #e7e6e7;
    margin-left: 10px;
    margin-right: 10px;
    &:checked{
        background-color: orange;
    }

    &:focus{
        outline: none !important;
    }
}
    `}
      </style>
      {matchDetails.endTime==='M'?
      <>
      <Row style={{ height: "130px" }}>
        <Col style={{ width: "10px" }}>
          <p>MD</p>
          {MDwinner===1?
          <Form.Check
            onChange={(e) => updateWinner("MD", matchDetails, matchID, "1", e)}
            type="checkbox"
            id={`MD`}
            defaultChecked={true}
          ></Form.Check>:
          <Form.Check
            onChange={(e) => updateWinner("MD", matchDetails, matchID, "1", e)}
            type="checkbox"
            id={`MD`}
          ></Form.Check>
          }
          <Button
            onClick={() => {
              addScore("MD", matchDetails, matchID, "1", 1);
            }}
            variant="success"
            size="sm"
          >
            <FiPlusCircle />
          </Button>
          <Button
            onClick={() => {
              addScore("MD", matchDetails, matchID, "1", -1);
            }}
            variant="danger"
            size="sm"
          >
            <FiMinusCircle />
          </Button>
        </Col>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.MD.team1Score}</p>
        </Col>
      </Row>
      <PlayerList
        setValue={team1MD1}
        setFunction={setTeam1MD1}
        event={matchDetails.eventID}
        team={matchDetails.team1}
        match={matchID}
        matchPlayer={"mdt1p1"}
      />
      <PlayerList
        setValue={team1MD2}
        setFunction={setTeam1MD2}
        event={matchDetails.eventID}
        team={matchDetails.team1}
        match={matchID}
        matchPlayer={"mdt1p2"}
      />
      <hr />
      </>
      :
      <>
      <Row style={{ height: "130px" }}>
        <Col style={{ width: "10px" }}>
          <p>WD</p>
          {WDwinner===1?
          <Form.Check
            onChange={(e) => updateWinner("WD", matchDetails, matchID, "1", e)}
            type="checkbox"
            id={`WD`}
            defaultChecked={true}
          ></Form.Check>:
          <Form.Check
            onChange={(e) => updateWinner("WD", matchDetails, matchID, "1", e)}
            type="checkbox"
            id={`WD`}
          ></Form.Check>
          }
          <Button
            onClick={() => {
              addScore("WD", matchDetails, matchID, "1", 1);
            }}
            variant="success"
            size="sm"
          >
            <FiPlusCircle />
          </Button>
          <Button
            onClick={() => {
              addScore("WD", matchDetails, matchID, "1", -1);
            }}
            variant="danger"
            size="sm"
          >
            <FiMinusCircle />
          </Button>
        </Col>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.WD.team1Score}</p>
        </Col>
      </Row>
      <PlayerList
        setValue={team1WD1}
        setFunction={setTeam1WD1}
        event={matchDetails.eventID}
        team={matchDetails.team1}
        match={matchID}
        matchPlayer={"wdt1p1"}
      />
      <PlayerList
        setValue={team1WD2}
        setFunction={setTeam1WD2}
        event={matchDetails.eventID}
        team={matchDetails.team1}
        match={matchID}
        matchPlayer={"wdt1p2"}
      />
      <hr />
      </>
      }

{matchDetails.endTime==='W'?
      <>
      <Row style={{ height: "130px" }}>
        <Col style={{ width: "10px" }}>
          <p>MD</p>
          {MDwinner===1?
          <Form.Check
            onChange={(e) => updateWinner("MD", matchDetails, matchID, "1", e)}
            type="checkbox"
            id={`MD`}
            defaultChecked={true}
          ></Form.Check>:
          <Form.Check
            onChange={(e) => updateWinner("MD", matchDetails, matchID, "1", e)}
            type="checkbox"
            id={`MD`}
          ></Form.Check>
          }
          <Button
            onClick={() => {
              addScore("MD", matchDetails, matchID, "1", 1);
            }}
            variant="success"
            size="sm"
          >
            <FiPlusCircle />
          </Button>
          <Button
            onClick={() => {
              addScore("MD", matchDetails, matchID, "1", -1);
            }}
            variant="danger"
            size="sm"
          >
            <FiMinusCircle />
          </Button>
        </Col>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.MD.team1Score}</p>
        </Col>
      </Row>
      <PlayerList
        setValue={team1MD1}
        setFunction={setTeam1MD1}
        event={matchDetails.eventID}
        team={matchDetails.team1}
        match={matchID}
        matchPlayer={"mdt1p1"}
      />
      <PlayerList
        setValue={team1MD2}
        setFunction={setTeam1MD2}
        event={matchDetails.eventID}
        team={matchDetails.team1}
        match={matchID}
        matchPlayer={"mdt1p2"}
      />
      <hr />
      </>
      :
      <>
      <Row style={{ height: "130px" }}>
        <Col style={{ width: "10px" }}>
          <p>WD</p>
          {WDwinner===1?
          <Form.Check
            onChange={(e) => updateWinner("WD", matchDetails, matchID, "1", e)}
            type="checkbox"
            id={`WD`}
            defaultChecked={true}
          ></Form.Check>:
          <Form.Check
            onChange={(e) => updateWinner("WD", matchDetails, matchID, "1", e)}
            type="checkbox"
            id={`WD`}
          ></Form.Check>
          }
          <Button
            onClick={() => {
              addScore("WD", matchDetails, matchID, "1", 1);
            }}
            variant="success"
            size="sm"
          >
            <FiPlusCircle />
          </Button>
          <Button
            onClick={() => {
              addScore("WD", matchDetails, matchID, "1", -1);
            }}
            variant="danger"
            size="sm"
          >
            <FiMinusCircle />
          </Button>
        </Col>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.WD.team1Score}</p>
        </Col>
      </Row>
      <PlayerList
        setValue={team1WD1}
        setFunction={setTeam1WD1}
        event={matchDetails.eventID}
        team={matchDetails.team1}
        match={matchID}
        matchPlayer={"wdt1p1"}
      />
      <PlayerList
        setValue={team1WD2}
        setFunction={setTeam1WD2}
        event={matchDetails.eventID}
        team={matchDetails.team1}
        match={matchID}
        matchPlayer={"wdt1p2"}
      />
      <hr />
      </>
      }
      
      
      <Row style={{ height: "130px" }}>
        <Col style={{ width: "10px" }}>
          <p>MX1</p>
          {MX1winner===1?
          <Form.Check
            onChange={(e) => updateWinner("MX1", matchDetails, matchID, "1", e)}
            type="checkbox"
            id={`MX1`}
            defaultChecked={true}
          ></Form.Check>
          :
          <Form.Check
            onChange={(e) => updateWinner("MX1", matchDetails, matchID, "1", e)}
            type="checkbox"
            id={`MX1`}
          ></Form.Check>
          }
          <Button
            onClick={() => {
              addScore("MX1", matchDetails, matchID, "1", 1);
            }}
            variant="success"
            size="sm"
          >
            <FiPlusCircle />
          </Button>
          <Button
            onClick={() => {
              addScore("MX1", matchDetails, matchID, "1", -1);
            }}
            variant="danger"
            size="sm"
          >
            <FiMinusCircle />
          </Button>
        </Col>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.MX1.team1Score}</p>
        </Col>
      </Row>
      <PlayerList
        setValue={team1MX11}
        setFunction={setTeam1MX11}
        event={matchDetails.eventID}
        team={matchDetails.team1}
        match={matchID}
        matchPlayer={"mx1t1p1"}
      />
      <PlayerList
        setValue={team1MX12}
        setFunction={setTeam1MX12}
        event={matchDetails.eventID}
        team={matchDetails.team1}
        match={matchID}
        matchPlayer={"mx1t1p2"}
      />
      <hr />
      <Row style={{ height: "130px" }}>
        <Col style={{ width: "10px" }}>
          <p>MX2</p>
          {MX2winner===1?
          <Form.Check
            onChange={(e) => updateWinner("MX2", matchDetails, matchID, "1", e)}
            type="checkbox"
            id={`MX2`}
            defaultChecked={true}
          ></Form.Check>:
          <Form.Check
            onChange={(e) => updateWinner("MX2", matchDetails, matchID, "1", e)}
            type="checkbox"
            id={`MX2`}
          ></Form.Check>
          }
          <Button
            onClick={() => {
              addScore("MX2", matchDetails, matchID, "1", 1);
            }}
            variant="success"
            size="sm"
          >
            <FiPlusCircle />
          </Button>
          <Button
            onClick={() => {
              addScore("MX2", matchDetails, matchID, "1", -1);
            }}
            variant="danger"
            size="sm"
          >
            <FiMinusCircle />
          </Button>
        </Col>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.MX2.team1Score}</p>
        </Col>
      </Row>
      <PlayerList
        setValue={team1MX21}
        setFunction={setTeam1MX21}
        event={matchDetails.eventID}
        team={matchDetails.team1}
        match={matchID}
        matchPlayer={"mx2t1p1"}
      />
      <PlayerList
        setValue={team1MX22}
        setFunction={setTeam1MX22}
        event={matchDetails.eventID}
        team={matchDetails.team1}
        match={matchID}
        matchPlayer={"mx2t1p2"}
      />
      <hr />
      <Row style={{ height: "130px" }}>
        <Col style={{ width: "10px" }}>
          <p>DB</p>
          {DBWinner===1?
          <Form.Check
            onChange={(e) => updateWinner("DB", matchDetails, matchID, "1", e)}
            type="checkbox"
            id={`DB1`}
          ></Form.Check>:
          <Form.Check
            onChange={(e) => updateWinner("DB", matchDetails, matchID, "1", e)}
            type="checkbox"
            id={`DB1`}
          ></Form.Check>
          }
          <Button
            onClick={() => {
              addScore("DB", matchDetails, matchID, "1", 1);
            }}
            variant="success"
            size="sm"
          >
            <FiPlusCircle />
          </Button>
          <Button
            onClick={() => {
              addScore("DB", matchDetails, matchID, "1", -1);
            }}
            variant="danger"
            size="sm"
          >
            <FiMinusCircle />
          </Button>
        </Col>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.DB.team1Score}</p>
        </Col>
      </Row>
    </>
  );
};
