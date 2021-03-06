import React from "react";

// Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">DogeDex</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
