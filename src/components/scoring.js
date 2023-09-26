import { db } from "../firebase-config";
import { doc, updateDoc } from "firebase/firestore";

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
    "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Team%20Standings%20-%20Challenger%20Group%20Stage'!A1:O?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
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
    "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Team%20Standings%20-%20Challenger%20Total'!A1:P?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
  )
    .then((res) => res.json())
    .then(
      (result) => {
        updateDoc(doc(db, "002ChallengerTeamTotal", "fzUDS87U5K3nsB01UINM"), {
          result: JSON.stringify(result),
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log("unable to update Challenger Team Total 002.");
      }
    );
};

const update002ChallengerPlayerTotal = () => {
  console.log("002 Challenger Player");

  fetch(
    "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Player%20Standings%20-%20Challenger%20Total'!A1:V?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
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
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log("unable to update Challenger Player Total 002.");
      }
    );
};

const update002PremierTeamGroup = () => {
  console.log("002 Premier Team Group");

  fetch(
    "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Team%20Standings%20-%20Premier%20Group%20Stage'!A1:O?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
  )
    .then((res) => res.json())
    .then(
      (result) => {
        updateDoc(doc(db, "002PremierTeamGroup", "PHY550ZE65HL74l1tdwY"), {
          result: JSON.stringify(result),
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log("unable to update Premier Team Group 002.");
      }
    );
};

const update002PremierTeamTotal = () => {
  console.log("002 Premier Team Total");

  fetch(
    "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Team%20Standings%20-%20Premier%20Total'!A1:P?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
  )
    .then((res) => res.json())
    .then(
      (result) => {
        updateDoc(doc(db, "002PremierTeamTotal", "s1hzpalV4AAenzPFFH86"), {
          result: JSON.stringify(result),
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log("unable to update Premier Team Total 002.");
      }
    );
};

const update002PremierPlayerTotal = () => {
  console.log("002 Premier Player");

  fetch(
    "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Player%20Standings%20-%20Premier%20Total'!A1:V?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
  )
    .then((res) => res.json())
    .then(
      (result) => {
        console.log(result);

        updateDoc(doc(db, "002PremierPlayerTotal", "8gDRXX3KTk1GdjUGyJBy"), {
          result: JSON.stringify(result),
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log("unable to update Premier Player Total 002.");
      }
    );
};

const update002SeasonPremierTeamTotal = () => {
  console.log("002 Season Premier Team");

  fetch(
    "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Team%20Standings%20-%20Premier%20Season'!A1:T?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
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
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log("unable to update Premier Team Total 002.");
      }
    );
};

const update002SeasonChallengerTeamTotal = () => {
  console.log("002 Season Challenger Team");

  fetch(
    "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Team%20Standings%20-%20Challenger%20Season'!A1:T?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
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
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log("unable to update Challenger Team Total 002.");
      }
    );
};

const update002SeasonAllTeamTotal = () => {
  console.log("002 Season Challenger Team");

  fetch(
    "https://sheets.googleapis.com/v4/spreadsheets/1q0zEYOOKUN_RGbATZZibBnYZxTBeIX-Ed45QhDMLT5Y/values/'Team%20Standings%20-%20League%20Season'!A1:T?key=AIzaSyAmc8-bSlfFbiTZEW-FgF74n9vuiR9iqXM"
  )
    .then((res) => res.json())
    .then(
      (result) => {
        console.log(result);

        updateDoc(doc(db, "002SeasonAllTeamTotal", "0mwYCYulIHSqyClHPhYo"), {
          result: JSON.stringify(result),
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log("unable to update Challenger Team Total 002.");
      }
    );
};


const addScore = async (matchType, matchDetails, matchID, team, score) => {
  if (matchType === "WD" && team === "1") {
    await updateDoc(doc(db, "mlpmatches", matchID), {
      "WD.team1Score": matchDetails.WD.team1Score + score,
    });
  } else if (matchType === "WD" && team === "2") {
    await updateDoc(doc(db, "mlpmatches", matchID), {
      "WD.team2Score": matchDetails.WD.team2Score + score,
    });
  } else if (matchType === "MD" && team === "1") {
    await updateDoc(doc(db, "mlpmatches", matchID), {
      "MD.team1Score": matchDetails.MD.team1Score + score,
    });
  } else if (matchType === "MD" && team === "2") {
    await updateDoc(doc(db, "mlpmatches", matchID), {
      "MD.team2Score": matchDetails.MD.team2Score + score,
    });
  } else if (matchType === "MX1" && team === "1") {
    await updateDoc(doc(db, "mlpmatches", matchID), {
      "MX1.team1Score": matchDetails.MX1.team1Score + score,
    });
  } else if (matchType === "MX1" && team === "2") {
    await updateDoc(doc(db, "mlpmatches", matchID), {
      "MX1.team2Score": matchDetails.MX1.team2Score + score,
    });
  } else if (matchType === "MX2" && team === "1") {
    await updateDoc(doc(db, "mlpmatches", matchID), {
      "MX2.team1Score": matchDetails.MX2.team1Score + score,
    });
  } else if (matchType === "MX2" && team === "2") {
    await updateDoc(doc(db, "mlpmatches", matchID), {
      "MX2.team2Score": matchDetails.MX2.team2Score + score,
    });
  } else if (matchType === "DB" && team === "2") {
    await updateDoc(doc(db, "mlpmatches", matchID), {
      "DB.team2Score": matchDetails.DB.team2Score + score,
    });
  } else if (matchType === "DB" && team === "1") {
    await updateDoc(doc(db, "mlpmatches", matchID), {
      "DB.team1Score": matchDetails.DB.team1Score + score,
    });
  }
};

const updateWinner = async (matchType, matchDetails, matchID, team, e) => {
  // update002ChallengerTeamGroup();
  // update002ChallengerTeamTotal();
  // update002ChallengerPlayerTotal();
  // update002PremierTeamGroup();
  // update002PremierTeamTotal();
  // update002PremierPlayerTotal();
  // update002SeasonPremierTeamTotal();
  // update002SeasonChallengerTeamTotal();
  // update002SeasonAllTeamTotal();
  if (matchType === "WD" && team === "1") {
    if (e.target.checked) {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "WD.winner": 1,
        team1Score: matchDetails.team1Score + 1,
      });
    } else {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "WD.winner": 0,
        team1Score: matchDetails.team1Score - 1,
      });
    }
  } else if (matchType === "WD" && team === "2") {
    if (e.target.checked) {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "WD.winner": 2,
        team2Score: matchDetails.team2Score + 1,
      });
    } else {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "WD.winner": 0,
        team2Score: matchDetails.team2Score - 1,
      });
    }
  }

  if (matchType === "MD" && team === "1") {
    if (e.target.checked) {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "MD.winner": 1,
        team1Score: matchDetails.team1Score + 1,
      });
    } else {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "MD.winner": 0,
        team1Score: matchDetails.team1Score - 1,
      });
    }
  } else if (matchType === "MD" && team === "2") {
    if (e.target.checked) {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "MD.winner": 2,
        team2Score: matchDetails.team2Score + 1,
      });
    } else {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "MD.winner": 0,
        team2Score: matchDetails.team2Score - 1,
      });
    }
  }

  if (matchType === "MX1" && team === "1") {
    if (e.target.checked) {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "MX1.winner": 1,
        team1Score: matchDetails.team1Score + 1,
      });
    } else {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "MX1.winner": 0,
        team1Score: matchDetails.team1Score - 1,
      });
    }
  } else if (matchType === "MX1" && team === "2") {
    if (e.target.checked) {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "MX1.winner": 2,
        team2Score: matchDetails.team2Score + 1,
      });
    } else {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "MX1.winner": 0,
        team2Score: matchDetails.team2Score - 1,
      });
    }
  }

  if (matchType === "MX2" && team === "1") {
    if (e.target.checked) {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "MX2.winner": 1,
        team1Score: matchDetails.team1Score + 1,
      });
    } else {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "MX2.winner": 0,
        team1Score: matchDetails.team1Score - 1,
      });
    }
  } else if (matchType === "MX2" && team === "2") {
    if (e.target.checked) {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "MX2.winner": 2,
        team2Score: matchDetails.team2Score + 1,
      });
    } else {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "MX2.winner": 0,
        team2Score: matchDetails.team2Score - 1,
      });
    }
  } else if (matchType === "DB" && team === "1") {
    if (e.target.checked) {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "DB.winner": 1,
        team1Score: matchDetails.team1Score + 1,
      });
    } else {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "DB.winner": 0,
        team1Score: matchDetails.team1Score - 1,
      });
    }
  } else if (matchType === "DB" && team === "2") {
    if (e.target.checked) {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "DB.winner": 2,
        team2Score: matchDetails.team2Score + 1,
      });
    } else {
      await updateDoc(doc(db, "mlpmatches", matchID), {
        "DB.winner": 0,
        team2Score: matchDetails.team2Score - 1,
      });
    }
  }
};

const updateTime = async (matchID, time) => {
  await updateDoc(doc(db, "mlpmatches", matchID), {
    "startTime": time,
  });
}

export { addScore, updateWinner, updateTime };
