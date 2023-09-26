import Button from "react-bootstrap/Button";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase-config";

export const DeleteMatch = (props) => {
  const { matchID, status } = props;

  const handleButtonClick = (e) => {
    const choice = window.confirm(
      "Are you sure you want to delete everything?"
    );
    if (choice) {
      const docRef = doc(db, "mlpmatches", matchID);
      deleteDoc(docRef);
    }
  };

  return (
    <div className="delete-match-btn">
      {status === "submitted" ? (
        <Button size="sm" onClick={handleButtonClick} variant="danger" disabled>
          Submitted
        </Button>
      ) : (
        <Button size="sm" onClick={handleButtonClick} variant="danger">
          Delete
        </Button>
      )}
    </div>
  );
};
