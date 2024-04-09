import React from "react";
import { Grid, Typography } from "@mui/material";

const AdditionalInformation = () => {
  return (
    <Grid item xs="12">
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          ml: "20px",
        }}
      >
        <Typography variant="h5" sx={{ mt: "30px" }}>
          Description of Service
        </Typography>
        <Typography
          variant="p"
          sx={{ mt: "10px", textAlign: "start", fontSize: "15px" }}
        >
          The best way is to develop and follow a plan. Start with your goals in
          mind and then work backwards to develop the plan. What steps are
          required to get you to the goals? Make the plan as detailed as
          possible. Try to visualize and then plan for, every possible setback.
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          ml: "20px",
          mt: "30px",
        }}
      >
        <Typography variant="h5">Your Registration Obligations</Typography>
        <Typography
          variant="p"
          sx={{ mt: "10px", textAlign: "start", fontSize: "16px" }}
        >
          Was this just another little prank, courtesy of a mischievous
          Universe? Or is it possible to get good things coming your way with
          only mild desire — maybe even a calm indifference? Many inspirational
          writers, including Napoleon Hill, have assured us that a burning
          desire is one of the prerequisites of acquiring a fortune. I’ve even
          said it myself, although I added the qualifier that the powerful
          desire is not so much for the Universe.
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          ml: "20px",
          mt: "30px",
        }}
      >
        <Typography variant="h5">User Conduct</Typography>
        <Typography
          variant="p"
          sx={{ mt: "10px", textAlign: "start", fontSize: "15px" }}
        >
          Benjamin Franklin, inventor, statesman, writer, publisher and
          economist relates in his autobiography that early in his life he
          decided to focus on arriving at moral perfection. He made a list of 13
          virtues, assigning a page to each. Under each virtue he wrote a
          summary that gave it fuller meaning. Then he practiced each one for a
          certain length of time. To make these virtues a habit,
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AdditionalInformation;
