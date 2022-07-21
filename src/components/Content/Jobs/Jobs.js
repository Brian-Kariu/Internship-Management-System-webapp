import "./Jobs.css";
import React from "react";
import{ useState, useEffect } from "react";
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
import axios from 'axios'

function Jobs() {
  const [jobs , setJobs] = useState([])

  const card = (
    <div>
      {jobs.map(job =>
        <CardContent className="job">
          <Box sx={{ my: 3, mx: 2 }} color="black">
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography gutterBottom variant="h4" component="div">
                  {job.title}
                </Typography>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
            <Typography color="text.secondary" variant="body2">
            {job.description}
            </Typography>
          </Box>
          <Divider variant="middle" />
          <Box sx={{ m: 2 }}>
            <Typography gutterBottom variant="body1">
              Select type
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip label={job.location} />
              <Chip color="primary" label="Software Engineering" />
              <Chip label={job.workplace} />
              <Chip label={job.employment_type} />
            </Stack>
          </Box>
        </CardContent>
        )}
        <CardActions>
          <Button variant="contained">Apply</Button>
        </CardActions>
    </div>
  );

  useEffect(() => {
    async function Fetchjobs() {
      const {data} = await axios.get('http://127.0.0.1:8000/internsystem/job/')
      setJobs(data)
      console.log(data)
    }
    Fetchjobs()
  }, []);
  
  return (
    <div className="content">
      <div className="jobs">
        <Card>{card}</Card>
      </div>
    </div>
  );
}

export default Jobs;
