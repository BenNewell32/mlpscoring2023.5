import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import LogoImage from "./Capture2.svg";

import { TabsDivision } from "./TabsDivision";
import { TabsTop } from "./TabsTop";

export const HeaderCurrentTournament = (props) => {
  var sectionStyle = {
    backgroundImage: `url(${LogoImage})`,
  };

  return (
    <>
      <style type="text/css">
        {`
    .header-title {
      font-size:100;
          }
    .btn-premier{
      background-color: #ef612d;
      color: #0a2137;
      font-weight: bold;
    }
    .btn-challenger{
      background-color: white;
      font-color: white;
      font-weight: bold;
    }

    .btn-challenger:hover{
      border-color: white;
      border-style: solid;
      border-width: 1px;
      color: white;
      font-weight: bold;
      margin: 2px;
    }

    .btn-premier:hover{
      border-color: white;
      border-style: solid;
      border-width: 1px;
      color: white;
      font-weight: bold;
      margin: 2px;
    }
    `}{" "}
      </style>
      {/* <div
        align="center"
        style={{
          // maxWidth: "1200px",
          paddingBottom: "5px",
          // backgroundImage: `url(${background})`
          backgroundImage:
            "linear-gradient(to bottom, transparent 0%, white 95%)," +
            `url(${background})`,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            paddingTop: "20px",
            paddingBottom: "10px",
          }}
        >
          <div style={{ padding: "50px" }}>
            <img
              style={{ maxWidth: "600px" }}
              src={LogoImage}
              alt="React Logo"
            />
          </div>
          <div
            align="center"
            style={{
              fontSize: "calc(1.5em + 1.5vw)",
              color: "#ef612d",
              fontFamily: "kanit",
            }}
          >
            SCORING AND STANDINGS
          </div>
        </div>
      </div> */}
      {/* <TabsDivision /> */}
      <div style={{height: "10px", backgroundColor: "#092036"}}><div style={{borderBottom: 'solid', borderWidth: "1px", borderColor: "#fc6044"}}></div></div>
      <TabsTop />
      
    </>
  );
};
