import { PlaceholderMatch } from "./PlaceholderMatch";
import { Live } from "./Live";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";

import { RiPingPongFill } from "react-icons/ri";
import { TbBallFootball } from "react-icons/tb";
let matches = ["1", "2", "3", "4", "5", "6"];
export const LiveMatch = (props) => {
  return (
    <>
      <div
        style={{ paddingBottom: "5px" }}
        className="d-flex justify-content-around"
      >
        <Card style={{ backgroundColor: "#002b46", width: "90vw" }}>
          <Card.Body>
            <Card.Title
              className="d-flex justify-content-around"
              style={{ fontSize: "2rem", color: "white" }}
            >
              Center Court
            </Card.Title>
            <Card.Subtitle
              className="d-flex justify-content-around"
              style={{ fontSize: "1rem", color: "white" }}
            >
              <Row>
                SEPT 21ST @ 3:00PM PT
                <Live />
              </Row>
            </Card.Subtitle>
            <Card.Text
              className="d-flex justify-content-around"
              style={{ color: "white" }}
            >
              GROUP STAGE
            </Card.Text>
            <ButtonGroup
              className="d-flex justify-content-around"
              aria-label="Basic example"
            >
              <Button variant="home">
                <RiPingPongFill size="30px" />
                NEW YORK HUSTLERS
              </Button>

              <Button variant="away">
                <TbBallFootball size="30px" />
                LOS ANGELES MAD DROPS
              </Button>
            </ButtonGroup>{" "}
          </Card.Body>
        </Card>
      </div>
      <PlaceholderMatch />
    </>
  );
};
