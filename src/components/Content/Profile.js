import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { Button, Paper } from "@mui/material";
import "./Profile.css";
import{ useState, useEffect } from "react";
import axios from 'axios'

export default function ProfileForm() {
  const [profile, setProfile] = useState([]);
  const [formProfile, setFormProfile] = useState({
    first_name: "",
    last_name: "",
    field_of_specialization: "",
    organization: ""
  })

  useEffect(() => {
    getProfile()
      } ,[])
    

  function getProfile() {
    axios({
        method: "GET",
        url:"http://127.0.0.1:8000/internsystem/student/",
        }).then((response)=>{
        const data = response.data
        setProfile(data)
        }).catch((error) => {
        if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
            }
        })}

    function createProfile(event) {
        axios({
            method: "POST",
            url:"http://127.0.0.1:8000/internsystem/student/",
            data:{
                first_name: formProfile.first_name,
                last_name: formProfile.last_name,
                field_of_specialization: formProfile.field_of_specialization,
                organization: formProfile.organization
            }
        })
        .then((response) => {
            getProfile()
        })

        setFormProfile(({
            first_name: "",
            last_name: "",
            field_of_specialization: "",
            organization: ""}))

        event.preventDefault()
    }
    function handleChange(event) { 
        const {value, name} = event.target
        setFormProfile(prevProfile => ({
            ...prevProfile, [name]: value})
        )}
    

  return (
    <Paper elevation={3} className="content">
      {profile.map(user =>
        <Box
            component="form"
            className="details"
            sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        >
            <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Profile Details
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    onChange={handleChange}
                    text={formProfile.first_name}
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    value={user.first_name}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    onChange={handleChange}
                    text={formProfile.last_name}
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    value={user.last_name}
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
                    id="Specialization"
                    onChange={handleChange}
                    text={formProfile.field_of_specialization}
                    name="specialization"
                    label="Field of Specialization"
                    fullWidth
                    autoComplete="shipping address-line2"
                    variant="standard"
                    value={user.field_of_specialization}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="birthdate"
                    name="birthdate"
                    label="DOB"
                    fullWidth
                    autoComplete="shipping address-level2"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    id="organization"
                    onChange={handleChange}
                    text={formProfile.organization}
                    name="organization"
                    label="Organization"
                    fullWidth
                    variant="standard"
                    value={user.organization}
                />
                </Grid>
                <Grid item xs={12}>
                <Button variant="contained" onSubmit={createProfile()}>Submit</Button>
                </Grid>
            </Grid>
            </React.Fragment>
        </Box>
        )}   
    </Paper>
  );
}
