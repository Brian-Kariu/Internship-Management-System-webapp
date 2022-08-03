import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { Button, Paper } from "@mui/material";
import "./ProfileForm.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProfileForm() {
  const [profile, setProfile] = useState({ value: "initial value" });

  useEffect(() => {
    getProfile();
  }, []);

  function getProfile() {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("/internsystem/studentprofile/", config)
      .then((response) => {
        const data = response.data;
        setProfile(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }
  const token = localStorage.getItem("access_token");
  const handleSubmit = (event) => {
    const data = new FormData(event.currentTarget);
    console.log(profile)
    axios.post("/internsystem/studentprofile/", {
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      DOB: data.get("DOB"),
      field_of_specialization: data.get("field_of_specialization"),
      designation: data.get("designation"),
      organization: data.get("organization"),
      xsrfCookieName: "csrftoken",
      xsrfHeaderName: "X-CSRFTOKEN",
      Authorization: `Bearer ${token}`,
      withCredentials: true,
    });
  };

  if (profile !== null) {
    console.log("Values");
    return null;
  }

  return (
    <Paper elevation={3} className="content">
      <Box
        component="form"
        className="details"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        onSubmit={handleSubmit}
      >
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Profile Details
          </Typography>
          <Grid container spacing={2} >
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="first_name"
                name="first_name"
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                value={profile.first_name}
                onChange={(event) => setProfile(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="last_name"
                name="last_name"
                label="Last name"
                fullWidth
                autoComplete="family-name"
                variant="standard"
                value={profile.last_name}
                onChange={(event) => setProfile(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="designation"
                name="designation"
                label="Designation"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="field_of_specialization"
                name="field_of_specialization"
                label="Field of Specialization"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                value={profile.field_of_specialization}
                onChange={(event) => setProfile(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="DOB"
                name="DOB"
                label="DOB"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="organization"
                name="organization"
                label="Organization"
                fullWidth
                variant="standard"
                value={profile.organization}
                onChange={(event) => setProfile(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </React.Fragment>
      </Box>
    </Paper>
  );
}
