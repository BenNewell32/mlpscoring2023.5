import {useState} from "react";
import {useEffect} from "react";
import {Live} from "./Live";

import {MatchLayout} from "./MatchLayout";

import {db} from "../firebase-config";
import {collection, where, query, onSnapshot, getDocs} from "firebase/firestore";

export const Matches = (props) => {
    const {match,live} = props;
    const listMatches = collection(db, "mlpLiveMatches");
    const [matches, setMatches] = useState([]);
    // useEffect(() => {
    //     const queryMatches = query(listMatches, where("divisionID", "==", division), where("eventID", "==", location), where("live", "==", true), where("roundID", roundSelector, roundSelect));

        // const unsubscribe = onSnapshot(queryMatches, (snapshot) => {
        //     let matches = [];
        //     snapshot.forEach((doc) => {
        //         matches.push({
        //             ...doc.data(),
        //             id: doc.id
        //         });
        //     });
        //     setMatches(matches);
        //     matches.sort((a, b) => {
        //         if (a.date === b.date) {
        //             // console.log(a.startTime.replace(":", ""));
        //             // console.log(b.startTime.replace(":", ""));
        //             return Number(a.startTime.replace(":", "")) < Number(b.startTime.replace(":", "")) ? -1 : 1;
        //         } else {
        //             return a.date < b.date ? -1 : 1;
        //         }
        //     });
        // });
        // return() => unsubscribe();

    // }, []);

    
    useEffect(() => {
        const queryMatches = query(listMatches);

        const unsubscribe = onSnapshot(queryMatches, (snapshot) => {
            let matches = [];
            snapshot.forEach((doc) => {
                matches.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            setMatches(matches);
            // console.log(matches);
        });
        return() => unsubscribe();

    }, []);

    return (
        <div style={
                {
                    paddingBottom: "5px",
                    paddingTop: "5px",
                    zoom: "100%"
                }
            }
            className=" justify-content-around">
            {
            matches.length > 0 ? (
                <div>
                    <div>
                        <div> {
                            matches[0].matches.map((match) => (
                                <>
                                    <MatchLayout match={match} live={true}/>                                
                                    {/* {JSON.stringify(match)} */}
                                    </>
                            ))
                        } </div>
                    </div>
                </div>
            ) : ("")
        } 
        </div>
    );
};
