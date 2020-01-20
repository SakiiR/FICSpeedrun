import PropTypes from "prop-types";
import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import FPlayerPaper from "../FPlayerPaper/FPlayerPaper";

const styles = theme => ({
  grid: {
    spacing: 3
  }
});

class FGrid extends React.Component {
  render() {
    const { classes } = this.props;
    const spacing = 10;

    return (
      <div>
        <Grid container spacing={spacing}>
          <Grid item xs={6}>
            <FPlayerPaper />
          </Grid>
          <Grid item xs={6}>
            <FPlayerPaper />
          </Grid>
        </Grid>
        <Grid container spacing={spacing}>
          <Grid item xs={6}>
            <FPlayerPaper />
          </Grid>
          <Grid item xs={6}>
            <FPlayerPaper />
          </Grid>
        </Grid>
      </div>
    );
  }
}

FGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FGrid);
