import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const AddBracket = (props) => {
  return (
<>
      <div
        style={{ paddingBottom: "5px", paddingTop: "5px" }}
        className="d-flex justify-content-around"
      >
        <Card className="bg-dark" style={{ width: "400px", paddingBottom: "15px" }}>
        <Card.Subtitle
              className="d-flex justify-content-around"
              style={{ fontSize: "1rem", color: "white", paddingTop:"10px" }}
            >
              Update Brackets
            </Card.Subtitle>
          <form action="https://www.liftkc.com/postPremierImages" method="POST" enctype="multipart/form-data">
            <div class="'file-field input-field">
                  <div class="btn grey">
                      <span>File</span>
                      <input name='myImage' type="file"/>
                  </div>
                  
            </div>
            <Button variant="success" type="submit">Update Premier Bracket</Button> 
          </form>
          <form action="https://www.liftkc.com/postChallengerImages" method="POST" enctype="multipart/form-data">
            <div class="'file-field input-field">
                  <div class="btn grey">
                      <span>File</span>
                      <input name='myImage2' type="file"/>
                  </div>
                  
            </div>
            <Button variant="success" type="submit">Update Challenger Bracket</Button> 
          </form>
        </Card>
    </div> 
    </>   
  );
};

