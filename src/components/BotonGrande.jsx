import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    fontSize: 20,
    margin: theme.spacing(2, 0)
  }
}));

const BotonGrande = props => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="default"
      className={classes.button}
      {...props}
    />
  );
};

export default BotonGrande;
