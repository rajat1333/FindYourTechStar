import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userJson from "./user.json";

function SwipeFilters(props) {
  const [image, setImage] = useState("");
  const [users, setUsers] = useState(userJson);
  const navigate = useNavigate();

  useEffect(() => {
    setUsers(users.filter((user) => user.email !== "utkarsh@gmail.com"));
    console.log(users);
  }, []);

  const normalSwipe = (e) => {
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("swipeType", "normal");
    navigate("/swipe", { users: users });
  };

  const card = (e) => (
    <React.Fragment>
      <CardContent>
        {e === "project" ? (
          <div>
            <img
              style={{
                position: "sticky",
                height: "275px",
                width: "275px",
              }}
              src={
                image
                  ? image
                  : "https://firebasestorage.googleapis.com/v0/b/etsy-lab1.appspot.com/o/Group-Projects.webp?alt=media&token=d8975973-b05f-4ab3-be2b-a2409dac8ad0"
              }
              className="card-img-top"
              alt="description of image"
            />
            <Typography
              sx={{ fontSize: 18, color: "#212121", mb: "0" }}
              color="text.secondary"
              align="center"
              gutterBottom
            >
              Basis of project
            </Typography>
          </div>
        ) : e === "location" ? (
          <div>
            <img
              style={{
                position: "sticky",
                height: "275px",
                width: "275px",
              }}
              src={
                image
                  ? image
                  : "https://firebasestorage.googleapis.com/v0/b/etsy-lab1.appspot.com/o/Maplocation_-5a492a4e482c52003601ea25.jpg?alt=media&token=f68c67be-fefc-4c51-9dfd-57a28744b4fc"
              }
              className="card-img-top"
              alt="description of image"
            />
            <Typography
              sx={{ fontSize: 18, color: "#212121", mb: "0" }}
              color="text.secondary"
              align="center"
              gutterBottom
            >
              Basis of location
            </Typography>
          </div>
        ) : (
          <div>
            <img
              style={{
                position: "sticky",
                height: "275px",
                width: "275px",
              }}
              src={
                image
                  ? image
                  : "https://firebasestorage.googleapis.com/v0/b/etsy-lab1.appspot.com/o/Interests.jpg?alt=media&token=f0d32a5b-53b9-415f-a856-553622008bdd"
              }
              className="card-img-top"
              alt="description of image"
            />
            <Button variant="outlined" color="success" onClick={normalSwipe}>
              Normal
            </Button>
          </div>
        )}
      </CardContent>
    </React.Fragment>
  );

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={4} align="center">
          <Box sx={{ width: 300, height: 300 }}>
            <Card variant="outlined">{card("project")}</Card>
          </Box>
        </Grid>
        <Grid item xs={4} align="center">
          <Box sx={{ width: 300, height: 300 }}>
            <Card variant="outlined">{card("normal")}</Card>
          </Box>
        </Grid>
        <Grid item xs={4} align="center">
          <Box sx={{ width: 300, height: 300 }}>
            <Card variant="outlined">{card("location")}</Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default SwipeFilters;
