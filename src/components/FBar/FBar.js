import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";

class FBar extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6">Speedrun</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default FBar;
