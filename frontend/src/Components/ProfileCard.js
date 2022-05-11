import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid, Link, List, ListItem } from "@mui/material";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

export default function ProfileCard(props) {
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))[0]
  );
  const [currentProfileCard, setProfileCard] = useState("");
  const [image, setImage] = useState("");
  const [repos, setRepos] = useState([]);
  const [show, setShow] = useState(props.show);
  const handleShow = () => setShow(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setProfileCard(JSON.parse(localStorage.getItem("filteredUsers"))[0]);
    axios
      .get(
        "https://api.github.com/users/" +
          JSON.parse(localStorage.getItem("filteredUsers"))[0].githubUsername +
          "/repos"
      )
      .then((response) => {
        setRepos(response.data);
        console.log(repos);
      });
  }, []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("filteredUsers")).length !== 0) {
      axios
        .get(
          "https://api.github.com/users/" +
            JSON.parse(localStorage.getItem("filteredUsers"))[0]
              .githubUsername +
            "/repos"
        )
        .then((response) => {
          setRepos(response.data);
          console.log(repos);
        });
    }
  }, [currentProfileCard]);

  const notInterested = (e) => {
    setMessage(
      "Not Interested in collaborating with " +
        currentProfileCard.firstName +
        " " +
        currentProfileCard.lastName
    );
    handleShow();
    setTimeout(() => {
      handleClose();
      deleteItem(0);
      if (JSON.parse(localStorage.getItem("filteredUsers")).length !== 0) {
        setProfileCard(JSON.parse(localStorage.getItem("filteredUsers"))[0]);
      } else {
        setProfileCard("");
      }
    }, 700);
  };

  const interested = (e) => {
    setMessage(
      "Interested in collaborating with " +
        currentProfileCard.firstName +
        " " +
        currentProfileCard.lastName
    );
    handleShow();
    setTimeout(() => {
      handleClose();
      deleteItem(0);
      if (JSON.parse(localStorage.getItem("filteredUsers")).length !== 0) {
        setProfileCard(JSON.parse(localStorage.getItem("filteredUsers"))[0]);
      } else {
        setProfileCard("");
      }
    }, 700);
  };

  //Closing the modal
  const handleClose = () => {
    setMessage("");
    setShow(false);
  };

  function deleteItem(index) {
    const existingEntries = JSON.parse(localStorage.getItem("filteredUsers"));
    existingEntries.splice(index, 1);
    localStorage.setItem("filteredUsers", JSON.stringify(existingEntries));
  }

  return currentUser === "" ||
    currentProfileCard === "" ||
    currentProfileCard === null ? (
    <div>
      <h1>No more users left</h1>
    </div>
  ) : (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={11} align="center">
          <Box sx={{ width: 700, height: 1000 }}>
            <CardContent>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      {" "}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={notInterested}
                      >
                        Not Interested
                      </Button>
                      <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Body>
                          <div class={message ? "visible" : "invisible"}>
                            <div class="alert alert-primary">{message}</div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </Grid>
                    <Grid item xs={5}>
                      <img
                        style={{
                          position: "sticky",
                          height: "130px",
                          width: "130px",
                        }}
                        src={
                          image
                            ? image
                            : "https://firebasestorage.googleapis.com/v0/b/etsy-lab1.appspot.com/o/userdefault.png?alt=media&token=d8869205-3aff-41db-b84d-cc57b92d4e50"
                        }
                        className="card-img-top"
                        alt="description of image"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      {" "}
                      <Button
                        variant="contained"
                        color="success"
                        onClick={interested}
                      >
                        Interested
                      </Button>
                      <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Body>
                          <div class={message ? "visible" : "invisible"}>
                            <div class="alert alert-primary">{message}</div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </Grid>
                  </Grid>

                  <Typography
                    sx={{ fontSize: 18, color: "#212121", mb: "0" }}
                    color="text.secondary"
                    align="left"
                    gutterBottom
                  >
                    {currentProfileCard.firstName} {currentProfileCard.lastName}{" "}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 18, color: "#212121", mb: "0" }}
                    color="text.secondary"
                    align="left"
                    gutterBottom
                  >
                    {currentProfileCard.age}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 18, color: "#212121", mb: "0" }}
                    color="text.secondary"
                    align="left"
                    gutterBottom
                  >
                    {currentProfileCard.city} {currentProfileCard.country}{" "}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 18, color: "#212121", mb: "0" }}
                    color="text.secondary"
                    align="left"
                    gutterBottom
                  >
                    About me: {currentProfileCard.About}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 18, color: "#212121", mb: "0" }}
                    color="text.secondary"
                    align="left"
                    gutterBottom
                  >
                    Interested in people skilled in:
                  </Typography>

                  <Typography
                    sx={{ fontSize: 18, color: "#212121", mb: "0" }}
                    color="text.secondary"
                    align="left"
                    gutterBottom
                  >
                    {currentProfileCard.yearsOfExperience}
                  </Typography>
                  {repos === "" ? (
                    <div></div>
                  ) : (
                    <Typography
                      sx={{ fontSize: 18, color: "#212121", mb: "0" }}
                      color="text.secondary"
                      align="left"
                      gutterBottom
                    >
                      Github public repos :{" "}
                      <Link
                        href={
                          "https://github.com/" +
                          currentProfileCard.githubUsername
                        }
                        target="_blank"
                      >
                        {" "}
                        {repos.length}
                      </Link>
                    </Typography>
                  )}
                  <Typography
                    sx={{ fontSize: 18, color: "#212121", mb: "0" }}
                    color="text.secondary"
                    align="left"
                    gutterBottom
                  >
                    Contribution this past year:
                  </Typography>
                  <img
                    src={
                      "https://ghchart.rshah.org/" +
                      currentProfileCard.githubUsername
                    }
                    alt="Github contribution chart"
                  />
                  <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                    {repos.slice(0, 5).map((repo) => (
                      <ListItem sx={{ border: 1, borderColor: "#e0e0e0" }}>
                        <Typography
                          sx={{ fontSize: 18, color: "#212121", mb: "0" }}
                          color="text.secondary"
                          align="left"
                          gutterBottom
                        >
                          <Link href={repo.html_url} target="_blank">
                            {" "}
                            {repo.name}
                          </Link>
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
