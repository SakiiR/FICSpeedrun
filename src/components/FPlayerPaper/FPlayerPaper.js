import React from "react";
import PropTypes from "prop-types";
import { Paper, withStyles } from "@material-ui/core";

const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    height: "500px",
    color: theme.palette.text.secondary
  }
});

class FPlayerPaper extends React.Component {
  render() {
    const { classes } = this.props;

    return <Paper className={classes.paper}>TEST</Paper>;
  }
}

FPlayerPaper.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FPlayerPaper);
