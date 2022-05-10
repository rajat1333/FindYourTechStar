import React from 'react'
import "../../App.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LandingNavBar from "../LandingPage/LandingNavBar";
import {Link} from "react-scroll";

function LandingPage() {

  let redirectVar = null;
    if (!localStorage.getItem('token')) {
      redirectVar = <Navigate to="/login" />;
    }
  return (
    <div>
    {/* {redirectVar} */}
    <LandingNavBar />
    <Container>
      <h2>FindYourTechStar Home Page</h2>
      <Row>
        
      </Row>
    </Container>
  </div>
  )
}

export default LandingPage
