import React from "react";
import { Typography, Toolbar, AppBar } from "material-ui";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" color="inherit">
          Duits - Nederlands
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
