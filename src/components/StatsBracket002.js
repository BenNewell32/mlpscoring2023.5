import Image from "react-bootstrap/Image";
import { useEffect } from "react";
import challengerpic from "./bchallenger.jpg";
// import premierpic from './bpremier.png'
// import challengerpic from './zbchallenger.jpg'
import premierpic from "./bpremier.jpg";

export const StatsBracket002 = (props) => {
  const { division } = props;

  return window.innerWidth < 760 ? (
    <div style={{ overflow: "auto" }}>
      <div
        style={{
          paddingBottom: "30px",
          minWidth: "600px",
          maxWidth: "1200px",
        }}
      >
        {division === "Challenger" ? (
          <img
            width="500px"
            src={"https://www.liftkc.com/uploads/mlp2023.5.challenger.jpg"}
            alt="ground"
          />
        ) : (
          <img
            width="500px"
            src={"https://www.liftkc.com/uploads/mlp2023.5.premier.jpg"}
            alt="ground"
          />
        )}
      </div>
    </div>
  ) : (
    <div style={{ overflow: "auto" }}>
      <div
        style={{
          paddingBottom: "30px",
          minWidth: "600px",
          maxWidth: "1200px",
        }}
      >
        {division === "Challenger" ? (
          <img
            width="1150px"
            src={"https://www.liftkc.com/uploads/mlp2023.5.challenger.jpg"}
            alt="ground"
          />
        ) : (
          <img
            width="1150px"
            src={"https://www.liftkc.com/uploads/mlp2023.5.premier.jpg"}
            alt="ground"
          />
        )}
      </div>
    </div>
  );
};
