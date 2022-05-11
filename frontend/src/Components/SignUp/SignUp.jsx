import {
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import LandingNavBar from "../LandingPage/LandingNavBar";
import axios from "axios";
import { TagsInput } from 'react-tag-input-component';

function SignUp() {
  const [userId, setuserId] = useState();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [age, setage] = useState(0);
  const [qualification, setqualification] = useState("");
  const [governmentId, setgovernmentId] = useState("");
  const [githubUsername, setgithubUsername] = useState("");
  const [yearsOfExperience, setyearsOfExperience] = useState("");
  const [techStack, settechStack] = useState([]);
  const [techStackInput, settechStackInput] = useState([]);
  const [interestedTechStack, setinterestedTechStackStack] = useState([]);
  const [image, setimage] = useState();
  const [city, setcity] = useState();
  const [country, setcountry] = useState();
  const [about, setabout] = useState();
  const [interestedIds, setinterestedIds] = useState([]);
  const [notInterestedIds, setnotInterestedIds] = useState([]);


  const handleFirstNameChange = (e) => {
    setfirstName(e.target.value);
  };
  const handlelastNameChange = (e) => {
    setlastName(e.target.value);
  };
  const handleemailIdChange = (e) => {
    setemailId(e.target.value);
  };
  const handlepasswordChange = (e) => {
    setpassword(e.target.value);
  };
  const handlephoneNoChange = (e) => {
    setphoneNo(e.target.value);
  };
  const handledateOfBirthChange = (e) => {
    setdateOfBirth(e.target.value);
  };
  const handleageChange = (e) => {
    setage(e.target.value);
  };
  const handlequalificationChange = (e) => {
    setqualification(e.target.value);
  };
  const handlegovernmentIdChange = (e) => {
    setgovernmentId(e.target.value);
  };

  const handlegithubUsernameChange = (e) => {
    setgithubUsername(e.target.value);
  };
  const handleyearsOfExperienceChange = (e) => {
    setyearsOfExperience(e.target.value);
  };
  const handletechStackChange = (e) => {
    settechStack(e.target.value);
  };
  const handletechStackInputChange = (e) => {
    settechStackInput(e.target.value);
  };
  const onKeyDownHandler = (e) => {
    const {key} = e;
    if(key === " "){
      settechStack(techStack => [...techStack, techStackInput])
      console.log("tech Stack is " + techStack);
      settechStackInput("");
    }
    settechStackInput(e.target.value);
  };
  const handleimageChange = (e) => {
    setimage(e.target.value);
  };
  const handlecityChange = (e) => {
    setcity(e.target.value);
  };
  const handlecountryChange = (e) => {
    setcountry(e.target.value);
  };
  const handleaboutChange = (e) => {
    setabout(e.target.value);
  };

  const handleSaveChanges = (e) => {
    const userInfo = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      password: password,
      phoneNo: phoneNo,
      dateOfBirth: dateOfBirth,
      age: age,
      qualification: qualification,
      governmentId: governmentId,
      githubUsername: githubUsername,
      yearsOfExperience: yearsOfExperience,
      techStack: techStack,
      interestedTechStack: interestedTechStack,
      image: image,
      city: city,
      country: country,
      about: about,
      interestedIds: interestedIds,
      notInterestedIds: notInterestedIds,
    };
    console.log(" user info is : " + JSON.stringify(userInfo));
    // axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    // axios.defaults.withCredentials = true;
    axios.post("/signUp", userInfo).then((response) => {
      console.log("Status Code : ", response.status);
      if (response.data === "User Already Exists") {
        console.log(
          "The given email id is already registered. Please continue to login or use different emailID"
        );
      }
      if (response.data === "User Created") alert("User created successfully");
    });
  };

  return (
    <Container>
      {/* <LandingNavBar /> */}
      <div className="container bootstrap snippets bootdey">
        <br />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <hr />
        <div className="row">
          <div className="col-md-9 personal-info">
            <div className="col-lg-8">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    onChange={handleFirstNameChange}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={handlelastNameChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleemailIdChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={handlepasswordChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="phoneNo"
                    label="phoneNo"
                    id="phoneNo"
                    autoComplete="phoneNo"
                    onChange={handlephoneNoChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="dateOfBirth"
                    label="dateOfBirth"
                    id="dateOfBirth"
                    autoComplete="dateOfBirth"
                    onChange={handledateOfBirthChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="age"
                    label="age"
                    id="age"
                    autoComplete="age"
                    onChange={handleageChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="qualification"
                    label="qualification"
                    id="qualification"
                    autoComplete="qualification"
                    onChange={handlequalificationChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="governmentId"
                    label="governmentId"
                    id="governmentId"
                    autoComplete="governmentId"
                    onChange={handlegovernmentIdChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="githubUsername"
                    label="githubUsername"
                    id="githubUsername"
                    autoComplete="githubUsername"
                    onChange={handlegithubUsernameChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="yearsOfExperience"
                    label="yearsOfExperience"
                    id="yearsOfExperience"
                    autoComplete="yearsOfExperience"
                    onChange={handleyearsOfExperienceChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="techStack"
                    label="techStack"
                    id="techStack"
                    autoComplete="techStack"
                    onChange={handletechStackInputChange}
                    onKeyDown={onKeyDownHandler}
                  />
                  <TagsInput name='tags' placeHolder='e.g.(regex c# ruby)' />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="city"
                    label="city"
                    id="city"
                    autoComplete="city"
                    onChange={handlecityChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="country"
                    label="country"
                    id="country"
                    autoComplete="country"
                    onChange={handlecountryChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="about"
                    label="about"
                    id="about"
                    autoComplete="about"
                    onChange={handleaboutChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="Country">Country :</label>
                <br />
                <div className="container pt-1">
                  <select
                    className="custom-select"
                    // onChange={handleCountryChange}
                    // value={country}
                  >
                    <option value="USA">USA</option>
                    <option value="India">India</option>
                    <option value="UK">UK</option>
                  </select>
                </div>
              </div>
            </div>
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSaveChanges}
            >
              Create Account
            </button>
          </div>
          <div className="col-md-3">
            <div className="text-center">
              <img
                // src={image}
                className="avatar img-circle img-thumbnail"
                alt="avatar"
              />
              <h6>Upload a different photo...</h6>
              <input
                type="file"
                className="form-control"
                // onChange={handleImageChange}
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </Container>
  );
}

export default SignUp;
