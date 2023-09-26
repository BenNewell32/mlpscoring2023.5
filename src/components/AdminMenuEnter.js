import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

export const AdminMenuEnter = (props) => {
  const { setView } = props;
  return (
    <div style={{
      textAlign: "center",
      alignContent: "center",
      justifyContent: "center"
    }}
    className="d-grid gap-2">
      <Button
        onClick={() => {
          setView(false);
        }}
        variant="success"
        size="sm"
        style={{
          zIndex:"99999",
          width: "200px",
          marginTop:"10px",
        }}
      >
        <CgWebsite size={20}/>
        &nbsp; Back to Site
      </Button>
    </div>
  );
};
