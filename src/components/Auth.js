import {auth, provider} from "../firebase-config.js";
import {signInWithPopup} from "firebase/auth";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Auth = (props) => {
    const admins = [
    "JocMbFWNhMbJ8XrVwOWCqENjxFJ3",
    "Bm6OhrM24qa7eqQHHKGgluB5hVu2", 
    "cyTIUcw1yWUJu1QGUTYsdBD8B2E2", 
    "zBdG9MvHyMSfIJ39oZyxFYG5BeD3",
    "Qjm9QfUlhVbOHEgAPWTiH7jMaXq1",
    "RpgvBOmu0lWipiOVeNwgTaed7TL2",
    "ZHU1ceoQ9ubKdwn9ZDfZlMWzHYS2",
    "D7hsk8Rf8cbWJYWRnGoFjDjJ4KT2",
    "Nvv6MjyfcgcRyq8k577kLhcrKnV2",
    "EdIXMjRwzgPD10MwC5iYiDZjeIE2",
    "KNBKqro71TTNrPLIJjJX7Bq71pH3",
    "dHeFXTJmarTxtxP5Jq9AB4ccVvE3",
];
    const {setIsAuth} = props;
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            // console.log(result);
            cookies.set("auth-token", result.user.refreshToken);
            if (admins.includes(result.user.uid)) {
                cookies.set("auth-uid", result.user.uid);
            }
            setIsAuth(true);
            window.location.reload(false);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="auth">
            <p>Sign In With Google To Continue</p>
            <button onClick={signInWithGoogle}>
                Sign In With Google</button>
        </div>
    );
};
