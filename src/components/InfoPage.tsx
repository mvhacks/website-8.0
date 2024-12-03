import "../App.css";
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import React from 'react';

export default function InfoPage() {
  return (
    <div style={{marginTop: "100px"}}>
      <Card
        orientation="horizontal"
        size="md"
        variant="outlined"
        sx={{
          "--Card-padding": "16px",
          "--Card-radius": "26px",
          display: "flex",
          flexDirection: "column",
          width: "50%",
          backgroundColor: "black"
        }}>
          <CardContent sx={{alignItems: "center"}}>
            <Typography textColor={"#c8acd4"} level="h2">Where Boundaries Fade and Ideas Flourish</Typography>
            <Typography textColor={"common.white"}>MVHacks is proud to give a platform for aspiring tech enthusiasts to grow and learn by making unique projects that progress society.</Typography>
          </CardContent>
      </Card>
      <Card
        orientation="horizontal"
        size="md"
        variant="outlined"
        sx={{
          "--Card-padding": "16px",
          "--Card-radius": "26px",
          display: "flex",
          flexDirection: "column",
          width: "50%",
          marginLeft: "48%",
          marginTop: "100px",
          backgroundColor: "black"
        }}>
          <CardContent sx={{alignItems: "center"}}>
            <Typography textColor={"#c8acd4"} level="h2">Workshops and advice to help you grow</Typography>
            <Typography textColor={"common.white"}>With specialized judges that are currently in the tech industry, at MVHacks you'll receive the best feedback to help you improve.</Typography>
          </CardContent>
      </Card>
      <Card
        orientation="horizontal"
        size="md"
        variant="outlined"
        sx={{
          "--Card-padding": "16px",
          "--Card-radius": "26px",
          display: "flex",
          flexDirection: "column",
          marginTop: "100px",
          width: "50%",
          backgroundColor: "black"
        }}
      >
          <CardContent sx={{alignItems: "center"}}>
            <Typography textColor={"#c8acd4"} level="h2">Real world collaboration and innovation</Typography>
            <Typography textColor={"common.white"}>The MVHacks schedule is currently in development, but expect team-building exercises, workshops, and challenges!</Typography>
          </CardContent>
      </Card>
    </div>);
}