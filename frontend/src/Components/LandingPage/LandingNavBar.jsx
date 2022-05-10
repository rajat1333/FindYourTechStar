import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import LoginModal from "./LoginModal";

function LandingNavBar(props) {
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState();
  
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("inside login function");
    setOpenModal(true);
    //localStorage.clear();
    //window.open("/login", "_self");
  };
  const handleLogOut = () => {
    console.log("inside logut function");
    localStorage.clear();
    window.open("/home", "_self");
  };
  //handle logout to destroy the cookie
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    console.log("inside handle search");
    navigate("/search/" + search);
    // window.open("/search" , "_self");// todo : a+'?username='+username
  };

  //if Cookie is set render Logout Button
  let navLogin = null;
  if (localStorage.getItem('token')) {
    console.log("Able to read token");
    navLogin = (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Nav.Link onClick={handleLogOut}>
              {" "}
              Log Out
            </Nav.Link>
          </li>
        </ul>
      </div>
    );
  } else {
    //Else display login button
    // console.log("Not Able to read cookie");
    console.log("User session not established");
    navLogin = (
      <ul className="nav navbar-nav navbar-right">
          <li>
            <Nav.Link onClick={handleLogin}>
              {" "}
              Login
            </Nav.Link>
          </li>
        </ul>
    );
  }

  let redirectVar = null;
  if (!localStorage.getItem("token")) {
    //redirectVar = <Navigate to="/login" />;
  }

  let navBarVariable = null;

  if (true) {
    navBarVariable = (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home">FindYourTechStar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/favourites">Description</Nav.Link>
              <Nav.Link href="/userProfile">Contributors</Nav.Link>
              <Nav.Link href="/cart">Persona</Nav.Link>
              <Nav.Link href="/purchase">Saftey</Nav.Link>
              <Nav.Link href="/shopUserAvailablity">Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          

          {openModal && <Login closeModal={setOpenModal}  />}
          {navLogin}
        </Container>
      </Navbar>
    );
  }

  return (
    <div>
      {redirectVar}
      {navBarVariable}
    </div>
  );
}

export default LandingNavBar;
