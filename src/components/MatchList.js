import { useState } from "react";
import { useEffect } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

import { db } from "../firebase-config";
import { collection, where, query, onSnapshot } from "firebase/firestore";

import { DeleteMatch } from "./DeleteMatch";
import { GoLive } from "./GoLive";

export const MatchList = (props) => {
  const { court, event } = props;
  const listMatches = collection(db, "mlpmatches");
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const queryMatches = query(
      listMatches,
      where("court", "==", court),
      where("eventID", "==", event)
    );
    const unsubscribe = onSnapshot(queryMatches, (snapshot) => {
      let matches = [];
      snapshot.forEach((doc) => {
        matches.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setMatches(matches);
      matches.sort((a, b) => {
        if (a.date === b.date) {
          // console.log(a.startTime.replace(":", ""));
          // console.log(b.startTime.replace(":", ""));
          return Number(a.startTime.replace(":", "")) <
            Number(b.startTime.replace(":", ""))
            ? -1
            : 1;
        } else {
          return a.date < b.date ? -1 : 1;
        }
      });
    });
    return () => unsubscribe();
  }, []);

  return (
    <div
      style={{
        paddingBottom: "5px",
        paddingTop: "5px",
      }}
      className="d-flex justify-content-around"
    >
      <Card style={{ width: "90vw" }}>
        <Card.Body>
          <div className="d-flex justify-content-around">
            {court}
            <br></br>
            {event}{" "}
          </div>
          <div>
            {" "}
            {matches.map((match) => (
              <div style={{ paddingTop: "5px" }} key={match.id}>
                <Card>
                  <Card.Header as="h5">
                    <Row>
                      <Col>{match.court}</Col>
                      <Col>
                        {" "}
                        {match.date}| {match.startTime}{" "}
                      </Col>
                    </Row>
                  </Card.Header>
                  <Card.Body>
                    <Table responsive striped bordered hover>
                      <thead>
                        <tr>
                          <th>Teams</th>
                          <th>WD</th>
                          <th>MD</th>
                          <th>MX</th>
                          <th>MX</th>
                          <th>DB</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{match.team1}</td>
                          <td>{match.WD.team1Score}</td>
                          <td>{match.MD.team1Score}</td>
                          <td>{match.MX1.team1Score}</td>
                          <td>{match.MX2.team1Score}</td>
                          <td>{match.DB.team1Score}</td>
                          <td>{match.team1Score}</td>
                        </tr>
                        <tr>
                          <td>{match.team2}</td>
                          <td>{match.WD.team2Score}</td>
                          <td>{match.MD.team2Score}</td>
                          <td>{match.MX1.team2Score}</td>
                          <td>{match.MX2.team2Score}</td>
                          <td>{match.DB.team2Score}</td>
                          <td>{match.team2Score}</td>
                        </tr>
                      </tbody>
                    </Table>
                    <Row>
                      <Col>
                        <GoLive matchID={match.id} />
                      </Col>
                      <Col>
                        {" "}
                        {match.team2Score === "submitted" ? (
                          <DeleteMatch
                            matchID={match.id}
                            status={match.status}
                          />
                        ) : (
                          <DeleteMatch
                            matchID={match.id}
                            status={match.status}
                          />
                        )}{" "}
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            ))}{" "}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
