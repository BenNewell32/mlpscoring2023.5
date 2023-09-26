import {db} from "../firebase-config";
import {collection, where, query, onSnapshot, getDocs} from "firebase/firestore";
import {doc, updateDoc} from "firebase/firestore";
let div = "";
let ev = "";

const recalculateStandings = async (division, event) => {
    div = division;
    ev = event;
    const listMatches = collection(db, "mlpmatches");
    let matchStandings = [];

    const queryMatches = query(listMatches, where("divisionID", "==", division), where("eventID", "==", event), where("status", "==", "submitted"));

    const unsubscribe = onSnapshot(queryMatches, (snapshot) => {
        let matches = [];
        snapshot.forEach((doc) => {
            matches.push({
                ...doc.data(),
                id: doc.id
            });
        });
        matchStandings = matches;
        scoreTeams(matchStandings);
        scorePlayers(matchStandings);
    });
    return() => unsubscribe();
};

const scoreTeams = async (matchStandings, division, event) => {
    let teams = [];
    let scores = [];
    for (let i = 0; i < matchStandings.length; i++) {

        if (teams.includes(matchStandings[i].team1)) {
            console.log("team already exists");
            for (let s = 0; s < scores.length; s++) { // console.log(scores[s].team);
                console.log(matchStandings[i].team1);
                if (scores[s].team === matchStandings[i].team1) {
                    if (scores[s].roundID===""){
                        scores[s].roundID=matchStandings[i].roundID
                    }
                    if (matchStandings[i].team1Score > matchStandings[i].team2Score) {
                            scores[s].matchesFor += 1;
                            console.log('team 1 adding match won +1 ')
                        }

                        if (matchStandings[i].team1Score<matchStandings[i].team2Score) {
                        scores[s].matchesAgainst += 1;
                        console.log('team 1 adding match loss +1 ')
                    }

                    scores[s].gamesFor += matchStandings[i].team1Score;
                    scores[s].gamesAgainst += matchStandings[i].team2Score;
                    let pointsForTotal = matchStandings[i].WD.team1Score + matchStandings[i].MD.team1Score + matchStandings[i].MX1.team1Score + matchStandings[i].MX2.team1Score + matchStandings[i].DB.team1Score;
                    let pointsAgainstTotal = matchStandings[i].WD.team2Score + matchStandings[i].MD.team2Score + matchStandings[i].MX1.team2Score + matchStandings[i].MX2.team2Score + matchStandings[i].DB.team2Score;
                    scores[s].pointsFor += pointsForTotal;
                    scores[s].pointsAgainst += pointsAgainstTotal;
                }
            }
        }
        if (! teams.includes(matchStandings[i].team1)) {
            let pointsForTotal = matchStandings[i].WD.team1Score + matchStandings[i].MD.team1Score + matchStandings[i].MX1.team1Score + matchStandings[i].MX2.team1Score + matchStandings[i].DB.team1Score;
            let pointsAgainstTotal = matchStandings[i].WD.team2Score + matchStandings[i].MD.team2Score + matchStandings[i].MX1.team2Score + matchStandings[i].MX2.team2Score + matchStandings[i].DB.team2Score;
            teams.push(matchStandings[i].team1);
            scores.push({
                team: matchStandings[i].team1, 
                matchesFor: matchStandings[i].team1Score> matchStandings[i].team2Score ? 1 : 0, 
                matchesAgainst : matchStandings[i].team1Score < matchStandings[i].team2Score ? 1 : 0, 
                gamesFor : matchStandings[i].team1Score, 
                gamesAgainst : matchStandings[i].team2Score, 
                pointsFor : pointsForTotal, 
                pointsAgainst : pointsAgainstTotal, 
                winPercent : null, 
                diff : null, 
                roundID: matchStandings[i].roundID.includes("GROUP")? matchStandings[i].roundID : "",
                });
            }

            if (teams.includes(matchStandings[i].team2)) { // console.log("team already exists");
                for (let s = 0; s < scores.length; s++) {
                    // console.log(scores[s].team);
                    // console.log(matchStandings[i].team2);
                    if (scores[s].team === matchStandings[i].team2) {
                        if (scores[s].roundID===""){
                            scores[s].roundID=matchStandings[i].roundID
                        }
                        if (matchStandings[i].team2Score > matchStandings[i].team1Score) {
                            scores[s].matchesFor += 1;
                            console.log('team 2 adding match won +1 ')
                        }

                        if (matchStandings[i].team2Score<matchStandings[i].team1Score) {
                        scores[s].matchesAgainst += 1;
                        console.log('team 2 adding match loss +1 ')

                    }
                    scores[s].gamesFor += matchStandings[i].team2Score;
                    scores[s].gamesAgainst += matchStandings[i].team1Score;
                    let pointsForTotal = matchStandings[i].WD.team2Score + matchStandings[i].MD.team2Score + matchStandings[i].MX1.team2Score + matchStandings[i].MX2.team2Score + matchStandings[i].DB.team2Score;
                    let pointsAgainstTotal = matchStandings[i].WD.team1Score + matchStandings[i].MD.team1Score + matchStandings[i].MX1.team1Score + matchStandings[i].MX2.team1Score + matchStandings[i].DB.team1Score;
                    scores[s].pointsFor += pointsForTotal;
                    scores[s].pointsAgainst += pointsAgainstTotal;
                }
            }
        }
        if (! teams.includes(matchStandings[i].team2)) {
            let pointsForTotal = matchStandings[i].WD.team2Score + matchStandings[i].MD.team2Score + matchStandings[i].MX1.team2Score + matchStandings[i].MX2.team2Score + matchStandings[i].DB.team2Score;
            let pointsAgainstTotal = matchStandings[i].WD.team1Score + matchStandings[i].MD.team1Score + matchStandings[i].MX1.team1Score + matchStandings[i].MX2.team1Score + matchStandings[i].DB.team1Score;
            teams.push(matchStandings[i].team2);
            scores.push({
                team: matchStandings[i].team2, 
                matchesFor: matchStandings[i].team2Score> matchStandings[i].team1Score ? 1 : 0, 
                matchesAgainst : matchStandings[i].team2Score<matchStandings[i].team1Score ? 1 : 0, 
                gamesFor: matchStandings[i].team2Score, 
                gamesAgainst: matchStandings[i].team1Score, 
                pointsFor: pointsForTotal, 
                pointsAgainst: pointsAgainstTotal, 
                winPercent: null, 
                diff: null, 
                roundID: matchStandings[i].roundID.includes("GROUP")? matchStandings[i].roundID : ""
            });
        }
    }
    // console.log(JSON.stringify(scores));
    await updateDoc(doc(db, "mlpStandingsTeam", "SanClemente2023" + div), {
        division: div, event: ev, teamRank: scores
    });
};

