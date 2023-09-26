import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import { useState, useEffect } from "react";

import { Live } from "./Live";
import { AdminMatchLayout } from "./AdminMatchLayout";

import { db } from "../firebase-config";
import {
  doc,
  updateDoc,
  onSnapshot,
  addDoc,
  collection,
  arrayRemove,
  arrayUnion,
} from "firebase/firestore";

import { recalculateStandings } from "./standings.js";

export const GoLive = (props) => {
  const { matchID } = props;

  const [show, setShow] = useState(false);
  const [liveState, setLive] = useState(true);
  const [matchDetails, setMatchDetails] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "mlpmatches", matchID), (doc) => {
      setMatchDetails(doc.data());
    });
    return () => unsubscribe();
  }, []);

  const handleClose = () => {
    setShow(false);
    endMatch();
  };

  const handleButtonClick = (e) => {
    // console.log({matchID});
    handleShow();
  };

  const handleShow = async () => {
    setShow(true);
    await updateDoc(doc(db, "mlpmatches", matchID), { live: true });
    await updateDoc(
      doc(db, "mlpLiveMatches" + matchDetails.divisionID, "live"),
      { matches: arrayUnion(matchID) }
    );
  };

  const endMatch = async () => {
    // console.log("match ended");
    await updateDoc(doc(db, "mlpmatches", matchID), {
      live: false,
      status: "submitted",
    });
    await updateDoc(
      doc(db, "mlpLiveMatches" + matchDetails.divisionID, "live"),
      { matches: arrayRemove(matchID) }
    );

    recalculateStandings(matchDetails.divisionID, matchDetails.eventID);
    
    update002ChallengerTeamGroup();
    update002ChallengerTeamTotal();
    update002ChallengerPlayerTotal();
    update002SeasonChallengerTeamTotal();
    update002PremierTeamGroup();
    update002PremierTeamTotal();
    update002PremierPlayerTotal();
    update002SeasonPremierTeamTotal();
    update002SeasonAllTeamTotal();

    update002ChallengerTeamGroupS22023();
    update002ChallengerTeamTotalS22023();
    update002ChallengerPlayerTotalS22023();
    update002SeasonChallengerTeamTotalS22023();
    update002PremierTeamGroupS22023();
    update002PremierTeamTotalS22023();
    update002PremierPlayerTotalS22023();
    update002SeasonPremierTeamTotalS22023();
    update002SeasonAllTeamTotalS22023();
  };

  //SEASON 2
  const update002ChallengerTeamGroupS22023 = () => {
    console.log("002 Challenger Team Group");
    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Team%20Standings%20-%20Challenger%20Group%20Stage'!A1:O?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          updateDoc(doc(db, "002ChallengerTeamGroupS22023", "zil7bZTz3EfKkCNOh2z0"), {
            result: JSON.stringify(result),
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("unable to update Challenger Team Group 002.");
        }
      );
  };

  const update002ChallengerTeamTotalS22023 = () => {
    console.log("002 Challenger Team Total");

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Team%20Standings%20-%20Challenger%20Total'!A1:P?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          updateDoc(doc(db, "002ChallengerTeamTotalS22023", "lAZfdkVg8m7gahZMGw2R"), {
            result: JSON.stringify(result),
          });
        },
        (error) => {
          console.log("unable to update Challenger Team Total 002.");
        }
      );
  };

  const update002ChallengerPlayerTotalS22023 = () => {
    console.log("002 Challenger Player");

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Player%20Standings%20-%20Challenger%20Total'!A1:V?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          updateDoc(
            doc(db, "002ChallengerPlayerTotalS22023", "06Fz5w9k0SKPRZxPBmNj"),
            {
              result: JSON.stringify(result),
            }
          );
        },
        (error) => {
          console.log("unable to update Challenger Player Total 002.");
        }
      );
  };

  const update002PremierTeamGroupS22023 = () => {
    console.log("002 Premier Team Group");

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Team%20Standings%20-%20Premier%20Group%20Stage'!A1:O?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          updateDoc(doc(db, "002PremierTeamGroupS22023", "mKsVNOf0oH4ZGO52HsXm"), {
            result: JSON.stringify(result),
          });
        },
        (error) => {
          console.log("unable to update Premier Team Group 002.");
        }
      );
  };

  const update002PremierTeamTotalS22023 = () => {
    console.log("002 Premier Team Total");

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Team%20Standings%20-%20Premier%20Total'!A1:P?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          updateDoc(doc(db, "002PremierTeamTotalS22023", "644oti1xfafkxXREApmw"), {
            result: JSON.stringify(result),
          });
        },
        (error) => {
          console.log("unable to update Premier Team Total 002.");
        }
      );
  };

  const update002PremierPlayerTotalS22023 = () => {
    console.log("002 Premier Player");

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Player%20Standings%20-%20Premier%20Total'!A1:V?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);

          updateDoc(doc(db, "002PremierPlayerTotalS22023", "tEdHDR1erDKev1iTnSu5"), {
            result: JSON.stringify(result),
          });
        },
        (error) => {
          console.log("unable to update Premier Player Total 002.");
        }
      );
  };

  const update002SeasonPremierTeamTotalS22023 = () => {
    console.log("002 Season Premier Team");

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Team%20Standings%20-%20Premier%20Season'!A1:T?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);

          updateDoc(
            doc(db, "002SeasonPremierTeamTotalS22023", "RdKcU3A5RZVwVExCsQy7"),
            {
              result: JSON.stringify(result),
            }
          );
        },
        (error) => {
          console.log("unable to update Premier Team Total 002.");
        }
      );
  };

  const update002SeasonChallengerTeamTotalS22023 = () => {
    console.log("002 Season Challenger Team");

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Team%20Standings%20-%20Challenger%20Season'!A1:T?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);

          updateDoc(
            doc(db, "002SeasonChallengerTeamTotalS22023", "PNQ47asxkCamCLPj4kNZ"),
            {
              result: JSON.stringify(result),
            }
          );
        },
        (error) => {
          console.log("unable to update Challenger Team Total 002.");
        }
      );
  };

  const update002SeasonAllTeamTotalS22023 = () => {
    console.log("002 Season Challenger Team");

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Team%20Standings%20-%20League%20Season'!A1:W?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);

          updateDoc(doc(db, "002SeasonAllTeamTotalS22023", "T4Rs50ABAg4Wv2X57Jtc"), {
            result: JSON.stringify(result),
          });
        },
        (error) => {
          console.log("unable to update Challenger Team Total 002.");
        }
      );
  };

  //SEASON 1
  const update002ChallengerTeamGroup = () => {
    console.log("002 Challenger Team Group");
    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1GFl30Z-oVPgAFYGFpEqzfi7FKJuWO0T58k4OlUr9uF4/values/'Team%20Standings%20-%20Challenger%20Group%20Stage'!A1:O?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          updateDoc(doc(db, "002ChallengerTeamGroup", "0Ks9njMJ0Ek350cXQEiH"), {
            result: JSON.stringify(result),
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("unable to update Challenger Team Group 002.");
        }
      );
  };

  const update002ChallengerTeamTotal = () => {
    console.log("002 Challenger Team Total");

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1GFl30Z-oVPgAFYGFpEqzfi7FKJuWO0T58k4OlUr9uF4/values/'Team%20Standings%20-%20Challenger%20Total'!A1:P?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          updateDoc(doc(db, "002ChallengerTeamTotal", "fzUDS87U5K3nsB01UINM"), {
            result: JSON.stringify(result),
          });
        },
        (error) => {
          console.log("unable to update Challenger Team Total 002.");
        }
      );
  };

  const update002ChallengerPlayerTotal = () => {
    console.log("002 Challenger Player");

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1GFl30Z-oVPgAFYGFpEqzfi7FKJuWO0T58k4OlUr9uF4/values/'Player%20Standings%20-%20Challenger%20Total'!A1:V?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          updateDoc(
            doc(db, "002ChallengerPlayerTotal", "AUNQir8Bx6EZka5YkdUJ"),
            {
              result: JSON.stringify(result),
            }
          );
        },
        (error) => {
          console.log("unable to update Challenger Player Total 002.");
        }
      );
  };

  const update002PremierTeamGroup = () => {
    console.log("002 Premier Team Group");

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1GFl30Z-oVPgAFYGFpEqzfi7FKJuWO0T58k4OlUr9uF4/values/'Team%20Standings%20-%20Premier%20Group%20Stage'!A1:O?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          updateDoc(doc(db, "002PremierTeamGroup", "PHY550ZE65HL74l1tdwY"), {
            result: JSON.stringify(result),
          });
        },
        (error) => {
          console.log("unable to update Premier Team Group 002.");
        }
      );
  };

  const update002PremierTeamTotal = () => {
    console.log("002 Premier Team Total");

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1GFl30Z-oVPgAFYGFpEqzfi7FKJuWO0T58k4OlUr9uF4/values/'Team%20Standings%20-%20Premier%20Total'!A1:P?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          updateDoc(doc(db, "002PremierTeamTotal", "s1hzpalV4AAenzPFFH86"), {
            result: JSON.stringify(result),
          });
        },
        (error) => {
          console.log("unable to update Premier Team Total 002.");
        }
      );
  };

  const update002PremierPlayerTotal = () => {
    console.log("002 Premier Player");

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1GFl30Z-oVPgAFYGFpEqzfi7FKJuWO0T58k4OlUr9uF4/values/'Player%20Standings%20-%20Premier%20Total'!A1:V?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);

          updateDoc(doc(db, "002PremierPlayerTotal", "8gDRXX3KTk1GdjUGyJBy"), {
            result: JSON.stringify(result),
          });
        },
        (error) => {
          console.log("unable to update Premier Player Total 002.");
        }
      );
  };

  const update002SeasonPremierTeamTotal = () => {
    console.log("002 Season Premier Team");

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1GFl30Z-oVPgAFYGFpEqzfi7FKJuWO0T58k4OlUr9uF4/values/'Team%20Standings%20-%20Premier%20Season'!A1:T?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);

          updateDoc(
            doc(db, "002SeasonPremierTeamTotal", "fI5qadCK9dTpbyLAoEtU"),
            {
              result: JSON.stringify(result),
            }
          );
        },
        (error) => {
          console.log("unable to update Premier Team Total 002.");
        }
      );
  };

  const update002SeasonChallengerTeamTotal = () => {
    console.log("002 Season Challenger Team");

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1GFl30Z-oVPgAFYGFpEqzfi7FKJuWO0T58k4OlUr9uF4/values/'Team%20Standings%20-%20Challenger%20Season'!A1:T?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);

          updateDoc(
            doc(db, "002SeasonChallengerTeamTotal", "XcZrFR2Mx36Jn4hlNlpm"),
            {
              result: JSON.stringify(result),
            }
          );
        },
        (error) => {
          console.log("unable to update Challenger Team Total 002.");
        }
      );
  };

  const update002SeasonAllTeamTotal = () => {
    console.log("002 Season Challenger Team");

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1GFl30Z-oVPgAFYGFpEqzfi7FKJuWO0T58k4OlUr9uF4/values/'Team%20Standings%20-%20League%20Season'!A1:T?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);

          updateDoc(doc(db, "002SeasonAllTeamTotal", "0mwYCYulIHSqyClHPhYo"), {
            result: JSON.stringify(result),
          });
        },
        (error) => {
          console.log("unable to update Challenger Team Total 002.");
        }
      );
  };

  const endBroadcast = async () => {
    setShow(false);
    // console.log("broadcast ended");
    setLive(false);
    await updateDoc(doc(db, "mlpmatches", matchID), {
      live: false,
      status: "paused",
    });
  };

  const startBroadcast = async () => {
    // console.log("broadcast started");
    setLive(true);
    await updateDoc(doc(db, "mlpmatches", matchID), {
      live: true,
      status: "in progress",
    });
  };

  const setOrderW = async () => {
    await updateDoc(doc(db, "mlpmatches", matchID), {
      endTime: "W",
    });
  };

  const setOrderM = async () => {
    await updateDoc(doc(db, "mlpmatches", matchID), {
      endTime: "M",
    });
  };

  return (
    <>
      <Button size="sm" variant="success" onClick={handleShow}>
        Go Live
      </Button>

      <Modal show={show} onHide={handleButtonClick}>
        <Modal.Header>
          <Modal.Title>{liveState ? <Live /> : ""}</Modal.Title>
          <ButtonGroup aria-label="Basic example">
            <Button size="sm" variant="danger" onClick={startBroadcast}>
              Start Broadcast
            </Button>
            <Button size="sm" variant="dark" onClick={endBroadcast}>
              Pause
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example">
            <Button style={{borderRadius: "50px"}}  size="sm" variant="light" onClick={setOrderM}>
              Men's First
            </Button>
            <Button style={{borderRadius: "50px"}}  size="sm" variant="light" onClick={setOrderW}>
              Women's First
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example">
            <Button size="sm" variant="primary" onClick={handleClose}>
              End Match
            </Button>
          </ButtonGroup>
        </Modal.Header>
        <Modal.Body>
          <AdminMatchLayout matchDetails={matchDetails} matchID={matchID} />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            End Match
          </Button>
        </Modal.Footer> */}{" "}
      </Modal>
    </>
  );
};
