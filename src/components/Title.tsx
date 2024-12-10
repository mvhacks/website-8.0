import React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import circle from "../images/circle.gif";
import Button from "@mui/joy/Button";
import arrow from "../images/arrow.png";

export default function Title() {
  const random = Math.floor(Math.random() * 10000);

  return (
    <Box>
      <div id="title">
        <Typography
          level="h1"
          textColor="common.white"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "6rem", md: "8rem" },
            marginLeft: "10%",
            lineHeight: "7rem",
            marginTop: "10%",
          }}
        >
          MV HACKS
          <br />
          <span style={{ color: "rgb(200,172,212)" }}>8.0</span>
        </Typography>
      </div>

      <div id="subtitle">
        <Typography
          level="h3"
          textColor="common.white"
          sx={{
            lineHeight: "5rem",
            fontWeight: "normal",
            marginLeft: "10%",
          }}
        >
          THE HACKATHON FOR{" "}
          <Box
            position="relative"
            display="inline-block"
            style={{
              justifyContent: "center",
              width: "fit-content",
              alignItems: "center",
            }}
          >
            <img
              alt="circle"
              src={`${circle}?refresh=${random}`}
              style={{
                position: "absolute",
                width: "115%",
                height: "100%",
              }}
            />

            <Typography
              level="h3"
              textColor="common.white"
              sx={{
                fontWeight: "normal",
              }}
            >
              EVERYONE
            </Typography>
          </Box>
        </Typography>
        <Typography level="body-lg" variant="plain" textColor="common.white" sx={{maxWidth: "500px", marginLeft: "10%", marginBottom:"20px"}}>
          Each year, high school hackers from across the Bay Area come together at MVHacks to create cool projects, learn from experts, and participate in 12 hours of hacking! Hackers of all skill levels are welcome to compete, individually or as a group. 
          The date and time of this event are not finalized yet, but will be in Spring 2025 in the Bay Area.
          <Typography level="title-lg" variant="plain" sx={{color: "rgb(150,122,162)"}}>*You can now sign up to be alerted when more details about MVHacks 8.0 are released by clicking the alert me button.</Typography>{' '}
        </Typography>
      </div>
      <Button
        sx={{ borderRadius: "25px", marginLeft: "10%" }}
        id="alert"
        component="a"
        href="https://docs.google.com/forms/d/e/1FAIpQLSefTr6730BXSMYYdAnDXS5hFu_NZ5FHyzNYkv2MYqZoxvkgyQ/viewform"
      >
        ALERT ME
        <img src={arrow} height="25" width="25" id="arrow" alt="arrow-icon" />
      </Button>
    </Box>
  );
}
