import React from "react";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";

function createData(time: string, event: string) {
  return { event, time };
}

const rows = [
  createData("8:00 AM", "Opening Ceremony"),
  createData("8:30 AM", "Start Hacking"),
  createData("9:00 AM", "Capture the Flag Starts"),
  createData("10:30 AM", "Workshop"),
  createData("11:30 AM", "Lunch (provided by MVHacks)"),
  createData("1:00 PM", "Company Presentation"),
  createData("2:00 PM", "Guess the Image Game"),
  createData("3:00 PM", "Developing Websites With React Workshop"),
  createData("4:30 PM", "Geoguessr Multiplayer Live Game"),
  createData("5:30 PM", "Cup Stacking"),
  createData("7:00 PM", "Submissions"),
  createData("7:15 PM", "Voting and Judging"),
  createData("8:00 PM", "Closing Ceremony"),
];

export default function Faqs() {
  return (
    <div style={{ padding: "15%" }}>
      <Typography
        level="h2"
        sx={{
          color: "#ffffff",
          marginBottom: "2%",
          marginRight: "0.7%",
          marginLeft: "0.7%",
          textAlign: "center",
        }}
      >
        EVENT SCHEDULE
      </Typography>
      <Table
        hoverRow
        sx={{
          width: { xs: "100%", sm: "90%", md: "80%", lg: "70%", xl: "60%" },
          margin: "0 auto",
          backgroundColor: "#221a46",
          color: "white !important",
          border: "6px solid #c6add4",
          borderRadius: "16px",
          overflow: "hidden",
          "& td, & th": {
            padding: { xs: "8px 10px", sm: "12px 16px" },
            fontSize: { xs: "0.9rem", sm: "1.1rem" },
            whiteSpace: "normal",
          },
          "& th": {
            backgroundColor: "#221a46",
          },
          "& tr": {
            transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          },
          ".data:hover": {
            backgroundColor: "rgba(158, 138, 169, 0.6) !important",
            boxShadow: "0 0 12px rgba(198, 173, 212, 0.6)",
          },
        }}
      >
        <thead>
          <tr>
            <th
              style={{ width: "30%", textAlign: "center", fontWeight: "bold" }}
            >
              <Typography level="h3" sx={{ color: "#ffffff" }}>
                Time
              </Typography>
            </th>
            <th style={{ textAlign: "center" }}>
              <Typography level="h3" sx={{ color: "#ffffff" }}>
                Event
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr className="data" key={row.time}>
              <td>
                <Typography
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {row.time}
                </Typography>
              </td>
              <td>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: [
                      "Opening Ceremony",
                      "Workshop",
                      "Company Presentation",
                      "Developing Websites With React Workshop",
                      "Closing Ceremony",
                    ].includes(row.event)
                      ? "bold"
                      : "normal",
                  }}
                >
                  {row.event}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
