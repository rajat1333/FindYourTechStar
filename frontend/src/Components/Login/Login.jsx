import { Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
// const jwt_decode = require('jwt-decode');

function Login(props) {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [authFlag, setAuthFlag] = useState(false);
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [redirectVar, setRedirectVar] = useState(null);
  const navigate = useNavigate();

  const emailIdChangeHandler = (e) => {
    setEmailId(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitLogin = (e) => {
    e.preventDefault();
    const data = {
      emailId: emailId,
      password: password,
    };
    //set the with credentials to true
    axios.defaults.withCredentials = true;
    //make a post request with the user data
    axios.post("/login", data).then((response) => {
      if (response.status === 200 && response.data === "Invalid Credentials") {
        alert("Please enter valid username and password!");
        setMessage("Login failed. Please retry with valid credentials");
        setAuthFlag(false);
        // window.open('/login','_self');
      } else {
        console.log("Status Code : ", response.status);
        console.log("data : ", response.data);
        setAuthFlag(true);
        setToken(response.data);
        localStorage.setItem("token", response.data);

        //var decoded = jwt_decode(token.split(' ')[1]);
        localStorage.setItem("user_id", emailId);
        localStorage.setItem("username", emailId);
        //setRedirectVar(<Navigate to= "/home"/>)
        // alert("Item added succussesfully.");
        // props.closeModal(false);
        navigate("/");
      }
    });
  };

  return (
    <Container>
      {redirectVar}
      <Modal
        show={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          onClick={() => {
            props.closeModal(false);
          }}
        >
          <Modal.Title id="contained-modal-title-vcenter">Login Page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <center>
              <div className="login-form">
                <div className="main-div">
                  <div className="panel">
                    <h2>Welcome to FindYourTechStar</h2>
                    <p>Please enter your Email Id and password</p>
                  </div>
                  <Grid container spacing={2}>
                      <Grid item xs={12} sm={12}>
                      <TextField
                      autoComplete="emailId"
                      name="emailId"
                      required
                      fullWidth
                      id="emailId"
                      label="emailId"
                      onChange={emailIdChangeHandler}
                      autoFocus
                    />
                      </Grid>
                    
                    <br />
                    <br />
                    <Grid item xs={12} sm={12}>
                    <TextField
                      autoComplete="password"
                      name="password"
                      type="password"
                      required
                      fullWidth
                      id="password"
                      label="password"
                      onChange={passwordChangeHandler}
                      autoFocus
                    />
                    </Grid>
                    
                  </Grid>


                  {/* <div className="formStyle">
                                <input onChange = {emailIdChangeHandler} type="email" className="form-control" name="emailId" placeholder="Email Id"/>
                            </div> */}
                  {/* <div className="formStyle">
                    <input
                      onChange={passwordChangeHandler}
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                    />
                  </div> */}
                  <br></br>
                  <button onClick={submitLogin} className="btn btn-primary">
                    Login
                  </button>{" "}
                  <br></br>
                  <br></br>
                  <a href="/signUp">
                    <button className="btn btn-primary">Sign Up</button>
                  </a>
                  <div className="formStyle">{message}</div>
                </div>
              </div>
            </center>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              props.closeModal(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Login;
