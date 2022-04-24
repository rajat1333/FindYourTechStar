import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LandingNavBar from "../LandingPage/LandingNavBar";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  //get the books data from backend
  componentDidMount() {
    const userInfo = {
      // emaiId : cookie.load("cookie")
      // emaiId: localStorage.getItem("username"),
    };
    // axios.defaults.headers.common["authorization"] =
    //   localStorage.getItem("token");
    // axios.post("/home", userInfo).then((response) => {
    //   //update the state with the response data
    //   console.log("Getting data from backend : " + response.data);

    //   this.setState({
    //     products: this.state.products.concat(response.data),
    //   });
    //   console.log("products : " + JSON.stringify(this.state.products));
    // });
  }

  render() {
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
    );
  }
}
//export Home Component
export default LandingPage;
