import React from "react";
import PopoverMenu from "./PopoverMenu";
import ProTip from "./ProTip";
import { Button, Container, Link, Slider, Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <div className="my-4">
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Create React App example with Tailwind CSS in TypeScript
        </Typography>
        <Slider
          className="my-4"
          defaultValue={30}
          classes={{ active: "shadow-none" }}
          slotProps={{ thumb: { className: "hover:shadow-none" } }}
        />
        <Button variant="contained" color="indigo" className="p-6 mx-10">
          Hola Agus
        </Button>
        <PopoverMenu />
        <ProTip />
        <Copyright />
      </div>
    </Container>
  );
}
