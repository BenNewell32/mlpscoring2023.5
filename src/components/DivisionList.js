import Form from "react-bootstrap/Form";
export const DivisionList = (props) => {
  const { setValue, setFunction } = props;

  return (
    <Form.Group controlId="formBasicSelect">
      <Form.Control
        as="select"
        value={setValue}
        onChange={(e) => setFunction(e.target.value)}
      >
        <option key="blankChoice" hidden>
          Select a Division
        </option>
        <option value="Premier">Premier</option>
        <option value="Challenger">Challenger</option>
      </Form.Control>
    </Form.Group>
  );
};
