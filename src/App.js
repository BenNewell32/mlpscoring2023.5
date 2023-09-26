import "./App.css";
import { Auth } from "./components/Auth";
import { Home } from "./components/Home";
import { AdminPage } from "./components/AdminPage";

import { AdminMenuPage } from "./components/AdminMenuPage";
import { AdminMenuEnter } from "./components/AdminMenuEnter";

import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isAdmin, setIsAdmin] = useState(cookies.get("auth-uid"));
  const [clickedAdmin, setClickedAdmin] = useState(cookies.get("adminUser"));
  const [viewAdminPage, setView] = useState(false);

  const adminSignIn = () => {
    cookies.set("adminUser", "ADMIN");
    window.location.reload(false);
  };

  const adminSignOut = () => {
    cookies.remove("adminUser");
    window.location.reload(false);
  };

  if (isAdmin && clickedAdmin && isAuth && viewAdminPage === true) {
    return (
      <div
        style={{
          // maxWidth: "1200px",
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "white",
          padding: "1px",
        }}
      >
        <AdminMenuEnter setView={setView} />
        <AdminPage />
      </div>
    );
  }

  if (isAdmin && clickedAdmin && isAuth && viewAdminPage === false) {
    return (
      <div
        style={{
          // maxWidth: "1200px",
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "white",
          padding: "0px",
        }}
        className="room"
      >
        <AdminMenuPage setView={setView} />
        <Home />
      </div>
    );
  }

  if (!isAdmin && !clickedAdmin && !isAuth) {
    return (
      <div
        style={{
          // maxWidth: "1200px",
          alignContent: "center",
          justifyContent: "center",
           backgroundColor: "white",
          padding: "0px",
          
        }}
      >
        <Home />
        <Button
          onClick={() => {
            adminSignIn();
          }}
          variant="link"
          size="sm"
        >
          Admin Sign In {clickedAdmin}
        </Button>
      </div>
    );
  }

  if (!isAdmin && clickedAdmin && !isAuth) {
    return (
      <div
        style={{
          // maxWidth: "1200px",
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "white",
          padding: "1px",
        }}
      >
        <Auth setIsAuth={setIsAuth} setIsAdmin={setIsAdmin} />
        <Button
          onClick={() => {
            adminSignOut();
          }}
          variant="success"
          size="sm"
        >
          Go Back to Home
        </Button>
      </div>
    );
  }

  if (isAdmin && clickedAdmin) {
    return (
      <div
        style={{
          // maxWidth: "1200px",
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "white",
          padding: "1px",
        }}
      >
        <Home />
        <Button
          onClick={() => {
            adminSignIn();
          }}
          variant="link"
          size="sm"
        >
          Admin Sign In {clickedAdmin}
        </Button>
      </div>
    );
  }
}

export default App;
