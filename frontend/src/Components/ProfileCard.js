import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid, Link, List, ListItem } from "@mui/material";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function ProfileCard(props) {
  //   const { users } = useLocation();
  //   const { users } = props.location.state;
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")));
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem("users"))[0]
  );
  const [image, setImage] = useState("");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.github.com/users/" + currentUser.githubUsername + "/repos"
      )
      .then((response) => {
        setRepos(response.data);
        console.log(repos);
      });
  }, []);

  function openTab(e) {
    window.open(e);
  }

  const card = <React.Fragment></React.Fragment>;

  return currentUser === "" || users === "" || users === null ? (
    <div></div>
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
                      <Button variant="contained" color="primary">
                        Not Interested
                      </Button>
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
                      <Button variant="contained" color="success">
                        Interested
                      </Button>
                    </Grid>
                  </Grid>

                  <Typography
                    sx={{ fontSize: 18, color: "#212121", mb: "0" }}
                    color="text.secondary"
                    align="left"
                    gutterBottom
                  >
                    {currentUser.firstName} {currentUser.lastName}{" "}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 18, color: "#212121", mb: "0" }}
                    color="text.secondary"
                    align="left"
                    gutterBottom
                  >
                    {currentUser.age}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 18, color: "#212121", mb: "0" }}
                    color="text.secondary"
                    align="left"
                    gutterBottom
                  >
                    {currentUser.city} {currentUser.country}{" "}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 18, color: "#212121", mb: "0" }}
                    color="text.secondary"
                    align="left"
                    gutterBottom
                  >
                    About me: {currentUser.About}
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
                    {currentUser.yearsOfExperience}
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
                        href="https://github.com/utkarshpant112"
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
                    src="https://ghchart.rshah.org/utkarshpant112"
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