const scorePlayers = async (matchStandings) => {
    let players = [];
    let scores = [];
    for (let i = 0; i < matchStandings.length; i++) { // WD - TEAM 1 PLAYER 1
    
        //WD TEAM 1 PLAYER 1
        if (players.includes(matchStandings[i].WD.team1Player1)) {
            // console.log(matchStandings[i].WD.team1Player1);
            for (let s = 0; s < scores.length; s++) {
                //console.log(matchStandings[i].WD.team1Player1)
                if (scores[s].name === matchStandings[i].WD.team1Player1) {
                    if (scores[s].roundID===""){
                        scores[s].roundID=matchStandings[i].roundID
                    }
                    if (matchStandings[i].team1Score > matchStandings[i].team2Score) {
                            scores[s].matchesFor += 1;
                            console.log('T1P1 adding match won +1 ')
                        }

                        if (matchStandings[i].team1Score < matchStandings[i].team2Score) {
                        scores[s].matchesAgainst += 1;
                        console.log('T1P1 adding match loss +1 ')
                    }

                    if (matchStandings[i].WD.team1Score > matchStandings[i].WD.team2Score) {
                            scores[s].gamesFor += 1;
                            console.log('T1P1 adding game won +1 ')
                        }

                        if (matchStandings[i].WD.team1Score < matchStandings[i].WD.team2Score) {
                        scores[s].gamesAgainst += 1;
                        console.log('T1P1 adding game loss +1 ')
                    }

                    let pointsForTotal = matchStandings[i].WD.team1Score;
                    let pointsAgainstTotal = matchStandings[i].WD.team2Score;
                    scores[s].pointsFor += pointsForTotal;
                    scores[s].pointsAgainst += pointsAgainstTotal;
                }
            }
        }
        if (!players.includes(matchStandings[i].WD.team1Player1)) {
            let pointsForTotal = matchStandings[i].WD.team1Score;
            let pointsAgainstTotal = matchStandings[i].WD.team2Score;
            players.push(matchStandings[i].WD.team1Player1);
            scores.push({
                name: matchStandings[i].WD.team1Player1,
                matchesFor: matchStandings[i].team1Score> matchStandings[i].team2Score ? 1 : 0, 
                matchesAgainst : matchStandings[i].team1Score < matchStandings[i].team2Score ? 1 : 0, 
                gamesFor : matchStandings[i].WD.team1Score > matchStandings[i].WD.team2Score ? 1 : 0, 
                gamesAgainst : matchStandings[i].WD.team1Score < matchStandings[i].WD.team2Score ? 1 : 0, 
                pointsFor: pointsForTotal,
                pointsAgainst: pointsAgainstTotal,
                winPercent: null,
                diff: null
            });
        }

        //WD TEAM 1 PLAYER 2
        if (players.includes(matchStandings[i].WD.team1Player2)) {
            // console.log(matchStandings[i].WD.team1Player2);
            for (let s = 0; s < scores.length; s++) {
                //console.log(matchStandings[i].WD.team1Player2)
                if (scores[s].name === matchStandings[i].WD.team1Player2) {
                    if (scores[s].roundID===""){
                        scores[s].roundID=matchStandings[i].roundID
                    }
                    if (matchStandings[i].team1Score > matchStandings[i].team2Score) {
                            scores[s].matchesFor += 1;
                            console.log('T1P2 adding match won +1 ')
                        }

                        if (matchStandings[i].team1Score < matchStandings[i].team2Score) {
                        scores[s].matchesAgainst += 1;
                        console.log('T1P2 adding match loss +1 ')
                    }

                    if (matchStandings[i].WD.team1Score > matchStandings[i].WD.team2Score) {
                            scores[s].gamesFor += 1;
                            console.log('T1P2 adding game won +1 ')
                        }

                        if (matchStandings[i].WD.team1Score < matchStandings[i].WD.team2Score) {
                        scores[s].gamesAgainst += 1;
                        console.log('T1P2 adding game loss +1 ')
                    }

                    let pointsForTotal = matchStandings[i].WD.team1Score;
                    let pointsAgainstTotal = matchStandings[i].WD.team2Score;
                    scores[s].pointsFor += pointsForTotal;
                    scores[s].pointsAgainst += pointsAgainstTotal;
                }
            }
        }
        if (!players.includes(matchStandings[i].WD.team1Player2)) {
            let pointsForTotal = matchStandings[i].WD.team1Score;
            let pointsAgainstTotal = matchStandings[i].WD.team2Score;
            players.push(matchStandings[i].WD.team1Player2);
            scores.push({
                name: matchStandings[i].WD.team1Player2,
                matchesFor: matchStandings[i].team1Score> matchStandings[i].team2Score ? 1 : 0, 
                matchesAgainst : matchStandings[i].team1Score < matchStandings[i].team2Score ? 1 : 0, 
                gamesFor : matchStandings[i].WD.team1Score > matchStandings[i].WD.team2Score ? 1 : 0, 
                gamesAgainst : matchStandings[i].WD.team1Score < matchStandings[i].WD.team2Score ? 1 : 0, 
                pointsFor: pointsForTotal,
                pointsAgainst: pointsAgainstTotal,
                winPercent: null,
                diff: null
            });
        }

        //MD TEAM 1 PLAYER 1
        if (players.includes(matchStandings[i].MD.team1Player1)) {
            // console.log(matchStandings[i].MD.team1Player1);
            for (let s = 0; s < scores.length; s++) {
                //console.log(matchStandings[i].MD.team1Player1)
                if (scores[s].name === matchStandings[i].MD.team1Player1) {
                    if (scores[s].roundID===""){
                        scores[s].roundID=matchStandings[i].roundID
                    }
                    if (matchStandings[i].team1Score > matchStandings[i].team2Score) {
                            scores[s].matchesFor += 1;
                            console.log('team 1 adding match won +1 ')
                        }

                        if (matchStandings[i].team1Score < matchStandings[i].team2Score) {
                        scores[s].matchesAgainst += 1;
                        console.log('team 1 adding match loss +1 ')
                    }

                    if (matchStandings[i].MD.team1Score > matchStandings[i].MD.team2Score) {
                            scores[s].gamesFor += 1;
                            console.log('team 1 adding game won +1 ')
                        }

                        if (matchStandings[i].MD.team1Score < matchStandings[i].MD.team2Score) {
                        scores[s].gamesAgainst += 1;
                        console.log('team 1 adding game loss +1 ')
                    }

                    let pointsForTotal = matchStandings[i].MD.team1Score;
                    let pointsAgainstTotal = matchStandings[i].MD.team2Score;
                    scores[s].pointsFor += pointsForTotal;
                    scores[s].pointsAgainst += pointsAgainstTotal;
                }
            }
        }
        if (!players.includes(matchStandings[i].MD.team1Player1)) {
            let pointsForTotal = matchStandings[i].MD.team1Score;
            let pointsAgainstTotal = matchStandings[i].MD.team2Score;
            players.push(matchStandings[i].MD.team1Player1);
            scores.push({
                name: matchStandings[i].MD.team1Player1,
                matchesFor: matchStandings[i].team1Score> matchStandings[i].team2Score ? 1 : 0, 
                matchesAgainst : matchStandings[i].team1Score < matchStandings[i].team2Score ? 1 : 0, 
                gamesFor : matchStandings[i].MD.team1Score > matchStandings[i].MD.team2Score ? 1 : 0, 
                gamesAgainst : matchStandings[i].MD.team1Score < matchStandings[i].MD.team2Score ? 1 : 0, 
                pointsFor: pointsForTotal,
                pointsAgainst: pointsAgainstTotal,
                winPercent: null,
                diff: null
            });
        }

        //MD TEAM 1 PLAYER 2
        if (players.includes(matchStandings[i].MD.team1Player2)) {
            // console.log(matchStandings[i].MD.team1Player2);
            for (let s = 0; s < scores.length; s++) {
                //console.log(matchStandings[i].MD.team1Player2)
                if (scores[s].name === matchStandings[i].MD.team1Player2) {
                    if (scores[s].roundID===""){
                        scores[s].roundID=matchStandings[i].roundID
                    }
                    if (matchStandings[i].team1Score > matchStandings[i].team2Score) {
                            scores[s].matchesFor += 1;
                            console.log('team 1 adding match won +1 ')
                        }

                        if (matchStandings[i].team1Score < matchStandings[i].team2Score) {
                        scores[s].matchesAgainst += 1;
                        console.log('team 1 adding match loss +1 ')
                    }

                    if (matchStandings[i].MD.team1Score > matchStandings[i].MD.team2Score) {
                            scores[s].gamesFor += 1;
                            console.log('team 1 adding game won +1 ')
                        }

                        if (matchStandings[i].MD.team1Score < matchStandings[i].MD.team2Score) {
                        scores[s].gamesAgainst += 1;
                        console.log('team 1 adding game loss +1 ')
                    }

                    let pointsForTotal = matchStandings[i].MD.team1Score;
                    let pointsAgainstTotal = matchStandings[i].MD.team2Score;
                    scores[s].pointsFor += pointsForTotal;
                    scores[s].pointsAgainst += pointsAgainstTotal;
                }
            }
        }
        if (!players.includes(matchStandings[i].MD.team1Player2)) {
            let pointsForTotal = matchStandings[i].MD.team1Score;
            let pointsAgainstTotal = matchStandings[i].MD.team2Score;
            players.push(matchStandings[i].MD.team1Player2);
            scores.push({
                name: matchStandings[i].MD.team1Player2,
                matchesFor: matchStandings[i].team1Score> matchStandings[i].team2Score ? 1 : 0, 
                matchesAgainst : matchStandings[i].team1Score < matchStandings[i].team2Score ? 1 : 0, 
                gamesFor : matchStandings[i].MD.team1Score > matchStandings[i].MD.team2Score ? 1 : 0, 
                gamesAgainst : matchStandings[i].MD.team1Score < matchStandings[i].MD.team2Score ? 1 : 0, 
                pointsFor: pointsForTotal,
                pointsAgainst: pointsAgainstTotal,
                winPercent: null,
                diff: null
            });
        }

        //MX1 TEAM 1 PLAYER 1
        if (players.includes(matchStandings[i].MX1.team1Player1)) {
            // console.log(matchStandings[i].MX1.team1Player1);
            for (let s = 0; s < scores.length; s++) {
                //console.log(matchStandings[i].MX1.team1Player1)
                if (scores[s].name === matchStandings[i].MX1.team1Player1) {
                    if (scores[s].roundID===""){
                        scores[s].roundID=matchStandings[i].roundID
                    }
                    if (matchStandings[i].team1Score > matchStandings[i].team2Score) {
                            scores[s].matchesFor += 1;
                            console.log('team 1 adding match won +1 ')
                        }

                        if (matchStandings[i].team1Score < matchStandings[i].team2Score) {
                        scores[s].matchesAgainst += 1;
                        console.log('team 1 adding match loss +1 ')
                    }

                    if (matchStandings[i].MX1.team1Score > matchStandings[i].MX1.team2Score) {
                            scores[s].gamesFor += 1;
                            console.log('team 1 adding game won +1 ')
                        }

                        if (matchStandings[i].MX1.team1Score < matchStandings[i].MX1.team2Score) {
                        scores[s].gamesAgainst += 1;
                        console.log('team 1 adding game loss +1 ')
                    }

                    let pointsForTotal = matchStandings[i].MX1.team1Score;
                    let pointsAgainstTotal = matchStandings[i].MX1.team2Score;
                    scores[s].pointsFor += pointsForTotal;
                    scores[s].pointsAgainst += pointsAgainstTotal;
                }
            }
        }
        if (!players.includes(matchStandings[i].MX1.team1Player1)) {
            let pointsForTotal = matchStandings[i].MX1.team1Score;
            let pointsAgainstTotal = matchStandings[i].MX1.team2Score;
            players.push(matchStandings[i].MX1.team1Player1);
            scores.push({
                name: matchStandings[i].MX1.team1Player1,
                matchesFor: matchStandings[i].team1Score> matchStandings[i].team2Score ? 1 : 0, 
                matchesAgainst : matchStandings[i].team1Score < matchStandings[i].team2Score ? 1 : 0, 
                gamesFor : matchStandings[i].MX1.team1Score > matchStandings[i].MX1.team2Score ? 1 : 0, 
                gamesAgainst : matchStandings[i].MX1.team1Score < matchStandings[i].MX1.team2Score ? 1 : 0, 
                pointsFor: pointsForTotal,
                pointsAgainst: pointsAgainstTotal,
                winPercent: null,
                diff: null
            });
        }

        //MX1 TEAM 1 PLAYER 2
        if (players.includes(matchStandings[i].MX1.team1Player2)) {
            // console.log(matchStandings[i].MX1.team1Player2);
            for (let s = 0; s < scores.length; s++) {
                //console.log(matchStandings[i].MX1.team1Player2)
                if (scores[s].name === matchStandings[i].MX1.team1Player2) {
                    if (scores[s].roundID===""){
                        scores[s].roundID=matchStandings[i].roundID
                    }
                    if (matchStandings[i].team1Score > matchStandings[i].team2Score) {
                            scores[s].matchesFor += 1;
                            console.log('team 1 adding match won +1 ')
                        }

                        if (matchStandings[i].team1Score < matchStandings[i].team2Score) {
                        scores[s].matchesAgainst += 1;
                        console.log('team 1 adding match loss +1 ')
                    }

                    if (matchStandings[i].MX1.team1Score > matchStandings[i].MX1.team2Score) {
                            scores[s].gamesFor += 1;
                            console.log('team 1 adding game won +1 ')
                        }

                        if (matchStandings[i].MX1.team1Score < matchStandings[i].MX1.team2Score) {
                        scores[s].gamesAgainst += 1;
                        console.log('team 1 adding game loss +1 ')
                    }

                    let pointsForTotal = matchStandings[i].MX1.team1Score;
                    let pointsAgainstTotal = matchStandings[i].MX1.team2Score;
                    scores[s].pointsFor += pointsForTotal;
                    scores[s].pointsAgainst += pointsAgainstTotal;
                }
            }
        }
        if (!players.includes(matchStandings[i].MX1.team1Player2)) {
            let pointsForTotal = matchStandings[i].MX1.team1Score;
            let pointsAgainstTotal = matchStandings[i].MX1.team2Score;
            players.push(matchStandings[i].MX1.team1Player2);
            scores.push({
                name: matchStandings[i].MX1.team1Player2,
                matchesFor: matchStandings[i].team1Score> matchStandings[i].team2Score ? 1 : 0, 
                matchesAgainst : matchStandings[i].team1Score < matchStandings[i].team2Score ? 1 : 0, 
                gamesFor : matchStandings[i].MX1.team1Score > matchStandings[i].MX1.team2Score ? 1 : 0, 
                gamesAgainst : matchStandings[i].MX1.team1Score < matchStandings[i].MX1.team2Score ? 1 : 0, 
                pointsFor: pointsForTotal,
                pointsAgainst: pointsAgainstTotal,
                winPercent: null,
                diff: null
            });
        }

        //MX2 TEAM 1 PLAYER 1
        if (players.includes(matchStandings[i].MX2.team1Player1)) {
            // console.log(matchStandings[i].MX2.team1Player1);
            for (let s = 0; s < scores.length; s++) {
                //console.log(matchStandings[i].MX2.team1Player1)
                if (scores[s].name === matchStandings[i].MX2.team1Player1) {
                    if (scores[s].roundID===""){
                        scores[s].roundID=matchStandings[i].roundID
                    }
                    if (matchStandings[i].team1Score > matchStandings[i].team2Score) {
                            scores[s].matchesFor += 1;
                            console.log('team 1 adding match won +1 ')
                        }

                        if (matchStandings[i].team1Score < matchStandings[i].team2Score) {
                        scores[s].matchesAgainst += 1;
                        console.log('team 1 adding match loss +1 ')
                    }

                    if (matchStandings[i].MX2.team1Score > matchStandings[i].MX2.team2Score) {
                            scores[s].gamesFor += 1;
                            console.log('team 1 adding game won +1 ')
                        }

                        if (matchStandings[i].MX2.team1Score < matchStandings[i].MX2.team2Score) {
                        scores[s].gamesAgainst += 1;
                        console.log('team 1 adding game loss +1 ')
                    }

                    let pointsForTotal = matchStandings[i].MX2.team1Score;
                    let pointsAgainstTotal = matchStandings[i].MX2.team2Score;
                    scores[s].pointsFor += pointsForTotal;
                    scores[s].pointsAgainst += pointsAgainstTotal;
                }
            }
        }
        if (!players.includes(matchStandings[i].MX2.team1Player1)) {
            let pointsForTotal = matchStandings[i].MX2.team1Score;
            let pointsAgainstTotal = matchStandings[i].MX2.team2Score;
            players.push(matchStandings[i].MX2.team1Player1);
            scores.push({
                name: matchStandings[i].MX2.team1Player1,
                matchesFor: matchStandings[i].team1Score> matchStandings[i].team2Score ? 1 : 0, 
                matchesAgainst : matchStandings[i].team1Score < matchStandings[i].team2Score ? 1 : 0, 
                gamesFor : matchStandings[i].MX2.team1Score > matchStandings[i].MX2.team2Score ? 1 : 0, 
                gamesAgainst : matchStandings[i].MX2.team1Score < matchStandings[i].MX2.team2Score ? 1 : 0, 
                pointsFor: pointsForTotal,
                pointsAgainst: pointsAgainstTotal,
                winPercent: null,
                diff: null
            });
        }

        //MX2 TEAM 1 PLAYER 2
        if (players.includes(matchStandings[i].MX2.team1Player2)) {
            // console.log(matchStandings[i].MX2.team1Player2);
            for (let s = 0; s < scores.length; s++) {
                //console.log(matchStandings[i].MX2.team1Player2)
                if (scores[s].name === matchStandings[i].MX2.team1Player2) {
                    if (scores[s].roundID===""){
                        scores[s].roundID=matchStandings[i].roundID
                    }
                    if (matchStandings[i].team1Score > matchStandings[i].team2Score) {
                            scores[s].matchesFor += 1;
                            console.log('team 1 adding match won +1 ')
                        }

                        if (matchStandings[i].team1Score < matchStandings[i].team2Score) {
                        scores[s].matchesAgainst += 1;
                        console.log('team 1 adding match loss +1 ')
                    }

                    if (matchStandings[i].MX2.team1Score > matchStandings[i].MX2.team2Score) {
                            scores[s].gamesFor += 1;
                            console.log('team 1 adding game won +1 ')
                        }

                        if (matchStandings[i].MX2.team1Score < matchStandings[i].MX2.team2Score) {
                        scores[s].gamesAgainst += 1;
                        console.log('team 1 adding game loss +1 ')
                    }

                    let pointsForTotal = matchStandings[i].MX2.team1Score;
                    let pointsAgainstTotal = matchStandings[i].MX2.team2Score;
                    scores[s].pointsFor += pointsForTotal;
                    scores[s].pointsAgainst += pointsAgainstTotal;
                }
            }
        }
        if (!players.includes(matchStandings[i].MX2.team1Player2)) {
            let pointsForTotal = matchStandings[i].MX2.team1Score;
            let pointsAgainstTotal = matchStandings[i].MX2.team2Score;
            players.push(matchStandings[i].MX2.team1Player2);
            scores.push({
                name: matchStandings[i].MX2.team1Player2,
                matchesFor: matchStandings[i].team1Score> matchStandings[i].team2Score ? 1 : 0, 
                matchesAgainst : matchStandings[i].team1Score < matchStandings[i].team2Score ? 1 : 0, 
                gamesFor : matchStandings[i].MX2.team1Score > matchStandings[i].MX2.team2Score ? 1 : 0, 
                gamesAgainst : matchStandings[i].MX2.team1Score < matchStandings[i].MX2.team2Score ? 1 : 0, 
                pointsFor: pointsForTotal,
                pointsAgainst: pointsAgainstTotal,
                winPercent: null,
                diff: null
            });
        }  

        //WD TEAM 2 PLAYER 1
        if (players.includes(matchStandings[i].WD.team2Player1)) {
            // console.log(matchStandings[i].WD.team2Player1);
            for (let s = 0; s < scores.length; s++) {
                //console.log(matchStandings[i].WD.team2Player1)
                if (scores[s].name === matchStandings[i].WD.team2Player1) {
                    if (scores[s].roundID===""){
                        scores[s].roundID=matchStandings[i].roundID
                    }
                    if (matchStandings[i].team2Score > matchStandings[i].team1Score) {
                            scores[s].matchesFor += 1;
                            console.log('T2P1 adding match won +1 ')
                        }

                        if (matchStandings[i].team2Score < matchStandings[i].team1Score) {
                        scores[s].matchesAgainst += 1;
                        console.log('T2P1 adding match loss +1 ')
                    }

                    if (matchStandings[i].WD.team2Score > matchStandings[i].WD.team1Score) {
                            scores[s].gamesFor += 1;
                            console.log('T2P1 adding game won +1 ')
                        }

                        if (matchStandings[i].WD.team2Score < matchStandings[i].WD.team1Score) {
                        scores[s].gamesAgainst += 1;
                        console.log('T2P1 adding game loss +1 ')
                    }

                    let pointsForTotal = matchStandings[i].WD.team2Score;
                    let pointsAgainstTotal = matchStandings[i].WD.team1Score;
                    scores[s].pointsFor += pointsForTotal;
                    scores[s].pointsAgainst += pointsAgainstTotal;
                }
            }
        }
        if (!players.includes(matchStandings[i].WD.team2Player1)) {
            let pointsForTotal = matchStandings[i].WD.team2Score;
            let pointsAgainstTotal = matchStandings[i].WD.team1Score;
            players.push(matchStandings[i].WD.team2Player1);
            scores.push({
                name: matchStandings[i].WD.team2Player1,
                matchesFor: matchStandings[i].team2Score> matchStandings[i].team1Score ? 1 : 0, 
                matchesAgainst : matchStandings[i].team2Score < matchStandings[i].team1Score ? 1 : 0, 
                gamesFor : matchStandings[i].WD.team2Score > matchStandings[i].WD.team1Score ? 1 : 0, 
                gamesAgainst : matchStandings[i].WD.team2Score < matchStandings[i].WD.team1Score ? 1 : 0, 
                pointsFor: pointsForTotal,
                pointsAgainst: pointsAgainstTotal,
                winPercent: null,
                diff: null
            });
        }

        //WD TEAM 2 PLAYER 2
        if (players.includes(matchStandings[i].WD.team2Player2)) {
            // console.log(matchStandings[i].WD.team2Player2);
            for (let s = 0; s < scores.length; s++) {
                //console.log(matchStandings[i].WD.team2Player2)
                if (scores[s].name === matchStandings[i].WD.team2Player2) {
                    if (scores[s].roundID===""){
                        scores[s].roundID=matchStandings[i].roundID
                    }
                    if (matchStandings[i].team2Score > matchStandings[i].team1Score) {
                            scores[s].matchesFor += 1;
                            console.log('T2P2 adding match won +1 ')
                        }

                        if (matchStandings[i].team2Score < matchStandings[i].team1Score) {
                        scores[s].matchesAgainst += 1;
                        console.log('T2P2 adding match loss +1 ')
                    }

                    if (matchStandings[i].WD.team2Score > matchStandings[i].WD.team1Score) {
                            scores[s].gamesFor += 1;
                            console.log('T2P2 adding game won +1 ')
                        }

                        if (matchStandings[i].WD.team2Score < matchStandings[i].WD.team1Score) {
                        scores[s].gamesAgainst += 1;
                        console.log('T2P2 adding game loss +1 ')
                    }

                    let pointsForTotal = matchStandings[i].WD.team2Score;
                    let pointsAgainstTotal = matchStandings[i].WD.team1Score;
                    scores[s].pointsFor += pointsForTotal;
                    scores[s].pointsAgainst += pointsAgainstTotal;
                }
            }
        }
        if (!players.includes(matchStandings[i].WD.team2Player2)) {
            let pointsForTotal = matchStandings[i].WD.team2Score;
            let pointsAgainstTotal = matchStandings[i].WD.team1Score;
            players.push(matchStandings[i].WD.team2Player2);
            scores.push({
                name: matchStandings[i].WD.team2Player2,
                matchesFor: matchStandings[i].team2Score> matchStandings[i].team1Score ? 1 : 0, 
                matchesAgainst : matchStandings[i].team2Score < matchStandings[i].team1Score ? 1 : 0, 
                gamesFor : matchStandings[i].WD.team2Score > matchStandings[i].WD.team1Score ? 1 : 0, 
                gamesAgainst : matchStandings[i].WD.team2Score < matchStandings[i].WD.team1Score ? 1 : 0, 
                pointsFor: pointsForTotal,
                pointsAgainst: pointsAgainstTotal,
                winPercent: null,
                diff: null
            });
        }

        //MD TEAM 2 PLAYER 1
        if (players.includes(matchStandings[i].MD.team2Player1)) {
            // console.log(matchStandings[i].MD.team2Player1);
            for (let s = 0; s < scores.length; s++) {
                //console.log(matchStandings[i].MD.team2Player1)
                if (scores[s].name === matchStandings[i].MD.team2Player1) {
                    if (scores[s].roundID===""){
                        scores[s].roundID=matchStandings[i].roundID
                    }
                    if (matchStandings[i].team2Score > matchStandings[i].team1Score) {
                            scores[s].matchesFor += 1;
                            console.log('TEAM 2 adding match won +1 ')
                        }

                        if (matchStandings[i].team2Score < matchStandings[i].team1Score) {
                        scores[s].matchesAgainst += 1;
                        console.log('TEAM 2 adding match loss +1 ')
                    }

                    if (matchStandings[i].MD.team2Score > matchStandings[i].MD.team1Score) {
                            scores[s].gamesFor += 1;
                            console.log('TEAM 2 adding game won +1 ')
                        }

                        if (matchStandings[i].MD.team2Score < matchStandings[i].MD.team1Score) {
                        scores[s].gamesAgainst += 1;
                        console.log('TEAM 2 adding game loss +1 ')
                    }

                    let pointsForTotal = matchStandings[i].MD.team2Score;
                    let pointsAgainstTotal = matchStandings[i].MD.team1Score;
                    scores[s].pointsFor += pointsForTotal;
                    scores[s].pointsAgainst += pointsAgainstTotal;
                }
            }
        }
        if (!players.includes(matchStandings[i].MD.team2Player1)) {
            let pointsForTotal = matchStandings[i].MD.team2Score;
            let pointsAgainstTotal = matchStandings[i].MD.team1Score;
            players.push(matchStandings[i].MD.team2Player1);
            scores.push({
                name: matchStandings[i].MD.team2Player1,
                matchesFor: matchStandings[i].team2Score> matchStandings[i].team1Score ? 1 : 0, 
                matchesAgainst : matchStandings[i].team2Score < matchStandings[i].team1Score ? 1 : 0, 
                gamesFor : matchStandings[i].MD.team2Score > matchStandings[i].MD.team1Score ? 1 : 0, 
                gamesAgainst : matchStandings[i].MD.team2Score < matchStandings[i].MD.team1Score ? 1 : 0, 
                pointsFor: pointsForTotal,
                pointsAgainst: pointsAgainstTotal,
                winPercent: null,
                diff: null
            });
        }

        //MD TEAM 2 PLAYER 2
        if (players.includes(matchStandings[i].MD.team2Player2)) {
            // console.log(matchStandings[i].MD.team2Player2);
            for (let s = 0; s < scores.length; s++) {
                //console.log(matchStandings[i].MD.team2Player2)
                if (scores[s].name === matchStandings[i].MD.team2Player2) {
                    if (scores[s].roundID===""){
                        scores[s].roundID=matchStandings[i].roundID
                    }
                    if (matchStandings[i].team2Score > matchStandings[i].team1Score) {
                            scores[s].matchesFor += 1;
                            console.log('TEAM 2 adding match won +1 ')
                        }

                        if (matchStandings[i].team2Score < matchStandings[i].team1Score) {
                        scores[s].matchesAgainst += 1;
                        console.log('TEAM 2 adding match loss +1 ')
                    }

                    if (matchStandings[i].MD.team2Score > matchStandings[i].MD.team1Score) {
                            scores[s].gamesFor += 1;
                            console.log('TEAM 2 adding game won +1 ')
                        }

                        if (matchStandings[i].MD.team2Score < matchStandings[i].MD.team1Score) {
                        scores[s].gamesAgainst += 1;
                        console.log('TEAM 2 adding game loss +1 ')
                    }

                    let pointsForTotal = matchStandings[i].MD.team2Score;
                    let pointsAgainstTotal = matchStandings[i].MD.team1Score;
                    scores[s].pointsFor += pointsForTotal;
                    scores[s].pointsAgainst += pointsAgainstTotal;
                }
            }
        }
        if (!players.includes(matchStandings[i].MD.team2Player2)) {
            let pointsForTotal = matchStandings[i].MD.team2Score;
            let pointsAgainstTotal = matchStandings[i].MD.team1Score;
            players.push(matchStandings[i].MD.team2Player2);
            scores.push({
                name: matchStandings[i].MD.team2Player2,
                matchesFor: matchStandings[i].team2Score> matchStandings[i].team1Score ? 1 : 0, 
                matchesAgainst : matchStandings[i].team2Score < matchStandings[i].team1Score ? 1 : 0, 
                gamesFor : matchStandings[i].MD.team2Score > matchStandings[i].MD.team1Score ? 1 : 0, 
                gamesAgainst : matchStandings[i].MD.team2Score < matchStandings[i].MD.team1Score ? 1 : 0, 
                pointsFor: pointsForTotal,
                pointsAgainst: pointsAgainstTotal,
                winPercent: null,
                diff: null
            });
        }

        //MX1 TEAM 2 PLAYER 1
        if (players.includes(matchStandings[i].MX1.team2Player1)) {
            // console.log(matchStandings[i].MX1.team2Player1);
            for (let s = 0; s < scores.length; s++) {
                //console.log(matchStandings[i].MX1.team2Player1)
                if (scores[s].name === matchStandings[i].MX1.team2Player1) {
                    if (scores[s].roundID===""){
                        scores[s].roundID=matchStandings[i].roundID
                    }
                    if (matchStandings[i].team2Score > matchStandings[i].team1Score) {
                            scores[s].matchesFor += 1;
                            console.log('TEAM 2 adding match won +1 ')
                        }

                        if (matchStandings[i].team2Score < matchStandings[i].team1Score) {
                        scores[s].matchesAgainst += 1;
                        console.log('TEAM 2 adding match loss +1 ')
                    }

                    if (matchStandings[i].MX1.team2Score > matchStandings[i].MX1.team1Score) {
                            scores[s].gamesFor += 1;
                            console.log('TEAM 2 adding game won +1 ')
                        }

                        if (matchStandings[i].MX1.team2Score < matchStandings[i].MX1.team1Score) {
                        scores[s].gamesAgainst += 1;
                        console.log('TEAM 2 adding game loss +1 ')
                    }

                    let pointsForTotal = matchStandings[i].MX1.team2Score;
                    let pointsAgainstTotal = matchStandings[i].MX1.team1Score;
                    scores[s].pointsFor += pointsForTotal;
                    scores[s].pointsAgainst += pointsAgainstTotal;
                }
            }
        }
        if (!players.includes(matchStandings[i].MX1.team2Player1)) {
            let pointsForTotal = matchStandings[i].MX1.team2Score;
            let pointsAgainstTotal = matchStandings[i].MX1.team1Score;
            players.push(matchStandings[i].MX1.team2Player1);
            scores.push({
                name: matchStandings[i].MX1.team2Player1,
                matchesFor: matchStandings[i].team2Score> matchStandings[i].team1Score ? 1 : 0, 
                matchesAgainst : matchStandings[i].team2Score < matchStandings[i].team1Score ? 1 : 0, 
                gamesFor : matchStandings[i].MX1.team2Score > matchStandings[i].MX1.team1Score ? 1 : 0, 
                gamesAgainst : matchStandings[i].MX1.team2Score < matchStandings[i].MX1.team1Score ? 1 : 0, 
                pointsFor: pointsForTotal,
                pointsAgainst: pointsAgainstTotal,
                winPercent: null,
                diff: null
            });
        }

        //MX1 TEAM 2 PLAYER 2
        if (players.includes(matchStandings[i].MX1.team2Player2)) {
            // console.log(matchStandings[i].MX1.team2Player2);
            for (let s = 0; s < scores.length; s++) {
                //console.log(matchStandings[i].MX1.team2Player2)
                if (scores[s].name === matchStandings[i].MX1.team2Player2) {
                    if (scores[s].roundID===""){
                        scores[s].roundID=matchStandings[i].roundID
                    }
                    if (matchStandings[i].team2Score > matchStandings[i].team1Score) {
                            scores[s].matchesFor += 1;
                            console.log('TEAM 2 adding match won +1 ')
                        }

                        if (matchStandings[i].team2Score < matchStandings[i].team1Score) {
                        scores[s].matchesAgainst += 1;
                        console.log('TEAM 2 adding match loss +1 ')
                    }

                    if (matchStandings[i].MX1.team2Score > matchStandings[i].MX1.team1Score) {
                            scores[s].gamesFor += 1;
                            console.log('TEAM 2 adding game won +1 ')
                        }

                        if (matchStandings[i].MX1.team2Score < matchStandings[i].MX1.team1Score) {
                        scores[s].gamesAgainst += 1;
                        console.log('TEAM 2 adding game loss +1 ')
                    }

                    let pointsForTotal = matchStandings[i].MX1.team2Score;
                    let pointsAgainstTotal = matchStandings[i].MX1.team1Score;
                    scores[s].pointsFor += pointsForTotal;
                    scores[s].pointsAgainst += pointsAgainstTotal;
                }
            }
        }
        if (!players.includes(matchStandings[i].MX1.team2Player2)) {
            let pointsForTotal = matchStandings[i].MX1.team2Score;
            let pointsAgainstTotal = matchStandings[i].MX1.team1Score;
            players.push(matchStandings[i].MX1.team2Player2);
            scores.push({
                name: matchStandings[i].MX1.team2Player2,
                matchesFor: matchStandings[i].team2Score> matchStandings[i].team1Score ? 1 : 0, 
                matchesAgainst : matchStandings[i].team2Score < matchStandings[i].team1Score ? 1 : 0, 
                gamesFor : matchStandings[i].MX1.team2Score > matchStandings[i].MX1.team1Score ? 1 : 0, 
                gamesAgainst : matchStandings[i].MX1.team2Score < matchStandings[i].MX1.team1Score ? 1 : 0, 
                pointsFor: pointsForTotal,
                pointsAgainst: pointsAgainstTotal,
                winPercent: null,
                diff: null
            });
        }

        //MX2 TEAM 2 PLAYER 1
        if (players.includes(matchStandings[i].MX2.team2Player1)) {
            // console.log(matchStandings[i].MX2.team2Player1);
            for (let s = 0; s < scores.length; s++) {
                //console.log(matchStandings[i].MX2.team2Player1)
                if (scores[s].name === matchStandings[i].MX2.team2Player1) {
                    if (scores[s].roundID===""){
                        scores[s].roundID=matchStandings[i].roundID
                    }
                    if (matchStandings[i].team2Score > matchStandings[i].team1Score) {
                            scores[s].matchesFor += 1;
                            console.log('TEAM 2 adding match won +1 ')
                        }

                        if (matchStandings[i].team2Score < matchStandings[i].team1Score) {
                        scores[s].matchesAgainst += 1;
                        console.log('TEAM 2 adding match loss +1 ')
                    }

                    if (matchStandings[i].MX2.team2Score > matchStandings[i].MX2.team1Score) {
                            scores[s].gamesFor += 1;
                            console.log('TEAM 2 adding game won +1 ')
                        }

                        if (matchStandings[i].MX2.team2Score < matchStandings[i].MX2.team1Score) {
                        scores[s].gamesAgainst += 1;
                        console.log('TEAM 2 adding game loss +1 ')
                    }

                    let pointsForTotal = matchStandings[i].MX2.team2Score;
                    let pointsAgainstTotal = matchStandings[i].MX2.team1Score;
                    scores[s].pointsFor += pointsForTotal;
                    scores[s].pointsAgainst += pointsAgainstTotal;
                }
            }
        }
        if (!players.includes(matchStandings[i].MX2.team2Player1)) {
            let pointsForTotal = matchStandings[i].MX2.team2Score;
            let pointsAgainstTotal = matchStandings[i].MX2.team1Score;
            players.push(matchStandings[i].MX2.team2Player1);
            scores.push({
                name: matchStandings[i].MX2.team2Player1,
                matchesFor: matchStandings[i].team2Score> matchStandings[i].team1Score ? 1 : 0, 
                matchesAgainst : matchStandings[i].team2Score < matchStandings[i].team1Score ? 1 : 0, 
                gamesFor : matchStandings[i].MX2.team2Score > matchStandings[i].MX2.team1Score ? 1 : 0, 
                gamesAgainst : matchStandings[i].MX2.team2Score < matchStandings[i].MX2.team1Score ? 1 : 0, 
                pointsFor: pointsForTotal,
                pointsAgainst: pointsAgainstTotal,
                winPercent: null,
                diff: null
            });
        }  

        //MX2 TEAM 2 PLAYER 2
        if (players.includes(matchStandings[i].MX2.team2Player2)) {
            // console.log(matchStandings[i].MX2.team2Player2);
            for (let s = 0; s < scores.length; s++) {
                //console.log(matchStandings[i].MX2.team2Player2)
                if (scores[s].name === matchStandings[i].MX2.team2Player2) {
                    if (scores[s].roundID===""){
                        scores[s].roundID=matchStandings[i].roundID
                    }
                    if (matchStandings[i].team2Score > matchStandings[i].team1Score) {
                            scores[s].matchesFor += 1;
                            console.log('TEAM 2 adding match won +1 ')
                        }

                        if (matchStandings[i].team2Score < matchStandings[i].team1Score) {
                        scores[s].matchesAgainst += 1;
                        console.log('TEAM 2 adding match loss +1 ')
                    }

                    if (matchStandings[i].MX2.team2Score > matchStandings[i].MX2.team1Score) {
                            scores[s].gamesFor += 1;
                            console.log('TEAM 2 adding game won +1 ')
                        }

                        if (matchStandings[i].MX2.team2Score < matchStandings[i].MX2.team1Score) {
                        scores[s].gamesAgainst += 1;
                        console.log('TEAM 2 adding game loss +1 ')
                    }

                    let pointsForTotal = matchStandings[i].MX2.team2Score;
                    let pointsAgainstTotal = matchStandings[i].MX2.team1Score;
                    scores[s].pointsFor += pointsForTotal;
                    scores[s].pointsAgainst += pointsAgainstTotal;
                }
            }
        }
        if (!players.includes(matchStandings[i].MX2.team2Player2)) {
            let pointsForTotal = matchStandings[i].MX2.team2Score;
            let pointsAgainstTotal = matchStandings[i].MX2.team1Score;
            players.push(matchStandings[i].MX2.team2Player2);
            scores.push({
                name: matchStandings[i].MX2.team2Player2,
                matchesFor: matchStandings[i].team2Score> matchStandings[i].team1Score ? 1 : 0, 
                matchesAgainst : matchStandings[i].team2Score < matchStandings[i].team1Score ? 1 : 0, 
                gamesFor : matchStandings[i].MX2.team2Score > matchStandings[i].MX2.team1Score ? 1 : 0, 
                gamesAgainst : matchStandings[i].MX2.team2Score < matchStandings[i].MX2.team1Score ? 1 : 0, 
                pointsFor: pointsForTotal,
                pointsAgainst: pointsAgainstTotal,
                winPercent: null,
                diff: null
            });
        } 
    }
    console.log(JSON.stringify(scores));

    await updateDoc(doc(db, "mlpStandingsPlayer", "SanClemente2023" + div), {
        division: div,
        event: ev,
        teamRank: scores
    });
};

export {
    recalculateStandings
};
