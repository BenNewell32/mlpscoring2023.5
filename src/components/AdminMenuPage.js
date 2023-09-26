import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { BsFillGearFill } from "react-icons/bs";

export const AdminMenuPage = (props) => {
  const { setView } = props;
  return (
    <div style={{
      backgroundColor:"#092036",
      textAlign: "center",
      alignContent: "center",
      justifyContent: "center"
    }}
      className="d-grid gap-2">
      <Button
        onClick={() => {
          setView(true);
        }}
        // variant="danger"
        size="sm"
        style={{
          zIndex:"99999",
          width: "200px",
          marginTop:"10px",
          backgroundColor:"#f1b2ac",
          color:"white",

        }}
      >
        <BsFillGearFill size={20}/>
        &nbsp; Admins
      </Button>
    </div>
  );
};
