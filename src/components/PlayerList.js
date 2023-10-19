import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useEffect } from "react";

import { db } from "../firebase-config";
import { collection, where, query, onSnapshot } from "firebase/firestore";

import { addPlayer } from "./AddPlayer.js";

export const PlayerList = (props) => {
  const { setValue, setFunction, event, team, match, matchPlayer } = props;
  const listTeams = collection(db, "mlpplayers");
  const [teams, setTeams] = useState([]);

  const updatePlayer = (updatedPlayer) => {
    addPlayer(match, matchPlayer, updatedPlayer);
    setFunction(updatedPlayer);
  };

  useEffect(() => {
    const queryTeams = query(
      listTeams,
      where("eventID", "==", event ? event : ""),
      where("teamName", "==", team ? team : "")
    );

    const unsubscribe = onSnapshot(queryTeams, (snapshot) => {
      let teams = [];
      snapshot.forEach((doc) => {
        teams.push({ ...doc.data(), id: doc.id });
      });
      setTeams(teams);
    });
    return () => unsubscribe();
  }, []);
  return (
    <Form.Group controlId="formBasicSelect">
      <Form.Control
        as="select"
        value={setValue}
        onChange={(e) => updatePlayer(e.target.value)}
      >
        <option key="blankChoice" hidden>
          Select a Player
        </option>
        {teams.map((team) => (
          <option>
            {team.firstName} {team.lastName}
          </option>
        ))}
        {/* <option value="ATX Pickleballers">ATX Pickleballers</option>
        <option value="California BLQK Bears">CA BLQK Bears</option>
        <option value="Florida Smash">FL Smash</option>
        <option value="LA Mad Drops">LA Mad Drops</option>
        <option value="Milwaukee Mashers">Milwaukee Mashers</option>
        <option value="New Jersey 5's">New Jersey 5's</option>
        <option value="NY Hustlers">NY Hustlers</option>
        <option value="Seattle Pioneers">Seattle Pioneers</option>
        <option value="Socal Hard Eights">Socal Hard Eights</option>
        <option value="STL Shock">STL Shock</option>
        <option value="AZ Drive">AZ Drive</option>
        <option value="ATL Bouncers">ATL Bouncers</option>
        <option value="Bay Area Breakers">Bay Area Breakers</option>
        <option value="Brooklyn Aces">Brooklyn Aces</option>
        <option value="Chicago Slice">Chicago Slice</option>
        <option value="Columbus Sliders">Columbus Sliders</option>
        <option value="D.C. Pickleball Team">D.C. Pickleball Team</option>
        <option value="Dallas Picklebal Club">Dallas Picklebal Club</option>
        <option value="Frisco Pandas">Frisco Pandas</option>
        <option value="Miami Pickleball Club">Miami Pickleball Club</option>
        <option value="Orlando Squeeze">Orlando Squeeze</option>
        <option value="Texas Ranchers">Texas Ranchers</option>
        <option value="Utah Black Diamonds">Utah Black Diamonds</option> */}
      </Form.Control>
    </Form.Group>
  );
};
