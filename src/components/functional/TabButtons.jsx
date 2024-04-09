import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Reviews from "./Reviews";
import Description from "./Description";
import AdditionalInformation from "./AdditionalInformation";

export default function TabButtons() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "80%",
        typography: "body1",
        display: "flex",
        justifyContent: "space-between",
        mt: "70px",
        gap: "20px",
        flexWrap: "wrap",
        ml: { xs: 0, md: "120px" },
      }}
    >
      <TabContext value={value}>
        <Box sx={{ margin: { xs: 0, md: "20px" } }}>
          <TabList onChange={handleChange} aria-label="lab API tabs">
            <Tab label="Description" value="1" sx={{ color: "white" }} />
            <Tab
              label="Additional Information"
              value="2"
              sx={{ color: "white", display: { xs: "none", sm: "flex" } }}
            />
            <Tab label="Reviews" value="3" sx={{ color: "white" }} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Description />
        </TabPanel>
        <TabPanel value="2">
          <AdditionalInformation />
        </TabPanel>
        <TabPanel value="3">
          <Reviews />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
