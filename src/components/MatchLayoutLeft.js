import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MatchLayoutLeft = (props) => {
  const { matchDetails, matchID } = props;

  return (
    <>
    <Row style={{ height: "100px" }}>
        <Col style={{ width: "10px" }}>
          <p>MD</p>
        </Col>
        <Col style={{ width: "10px" }}>
          <p style={{ fontSize: "12px" }}>
            {matchDetails.MD.team1Player1} / {matchDetails.MD.team1Player2}
          </p>
        </Col>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.MD.team1Score}</p>
        </Col>
      </Row>
      <Row style={{ height: "100px" }}>
        <Col style={{ width: "10px" }}>
          <p>WD</p>
        </Col>
        <Col style={{ width: "10px" }}>
          <p style={{ fontSize: "12px" }}>
            {matchDetails.WD.team1Player1} / {matchDetails.WD.team1Player2}
          </p>
        </Col>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.WD.team1Score}</p>
        </Col>
      </Row>
      
      <Row style={{ height: "100px" }}>
        <Col style={{ width: "10px" }}>
          <p>MX1</p>
        </Col>
        <Col style={{ width: "10px" }}>
          <p style={{ fontSize: "12px" }}>
            {matchDetails.MX1.team1Player1} / {matchDetails.MX1.team1Player2}
          </p>
        </Col>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.MX1.team1Score}</p>
        </Col>
      </Row>
      <Row style={{ height: "100px" }}>
        <Col style={{ width: "10px" }}>
          <p>MX2</p>
        </Col>
        <Col style={{ width: "10px" }}>
          <p style={{ fontSize: "12px" }}>
            {matchDetails.MX2.team1Player1} / {matchDetails.MX2.team1Player2}
          </p>
        </Col>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.MX2.team1Score}</p>
        </Col>
      </Row>
      <Row style={{ height: "100px" }}>
        <Col style={{ width: "10px" }}>
          <p>DB</p>
        </Col>
        <Col></Col>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.DB.team1Score}</p>
        </Col>
      </Row>
    </>
  );
};
