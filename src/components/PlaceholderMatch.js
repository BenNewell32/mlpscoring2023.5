import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const PlaceholderMatch = (props) => {
  return (
    <>
      <div
        style={{ paddingBottom: "5px" }}
        className="d-flex justify-content-around"
      >
        <Row>
          <Col>
            <Card style={{ width: "80vw" }}>
              <Card.Body>
                <Row>
                  <h3>Matches Starting Soon!</h3>
                </Row>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={1} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={1} />{" "}
                  <Placeholder xs={1} />
                  <Placeholder xs={1} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={1} />{" "}
                  <Placeholder xs={1} />
                  <Placeholder xs={1} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={1} />{" "}
                  <Placeholder xs={1} />
                  <Placeholder xs={1} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={1} />{" "}
                  <Placeholder xs={1} />
                </Placeholder>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
