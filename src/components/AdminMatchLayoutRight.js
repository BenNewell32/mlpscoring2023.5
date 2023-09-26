import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { addScore, updateWinner } from "./scoring.js";

import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { PlayerList } from "./PlayerList.js";

import { useState } from "react";

export const AdminMatchLayoutRight = (props) => {
  const { matchDetails, matchID } = props;
  const [team2WD1, setTeam2WD1] = useState(matchDetails.WD.team2Player1);
  const [team2WD2, setTeam2WD2] = useState(matchDetails.WD.team2Player2);

  const [team2MD1, setTeam2MD1] = useState(matchDetails.MD.team2Player1);
  const [team2MD2, setTeam2MD2] = useState(matchDetails.MD.team2Player2);

  const [team2MX11, setTeam2MX11] = useState(matchDetails.MX1.team2Player1);
  const [team2MX12, setTeam2MX12] = useState(matchDetails.MX1.team2Player2);

  const [team2MX21, setTeam2MX21] = useState(matchDetails.MX2.team2Player1);
  const [team2MX22, setTeam2MX22] = useState(matchDetails.MX2.team2Player2);

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
      {matchDetails.endTime==='M'? <>
      <Row style={{ height: "130px" }}>
      <Col style={{ width: "10px" }}>
        <p>{matchDetails.MD.team2Score}</p>
      </Col>

      <Col style={{ width: "10px" }}>
        <p>MD</p>
        {MDwinner===2?
        <Form.Check
          onChange={(e) => updateWinner("MD", matchDetails, matchID, "2", e)}
          type="checkbox"
          id={`MD`}
          defaultChecked={true}
        ></Form.Check>:
        <Form.Check
          onChange={(e) => updateWinner("MD", matchDetails, matchID, "2", e)}
          type="checkbox"
          id={`MD`}
        ></Form.Check>
        }
        <Button
          onClick={() => {
            addScore("MD", matchDetails, matchID, "2", 1);
          }}
          variant="success"
          size="sm"
        >
          <FiPlusCircle />
        </Button>
        <Button
          onClick={() => {
            addScore("MD", matchDetails, matchID, "2", -1);
          }}
          variant="danger"
          size="sm"
        >
          <FiMinusCircle />
        </Button>
      </Col>
    </Row>
    <PlayerList
      setValue={team2MD1}
      setFunction={setTeam2MD1}
      event={matchDetails.eventID}
      team={matchDetails.team2}
      match={matchID}
      matchPlayer={"mdt2p1"}
    />
    <PlayerList
      setValue={team2MD2}
      setFunction={setTeam2MD2}
      event={matchDetails.eventID}
      team={matchDetails.team2}
      match={matchID}
      matchPlayer={"mdt2p2"}
    />
    <hr /></>
      
      : <><Row style={{ height: "130px" }}>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.WD.team2Score}</p>
        </Col>

        <Col style={{ width: "10px" }}>
          <p>WD</p>
          {WDwinner===2?
          <Form.Check
            onChange={(e) => updateWinner("WD", matchDetails, matchID, "2", e)}
            type="checkbox"
            id={`WD`}
            defaultChecked={true}
          ></Form.Check>:
          <Form.Check
            onChange={(e) => updateWinner("WD", matchDetails, matchID, "2", e)}
            type="checkbox"
            id={`WD`}
          ></Form.Check>
          }
          <Button
            onClick={() => {
              addScore("WD", matchDetails, matchID, "2", 1);
            }}
            variant="success"
            size="sm"
          >
            <FiPlusCircle />
          </Button>
          <Button
            onClick={() => {
              addScore("WD", matchDetails, matchID, "2", -1);
            }}
            variant="danger"
            size="sm"
          >
            <FiMinusCircle />
          </Button>
        </Col>
      </Row>
      <PlayerList
        setValue={team2WD1}
        setFunction={setTeam2WD1}
        event={matchDetails.eventID}
        team={matchDetails.team2}
        match={matchID}
        matchPlayer={"wdt2p1"}
      />
      <PlayerList
        setValue={team2WD2}
        setFunction={setTeam2WD2}
        event={matchDetails.eventID}
        team={matchDetails.team2}
        match={matchID}
        matchPlayer={"wdt2p2"}
      />
      <hr /></>}
      {matchDetails.endTime==='M'? <><Row style={{ height: "130px" }}>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.WD.team2Score}</p>
        </Col>

        <Col style={{ width: "10px" }}>
          <p>WD</p>
          {WDwinner===2?
          <Form.Check
            onChange={(e) => updateWinner("WD", matchDetails, matchID, "2", e)}
            type="checkbox"
            id={`WD`}
            defaultChecked={true}
          ></Form.Check>:
          <Form.Check
            onChange={(e) => updateWinner("WD", matchDetails, matchID, "2", e)}
            type="checkbox"
            id={`WD`}
          ></Form.Check>
          }
          <Button
            onClick={() => {
              addScore("WD", matchDetails, matchID, "2", 1);
            }}
            variant="success"
            size="sm"
          >
            <FiPlusCircle />
          </Button>
          <Button
            onClick={() => {
              addScore("WD", matchDetails, matchID, "2", -1);
            }}
            variant="danger"
            size="sm"
          >
            <FiMinusCircle />
          </Button>
        </Col>
      </Row>
      <PlayerList
        setValue={team2WD1}
        setFunction={setTeam2WD1}
        event={matchDetails.eventID}
        team={matchDetails.team2}
        match={matchID}
        matchPlayer={"wdt2p1"}
      />
      <PlayerList
        setValue={team2WD2}
        setFunction={setTeam2WD2}
        event={matchDetails.eventID}
        team={matchDetails.team2}
        match={matchID}
        matchPlayer={"wdt2p2"}
      />
      <hr /></>:<>
      <Row style={{ height: "130px" }}>
      <Col style={{ width: "10px" }}>
        <p>{matchDetails.MD.team2Score}</p>
      </Col>

      <Col style={{ width: "10px" }}>
        <p>MD</p>
        {MDwinner===2?
        <Form.Check
          onChange={(e) => updateWinner("MD", matchDetails, matchID, "2", e)}
          type="checkbox"
          id={`MD`}
          defaultChecked={true}
        ></Form.Check>:
        <Form.Check
          onChange={(e) => updateWinner("MD", matchDetails, matchID, "2", e)}
          type="checkbox"
          id={`MD`}
        ></Form.Check>
        }
        <Button
          onClick={() => {
            addScore("MD", matchDetails, matchID, "2", 1);
          }}
          variant="success"
          size="sm"
        >
          <FiPlusCircle />
        </Button>
        <Button
          onClick={() => {
            addScore("MD", matchDetails, matchID, "2", -1);
          }}
          variant="danger"
          size="sm"
        >
          <FiMinusCircle />
        </Button>
      </Col>
    </Row>
    <PlayerList
      setValue={team2MD1}
      setFunction={setTeam2MD1}
      event={matchDetails.eventID}
      team={matchDetails.team2}
      match={matchID}
      matchPlayer={"mdt2p1"}
    />
    <PlayerList
      setValue={team2MD2}
      setFunction={setTeam2MD2}
      event={matchDetails.eventID}
      team={matchDetails.team2}
      match={matchID}
      matchPlayer={"mdt2p2"}
    />
    <hr /></>}
      
      
      <Row style={{ height: "130px" }}>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.MX1.team2Score}</p>
        </Col>

        <Col style={{ width: "10px" }}>
          <p>MX1</p>
          {MX1winner===2?
          <Form.Check
            onChange={(e) => updateWinner("MX1", matchDetails, matchID, "2", e)}
            type="checkbox"
            id={`MX1`}
            defaultChecked={true}
          ></Form.Check>:
          <Form.Check
          onChange={(e) => updateWinner("MX1", matchDetails, matchID, "2", e)}
          type="checkbox"
          id={`MX1`}
          ></Form.Check> 
          }
          <Button
            onClick={() => {
              addScore("MX1", matchDetails, matchID, "2", 1);
            }}
            variant="success"
            size="sm"
          >
            <FiPlusCircle />
          </Button>
          <Button
            onClick={() => {
              addScore("MX1", matchDetails, matchID, "2", -1);
            }}
            variant="danger"
            size="sm"
          >
            <FiMinusCircle />
          </Button>
        </Col>
      </Row>
      <PlayerList
        setValue={team2MX11}
        setFunction={setTeam2MX11}
        event={matchDetails.eventID}
        team={matchDetails.team2}
        match={matchID}
        matchPlayer={"mx1t2p1"}
      />
      <PlayerList
        setValue={team2MX12}
        setFunction={setTeam2MX12}
        event={matchDetails.eventID}
        team={matchDetails.team2}
        match={matchID}
        matchPlayer={"mx1t2p2"}
      />
      <hr />
      <Row style={{ height: "130px" }}>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.MX2.team2Score}</p>
        </Col>

        <Col style={{ width: "10px" }}>
          <p>MX2</p>
          {MX2winner===2?
          <Form.Check
            onChange={(e) => updateWinner("MX2", matchDetails, matchID, "2", e)}
            type="checkbox"
            id={`MX2`}
            defaultChecked={true}
          ></Form.Check>:
          <Form.Check
          onChange={(e) => updateWinner("MX2", matchDetails, matchID, "2", e)}
          type="checkbox"
          id={`MX2`}
         ></Form.Check> 
          }
          <Button
            onClick={() => {
              addScore("MX2", matchDetails, matchID, "2", 1);
            }}
            variant="success"
            size="sm"
          >
            <FiPlusCircle />
          </Button>
          <Button
            onClick={() => {
              addScore("MX2", matchDetails, matchID, "2", -1);
            }}
            variant="danger"
            size="sm"
          >
            <FiMinusCircle />
          </Button>
        </Col>
      </Row>
      <PlayerList
        setValue={team2MX21}
        setFunction={setTeam2MX21}
        event={matchDetails.eventID}
        team={matchDetails.team2}
        match={matchID}
        matchPlayer={"mx2t2p1"}
      />
      <PlayerList
        setValue={team2MX22}
        setFunction={setTeam2MX22}
        event={matchDetails.eventID}
        team={matchDetails.team2}
        match={matchID}
        matchPlayer={"mx2t2p2"}
      />
      <hr />
      <Row style={{ height: "130px" }}>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.DB.team2Score}</p>
        </Col>
        <Col>
          <p>DB</p>
          {DBWinner===2?
          <Form.Check
            onChange={(e) => updateWinner("DB", matchDetails, matchID, "2", e)}
            type="checkbox"
            id={`DB2`}
            defaultChecked={true}
          ></Form.Check>:
          <Form.Check
            onChange={(e) => updateWinner("DB", matchDetails, matchID, "2", e)}
            type="checkbox"
            id={`DB2`}
          ></Form.Check>
          }
          <Button
            onClick={() => {
              addScore("DB", matchDetails, matchID, "2", 1);
            }}
            variant="success"
            size="sm"
          >
            <FiPlusCircle />
          </Button>
          <Button
            onClick={() => {
              addScore("DB", matchDetails, matchID, "2", -1);
            }}
            variant="danger"
            size="sm"
          >
            <FiMinusCircle />
          </Button>
        </Col>
      </Row>
    </>
  );
};
