import {Header} from "./Header";
import {HeaderCurrentTournament} from "./HeaderCurrentTournament";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const Home = (props) => {
    return (
        <div className="home">
            {/* <Row style={{marginTop: '-1px'}}>
                <Col style={
                        {
                            fontFamily: "Kanit",
                            color: 'white',
                            backgroundColor: "#1b3448",
                            paddingTop: "4px"
                        }
                    }
                    align="right">MLP EVENTS</Col>
                <Col align="left"
                    style={
                        {
                            fontFamily: "Kanit",
                            color: 'white',
                            backgroundColor: "#1b3448"
                        }
                }>
                    <Button href="https://www.majorleaguepickleball.net/watch-follow"
                        style={
                            {
                                fontFamily: "Kanit",
                                color: 'white',
                                margin: "2px",
                                borderRadius: "2px"

                            }
                        }
                        size='sm'>
                        WATCH LIVE
                    </Button>
                </Col>
            </Row> */}
            <Header/>
            <HeaderCurrentTournament/>
        </div>
    );
};
