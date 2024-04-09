import { Grid, Typography } from "@mui/material";
import React from "react";

const Description = () => {
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
          So why do we do it?
        </Typography>
        <Typography
          variant="p"
          sx={{ mt: "10px", textAlign: "start", fontSize: "15px" }}
        >
          The best way is to develop and follow a plan. Start with your goals in
          mind and then work. backward to develop the plan. What steps are
          required to get you to the goals? Make the plan as detailed as
          possible. Try to visualize and then plan for, every possible setback.
          Commit the plan to paper and then keep it with you at all times.
          Review it regularly and ensure that every step takes you closer to
          your Vision and Goals. If the plan doesn’t support the vision then
          change it!
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
        <Typography variant="h5">Does it need to be done at all?</Typography>
        <Typography
          variant="p"
          sx={{ mt: "10px", textAlign: "start", fontSize: "16px" }}
        >
          Acres of Diamonds… you’ve read the famous story, or at least had it
          related to you. A farmer hears tales of diamonds and begins dreaming
          of vast riches. He sells his farm and hikes off over the horizon,
          never to be heard from again. Rumors say that years later he died
          destitute, never having found the diamonds he spent his life seeking.
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
        <Typography variant="h5">Can it be done by someone else?</Typography>
        <Typography
          variant="p"
          sx={{ mt: "10px", textAlign: "start", fontSize: "15px" }}
        >
          It turned out to be the Hope Diamond, the largest such stone ever
          found. That stream bed was littered with diamonds, and the new owner
          became fabulously wealthy. No doubt he also lived happily ever after.
          But doesn’t something in that story set strangely with you? What about
          the guy with the burning desire and the grand vision? He ended up
          disappointed and broke.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Description;
