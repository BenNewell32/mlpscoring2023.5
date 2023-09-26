import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MatchLayoutRight = (props) => {
  const { matchDetails, matchID } = props;

  return (
    <>

      <Row style={{ height: "100px" }}>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.MD.team2Score}</p>
        </Col>
        <Col style={{ width: "20px" }}>
          <p style={{ fontSize: "12px" }}>
            {matchDetails.MD.team2Player1} / {matchDetails.MD.team2Player2}
          </p>
        </Col>
        <Col style={{ width: "10px" }}>
          <p>MD</p>
        </Col>
      </Row>
      <Row style={{ height: "100px" }}>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.WD.team2Score}</p>
        </Col>
        <Col style={{ width: "20px" }}>
          <p style={{ fontSize: "12px" }}>
            {matchDetails.WD.team2Player1} / {matchDetails.WD.team2Player2}
          </p>
        </Col>
        <Col style={{ width: "10px" }}>
          <p>WD</p>
        </Col>
      </Row>
      <Row style={{ height: "100px" }}>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.MX1.team2Score}</p>
        </Col>
        <Col style={{ width: "20px" }}>
          <p style={{ fontSize: "12px" }}>
            {matchDetails.MX1.team2Player1} / {matchDetails.MX1.team2Player2}
          </p>
        </Col>
        <Col style={{ width: "10px" }}>
          <p>MX1</p>
        </Col>
      </Row>
      <Row style={{ height: "100px" }}>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.MX2.team2Score}</p>
        </Col>
        <Col style={{ width: "20px" }}>
          <p style={{ fontSize: "12px" }}>
            {matchDetails.MX2.team2Player1} / {matchDetails.MX2.team2Player2}
          </p>
        </Col>
        <Col style={{ width: "10px" }}>
          <p>MX2</p>
        </Col>
      </Row>
      <Row style={{ height: "100px" }}>
        <Col style={{ width: "10px" }}>
          <p>{matchDetails.DB.team2Score}</p>
        </Col>
        <Col></Col>
        <Col>
          <p>DB</p>
        </Col>
      </Row>
    </>
  );
};
