import logo from "./mlpwhite.svg";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

import {Live} from "./Live";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import {RxHamburgerMenu} from "react-icons/rx";

import {TbTrademark} from "react-icons/tb";



export const Header = (props) => {
    return (
      window.innerWidth>800?   
    <>
        <style type="text/css">
            {`
    .btn-flat {
      background-color: #ef612d;
      color: white;
      font-weight: bold;
      margin: 2px;
          }
    .btn-flat:hover{
      border-color: #ef612d;
      border-style: solid;
      border-width: 1px;
      color: #ef612d;
      font-weight: bold;
      margin: 2px;
    }
    .btn-home {
      background-color: #ef612d;
      color: white;
      font-weight: bold;
      margin: 2px;
          }
          .btn-home:hover{
      background-color: #ef612d;
      color: white;
      font-weight: bold;
      margin: 2px;
    }
    .btn-away {
            background-color: white;
      color: #ef612d;
      font-weight: bold;
      margin: 2px;
          }
          .btn-away:hover{
      background-color: white;
      color: #ef612d;
      font-weight: bold;
      margin: 2px;
    }
    .btn-return{
      color: #ef612d;
      font-weight: bold;
      margin: 2px;
    }
    .btn-return:hover{
      border-color: #ef612d;
      border-style: solid;
      border-width: 1px;
      color: #ef612d;
      font-weight: bold;
      margin: 2px;
    }
    .dropdown-item:hover{
      background-color: #0a2137;
      color: #ef612d;
    }
    .dropdown-item{
      background-color: #0a2137;
      color: white;
    }
    .dropdown-toggle::after {
      content: none;
    }
    .dropdown:hover .dropdown-menu {
      display: block;
  }
    
    `} 
    </style> 
        <Navbar style={{backgroundColor:'#092036', height: '60px'}} sticky="top" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand style={{paddingLeft: "5px", paddingTop: "25px"}} href="https://majorleaguepickleball.net/">
                    <img width="230" alt="mlp logo"
                        src={logo}/>
                </Navbar.Brand>
                <Navbar.Toggle style={
                        {
                            backgroundColor: null,
                            borderColor: '#092036',
                            color: "#ef612d",
                            textAlign:'left',
                            paddingLeft:'-200px',
                        }
                    }
                    aria-controls="responsive-navbar-nav">
                    <div>
                        <RxHamburgerMenu size={30}/></div>
                </Navbar.Toggle>

                <Navbar.Collapse style={{ marginLeft: "-75px"}}  id="responsive-navbar-nav">
                    <Nav>
                    <Dropdown style={{ backgroundColor: "#092036", color:"white"}} >
                    <Dropdown.Toggle style={{color:"white", paddingTop: '10px', paddingRight:'30px', fontWeight: "bold", fontSize: "16px", textDecoration: "none" ,fontFamily: "SofiaCondensed", letterSpacing: "1px"}} variant="link" id="dropdown-basic">
                        WATCH
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{borderRadius:"0", backgroundColor:"#0a2137", color: "white",fontFamily: "SofiaCondensed"}}>
                        <Dropdown.Item style={{fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watchfollow/">ALL</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px"}} />
                        <Dropdown.Item style={{fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watch-follow/featured/">FEATURED</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watch-follow/game-play/">GAME PLAY</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watch-follow/mlp-daytona/">MLP DAYTONA</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watch-follow/mlp-mesa/">MLP MESA</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watch-follow/new-to-mlp/">NEW TO MLP</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watch-follow/pro-tips/">PRO TIPS</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watch-follow/perspectives/">PERSPECTIVES</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watch-follow/podcast/">POD CAST</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    &nbsp;
                    <Dropdown style={{ backgroundColor: "#092036", color:"white"}} >
                    <Dropdown.Toggle style={{color:"white", paddingTop: '10px', fontWeight: "bold", paddingRight:"30px", fontSize: "16px", textDecoration: "none" ,fontFamily: "SofiaCondensed", letterSpacing: "1px"}} variant="link" id="dropdown-basic">
                        EVENTS
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{borderRadius:"0", backgroundColor:"#0a2137", color: "white",fontFamily: "SofiaCondensed"}}>
                        <Dropdown.Item style={{fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/2023-events">OVERVIEW</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px"}} />
                        <Dropdown.Item style={{fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/events/san-clemente/">PEACHTREE, GA</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px"}} />
                        <Dropdown.Item style={{fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/2023/mlp-daytona">DAYTONA BEACH</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/events/mesa">MESA</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    &nbsp;

                    <Dropdown style={{backgroundColor: "#092036", color:"white"}} >
                    <Dropdown.Toggle style={{color:"white", paddingTop: '10px', fontWeight: "bold",paddingRight:"30px", fontSize: "16px", textDecoration: "none" ,fontFamily: "SofiaCondensed", letterSpacing: "1px"}} variant="link" id="dropdown-basic">
                        LEAGUE
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{backgroundColor:"#0a2137", color: "white", borderRadius:"0", fontFamily: "SofiaCondensed"}}>
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/mlp-leagues/">ABOUT</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/league-standings/">LEAGUE STANDINGS</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/premier-league/">PREMIER LEVEL</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/challenger-league/">CHALLENGER LEVEL</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/players">PLAYERS</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    &nbsp;
                    <Dropdown style={{backgroundColor: "#092036", color:"white"}} >
                    <Dropdown.Toggle style={{color:"white", paddingTop: '10px', fontWeight: "bold",paddingRight:"30px", fontSize: "16px", textDecoration: "none" ,fontFamily: "SofiaCondensed", letterSpacing: "1px"}} variant="link" id="dropdown-basic">
                        ABOUT
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{borderRadius:"0", backgroundColor:"#0a2137", color: "white",fontFamily: "SofiaCondensed"}}>
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/abcs-of-mlp/">ABC'S OF MLP</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px"  }} />                        
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/our-mission/">OUR MISSION</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px"  }} />                      
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watch-follow/new-to-mlp/">NEW TO MLP</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px"  }} />                        
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/faq/">FAQ</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/sponsors/">SPONSORS</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    &nbsp;
                    <Dropdown style={{backgroundColor: "#092036", color:"white"}} >
                    <Dropdown.Toggle style={{color:"white", paddingTop: '10px', fontWeight: "bold",paddingRight:"30px", fontSize: "16px", textDecoration: "none" ,fontFamily: "SofiaCondensed", letterSpacing: "1px"}} variant="link" id="dropdown-basic">
                        NEWS
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{borderRadius:"0", backgroundColor:"#0a2137", color: "white",fontFamily: "SofiaCondensed"}}>
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/news-updates/">NEWS</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    &nbsp;
                    {/* <Dropdown style={{paddingTop: "20px", paddingBottom: "20px", backgroundColor: "#092036", color:"white"}} >
                    <Dropdown.Toggle style={{color:"white", paddingTop: '10px', fontWeight: "bold", fontSize: "14px", textDecoration: "none" ,fontFamily: "SofiaCondensed", letterSpacing: "1px"}} variant="link" id="dropdown-basic">
                        SPONSORS
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{borderRadius:"0", backgroundColor:"#0a2137", color: "white",fontFamily: "SofiaCondensed"}}>
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/sponsors">SPONSORS</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    &nbsp; &nbsp; &nbsp; */}

                    &nbsp;
                    <Nav.Link href="https://fromuthpickleball.com/topic/mlp" style={{backgroundColor: "#092036", color:'#fafafb', width: '10px', paddingTop: '11px' }}><div style={{textAlign: 'center', color:'white', fontSize:'16px', fontWeight:"bold",  fontFamily: "SofiaCondensed", letterSpacing: "1px"}}>SHOP</div></Nav.Link>
                    </Nav>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;
                  
                  
                </Navbar.Collapse>
                <div style={{ display: "flex", alignContent: "center", justifyContent: "center", height: '25px', marginRight:"50px"}}>
                  <a href="https://www.youtube.com/channel/UC1_rjn7Y77xzscvYkoA-lDw" style={{marginRight:"10px", borderRadius:"50%", height: "25px", width: "25px", backgroundColor: "#536373", color:'#212529'}} > 
                  <FaYoutube style={{marginLeft:"5px"}}/>
                  </a>
                  &nbsp; 
                  <a href="https://www.facebook.com/MajorLeaguePickleball/" style={{marginRight:"10px", borderRadius:"50%", height: "25px", width: "25px", backgroundColor: "#536373", color:'#212529'}} > 
                <FaFacebookF style={{marginLeft:"5px"}}/>
                </a>
                &nbsp; 
                <a href="https://www.facebook.com/MajorLeaguePickleball/" style={{marginRight:"10px", borderRadius:"50%", height: "25px", width: "25px", backgroundColor: "#536373", color:'#212529'}} > 
                 <FaTwitter style={{marginLeft:"5px"}}/>
                 </a>
                 &nbsp; 
                 <a href="https://www.instagram.com/majorleaguepb/" style={{marginRight:"10px", borderRadius:"50%", height: "25px", width: "25px", backgroundColor: "#536373", color:'#212529'}} > 
                <FaInstagram href="https://www.instagram.com/majorleaguepb/"  style={{marginLeft:"5px"}}/>
                </a>
                &nbsp; 
                <a href="https://www.tiktok.com/@majorleaguepb?" style={{borderRadius:"50%", height: "25px", width: "25px", backgroundColor: "#536373", color:'#212529'}} >
                 <FaTiktok style={{marginLeft:"5px"}}/>
                 </a>
                </div>
            </Container>
        </Navbar>
    </>
    :

    // MOBILE
    <>
        <style type="text/css">
            {`
    .btn-flat {
      background-color: #ef612d;
      color: white;
      font-weight: bold;
      margin: 2px;
          }
    .btn-flat:hover{
      border-color: #ef612d;
      border-style: solid;
      border-width: 1px;
      color: #ef612d;
      font-weight: bold;
      margin: 2px;
    }
    .btn-home {
      background-color: #ef612d;
      color: white;
      font-weight: bold;
      margin: 2px;
          }
          .btn-home:hover{
      background-color: #ef612d;
      color: white;
      font-weight: bold;
      margin: 2px;
    }
    .btn-away {
            background-color: white;
      color: #ef612d;
      font-weight: bold;
      margin: 2px;
          }
          .btn-away:hover{
      background-color: white;
      color: #ef612d;
      font-weight: bold;
      margin: 2px;
    }
    .btn-return{
      color: #ef612d;
      font-weight: bold;
      margin: 2px;
    }
    .btn-return:hover{
      border-color: #ef612d;
      border-style: solid;
      border-width: 1px;
      color: #ef612d;
      font-weight: bold;
      margin: 2px;
    }
    .dropdown-item:hover{
      background-color: #0a2137;
      color: #ef612d;
      font-size: 16px;
    }
    .dropdown-item{
      background-color: #0a2137;
      color: white;
      font-size: 16px;
    }
    .dropdown-toggle::after {
      content: none;
    }

    
    `} 
    </style> 

        <Navbar style={{backgroundColor: "#092036", height: '60px'}} sticky="top" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand style={{ marginLeft: "-20px"}}href="https://www.majorleaguepickleball.net/">
                    <img width="120" alt="mlp logo"
                        src={logo}/>
                </Navbar.Brand>
                <div style={{ display: "flex", alignContent: "center", justifyContent: "center", height: '25px', marginLeft: '-70px', marginTop: '-10px' }}>
                  <a href="https://www.youtube.com/channel/UC1_rjn7Y77xzscvYkoA-lDw" style={{borderRadius:"50%", height: "25px", width: "25px", backgroundColor: "#536373", color:'#212529'}} > 
                  <FaYoutube style={{marginLeft:"5px"}}/>
                  </a>
                  &nbsp; 
                  <a href="https://www.facebook.com/MajorLeaguePickleball/" style={{borderRadius:"50%", height: "25px", width: "25px", backgroundColor: "#536373", color:'#212529'}} > 
                <FaFacebookF style={{marginLeft:"5px"}}/>
                </a>
                &nbsp; 
                <a href="https://www.facebook.com/MajorLeaguePickleball/" style={{borderRadius:"50%", height: "25px", width: "25px", backgroundColor: "#536373", color:'#212529'}} > 
                 <FaTwitter style={{marginLeft:"5px"}}/>
                 </a>
                 &nbsp; 
                 <a href="https://www.instagram.com/majorleaguepb/" style={{borderRadius:"50%", height: "25px", width: "25px", backgroundColor: "#536373", color:'#212529'}} > 
                <FaInstagram href="https://www.instagram.com/majorleaguepb/"  style={{marginLeft:"5px"}}/>
                </a>
                &nbsp; 
                <a href="https://www.tiktok.com/@majorleaguepb?" style={{borderRadius:"50%", height: "25px", width: "25px", backgroundColor: "#536373", color:'#212529'}} >
                 <FaTiktok style={{marginLeft:"5px"}}/>
                 </a>
                </div>
                <Nav.Link href="https://www.majorleaguepickleball.net/dallas-streaming/" style={{color:'#ef612d', width: '25px', height: '25px', marginTop: '-10px', marginLeft: '-5px' }}><div style={{textAlign: 'center', color:'#fc6044', fontSize:'18px', fontWeight:"bold",  fontFamily: "SofiaCondensed", letterSpacing: ".5px"}}>WATCH</div></Nav.Link>
                

                <Navbar.Toggle style={
                        {
                            backgroundColor: null,
                            borderColor: '#092036',
                            color: "#ef612d",
                            marginRight:'0px',
                            marginTop:'-10px',
                        }
                    }
                    aria-controls="responsive-navbar-nav">
                    <div>

                        <RxHamburgerMenu size={30}/>
                        </div>
                </Navbar.Toggle>

                <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                    <Dropdown style={{ backgroundColor: "#182a3e", color:"white"}} >
                    <Dropdown.Toggle style={{color:"white", paddingTop: '10px', fontWeight: "bold", fontSize: "14px", textDecoration: "none" ,fontFamily: "SofiaCondensed", letterSpacing: "1px"}} variant="link" id="dropdown-basic">
                        WATCH LIVE
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{borderRadius:"0", backgroundColor:"#0a2137", color: "white",fontFamily: "SofiaCondensed"}}>
                        <Dropdown.Item style={{fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watchfollow/">ALL</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px"}} />
                        <Dropdown.Item style={{fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watch-follow/featured/">FEATURED</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watch-follow/game-play/">GAME PLAY</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watch-follow/mlp-daytona/">MLP DAYTONA</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watch-follow/mlp-mesa/">MLP MESA</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watch-follow/new-to-mlp/">NEW TO MLP</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watch-follow/pro-tips/">PRO TIPS</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watch-follow/perspectives/">PERSPECTIVES</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watch-follow/podcast/">POD CAST</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown.Divider style={{borderTop: "solid", borderWidth: '1px' , borderColor: "#a0b0c0", color: "#a0b0c0", margin:"1px"}} />

                    <Dropdown style={{ backgroundColor: "#182a3e", color:"white"}} >
                    <Dropdown.Toggle style={{color:"white", paddingTop: '10px', fontWeight: "bold", fontSize: "14px", textDecoration: "none" ,fontFamily: "SofiaCondensed", letterSpacing: "1px"}} variant="link" id="dropdown-basic">
                        EVENTS
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{borderRadius:"0", backgroundColor:"#0a2137", color: "white",fontFamily: "SofiaCondensed"}}>
                        <Dropdown.Item style={{fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/2023-events">OVERVIEW</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px"}} />
                        <Dropdown.Item style={{fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/events/ATL/">PEACHTREE, GA</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px"}} />
                        <Dropdown.Item style={{fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/events/san-clemente/">SAN CLEMENTE</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px"}} />
                        <Dropdown.Item style={{fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/2023/mlp-daytona">DAYTONA BEACH</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/events/mesa">MESA</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    
                    <Dropdown.Divider style={{borderTop: "solid", borderWidth: '1px' , borderColor: "#a0b0c0", color: "#a0b0c0", margin:"1px"}} />

                    <Dropdown style={{backgroundColor: "#182a3e", color:"white"}} >
                    <Dropdown.Toggle style={{color:"white", paddingTop: '10px', fontWeight: "bold", fontSize: "14px", textDecoration: "none" ,fontFamily: "SofiaCondensed", letterSpacing: "1px"}} variant="link" id="dropdown-basic">
                        LEAGUE
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{backgroundColor:"#0a2137", color: "white", borderRadius:"0", fontFamily: "SofiaCondensed"}}>
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/mlp-leagues/">ABOUT</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/league-standings/">LEAGUE STANDINGS</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/premier-league/">PREMIER LEVEL</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/challenger-league/">CHALLENGER LEVEL</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/players">PLAYERS</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown.Divider style={{borderTop: "solid", borderWidth: '1px' , borderColor: "#a0b0c0", color: "#a0b0c0", margin:"1px"}} />

                    <Dropdown style={{ backgroundColor: "#182a3e", color:"white"}} >
                    <Dropdown.Toggle style={{color:"white", paddingTop: '10px', fontWeight: "bold", fontSize: "14px", textDecoration: "none" ,fontFamily: "SofiaCondensed", letterSpacing: "1px"}} variant="link" id="dropdown-basic">
                        ABOUT
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{borderRadius:"0", backgroundColor:"#0a2137", color: "white",fontFamily: "SofiaCondensed"}}>
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/abcs-of-mlp/">ABC'S OF MLP</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px"  }} />                        
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/our-mission/">OUR MISSION</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px"  }} />                      
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/watch-follow/new-to-mlp/">NEW TO MLP</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px"  }} />                        
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/faq/">FAQ</Dropdown.Item>
                        <Dropdown.Divider style={{borderColor: "#a0b0c0", margin:"10px" }} />
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/sponsors/">SPONSORS</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown.Divider style={{borderTop: "solid", borderWidth: '1px' , borderColor: "#a0b0c0", color: "#a0b0c0", margin:"1px"}} />

                    <Dropdown style={{ backgroundColor: "#182a3e", color:"white"}} >
                    <Dropdown.Toggle style={{color:"white", paddingTop: '10px', fontWeight: "bold", fontSize: "14px", textDecoration: "none" ,fontFamily: "SofiaCondensed", letterSpacing: "1px"}} variant="link" id="dropdown-basic">
                        NEWS
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{borderRadius:"0", backgroundColor:"#0a2137", color: "white",fontFamily: "SofiaCondensed"}}>
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://www.majorleaguepickleball.net/news-updates/">NEWS</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown.Divider style={{borderTop: "solid", borderWidth: '1px' , borderColor: "#a0b0c0", color: "#a0b0c0", margin:"1px"}} />

                    <Dropdown style={{ backgroundColor: "#182a3e", color:"white"}} >
                    <Dropdown.Toggle style={{color:"white", paddingTop: '10px', fontWeight: "bold", fontSize: "14px", textDecoration: "none" ,fontFamily: "SofiaCondensed", letterSpacing: "1px"}} variant="link" id="dropdown-basic">
                        SHOP
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{borderRadius:"0", backgroundColor:"#0a2137", color: "white",fontFamily: "SofiaCondensed"}}>
                        <Dropdown.Item style={{ fontStyle: "italic"}} href="https://fromuthpickleball.com/topic/mlp">SHOP</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>

    </>
    );
                                                                        };
