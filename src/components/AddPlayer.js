import { db } from "../firebase-config";
import { doc, updateDoc } from "firebase/firestore";

const addPlayer = async (match, matchPlayer, updatedPlayer) => {
  if (matchPlayer === "wdt1p1") {
    updateDoc(doc(db, "mlpmatches", match), {
      "WD.team1Player1": updatedPlayer,
    });
  }
  if (matchPlayer === "wdt1p2") {
    updateDoc(doc(db, "mlpmatches", match), {
      "WD.team1Player2": updatedPlayer,
    });
  }
  if (matchPlayer === "wdt2p1") {
    updateDoc(doc(db, "mlpmatches", match), {
      "WD.team2Player1": updatedPlayer,
    });
  }
  if (matchPlayer === "wdt2p2") {
    updateDoc(doc(db, "mlpmatches", match), {
      "WD.team2Player2": updatedPlayer,
    });
  }
  if (matchPlayer === "mdt1p1") {
    updateDoc(doc(db, "mlpmatches", match), {
      "MD.team1Player1": updatedPlayer,
    });
  }
  if (matchPlayer === "mdt1p2") {
    updateDoc(doc(db, "mlpmatches", match), {
      "MD.team1Player2": updatedPlayer,
    });
  }
  if (matchPlayer === "mdt2p1") {
    updateDoc(doc(db, "mlpmatches", match), {
      "MD.team2Player1": updatedPlayer,
    });
  }
  if (matchPlayer === "mdt2p2") {
    updateDoc(doc(db, "mlpmatches", match), {
      "MD.team2Player2": updatedPlayer,
    });
  }
  if (matchPlayer === "mx1t1p1") {
    updateDoc(doc(db, "mlpmatches", match), {
      "MX1.team1Player1": updatedPlayer,
    });
  }
  if (matchPlayer === "mx1t1p2") {
    updateDoc(doc(db, "mlpmatches", match), {
      "MX1.team1Player2": updatedPlayer,
    });
  }
  if (matchPlayer === "mx1t2p1") {
    updateDoc(doc(db, "mlpmatches", match), {
      "MX1.team2Player1": updatedPlayer,
    });
  }
  if (matchPlayer === "mx1t2p2") {
    updateDoc(doc(db, "mlpmatches", match), {
      "MX1.team2Player2": updatedPlayer,
    });
  }
  if (matchPlayer === "mx2t1p1") {
    updateDoc(doc(db, "mlpmatches", match), {
      "MX2.team1Player1": updatedPlayer,
    });
  }
  if (matchPlayer === "mx2t1p2") {
    updateDoc(doc(db, "mlpmatches", match), {
      "MX2.team1Player2": updatedPlayer,
    });
  }
  if (matchPlayer === "mx2t2p1") {
    updateDoc(doc(db, "mlpmatches", match), {
      "MX2.team2Player1": updatedPlayer,
    });
  }
  if (matchPlayer === "mx2t2p2") {
    updateDoc(doc(db, "mlpmatches", match), {
      "MX2.team2Player2": updatedPlayer,
    });
  }
};

export { addPlayer };
