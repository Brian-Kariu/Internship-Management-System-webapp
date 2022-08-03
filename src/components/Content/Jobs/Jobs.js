import "./Jobs.css";
import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import { Card } from "@mui/material";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  const card = (
    <Stack direction="column" alignItems={"stretch"} spacing={4}>
      {jobs.map((job) => (
        <Card variant="outlined">
          <CardContent>
            <Box sx={{ my: 3, mx: 2 }} color="black">
              <Typography gutterBottom variant="h4" component="div">
                {job.title}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {job.description}
              </Typography>
            </Box>
            <Box sx={{ m: 2 }}>
              <Stack direction="row" spacing={1}>
                <Chip label={job.location} />
                <Chip label="Software Engineering" />
                <Chip label={job.workplace} />
                <Chip label={job.employment_type} />
              </Stack>
            </Box>
            <CardActions>
              <Button variant="contained">Apply</Button>
            </CardActions>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );

  useEffect(() => {
    async function Fetchjobs() {
      const token = localStorage.getItem("access_token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get("/internsystem/job/", config);
      setJobs(data);
      console.log(data);
    }
    Fetchjobs();
  }, []);

  return <div className="container">{card}</div>;
}

export default Jobs;
