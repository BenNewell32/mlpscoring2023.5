import Form from "react-bootstrap/Form";
export const RoundList = (props) => {
  const { setValue, setFunction } = props;

  return (
    <Form.Group controlId="formBasicSelect">
      <Form.Control
        as="select"
        value={setValue}
        onChange={(e) => setFunction(e.target.value)}
      >
        <option key="blankChoice" hidden>
          Select a Round
        </option>
        <option value="GROUP A">Group A</option>
        <option value="GROUP B">Group B</option>
        <option value="GROUP C">Group C</option>
        <option value="QUARTERFINALS 1">Quarterfinals 1 (w/ bye)</option>
        <option value="QUARTERFINALS 2">Quarterfinals 2</option>
        <option value="QUARTERFINALS 3">Quarterfinals 3</option>
        <option value="QUARTERFINALS 4">Quarterfinals 4 (w/ bye)</option>
        <option value="SIMIFINALS 1">Simifinals 1</option>
        <option value="SIMIFINALS 2">Simifinals 2</option>
        <option value="FINALS">Finals</option>
        <option value="SEASON FINALS">Season Finals</option>
      </Form.Control>
    </Form.Group>
  );
};
