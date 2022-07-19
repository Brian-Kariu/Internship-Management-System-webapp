import "./Jobs.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const card = (
  <React.Fragment>
    <CardContent>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              Software Engineer Internship
            </Typography>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          Savannah is a healthcare tech company aimed at bring
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label="Nairobi" />
          <Chip color="primary" label="Software Engineering" />
          <Chip label="Python" />
          <Chip label="Full Time" />
        </Stack>
      </Box>
    </CardContent>
    <CardActions>
      <Button variant="contained">Apply</Button>
    </CardActions>
  </React.Fragment>
);

function Jobs() {
  return (
    <div className="content">
      <Box className="jobs">
        <Card variant="outlined" className="job">{card}</Card>
        <Card variant="outlined" className="job">{card}</Card>
        <Card variant="outlined" className="job">{card}</Card>
      </Box>
    </div>
  );
}

export default Jobs;
