import React from "react";
import Configuration from "../../configuration/config";
import PropTypes from "prop-types";
import { Paper, withStyles, Typography } from "@material-ui/core";
import "./FTeamPaper.css";

const styles = theme => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    height: "300px",
    color: theme.palette.text.secondary
  }
});

class FTeamPaper extends React.Component {
  render() {
    const { classes, team } = this.props;

    return (
      <div>
        <Typography variant="h6">
          <font color="grey">
            <b>{team.name}</b>
          </font>{" "}
          -{" "}
          <font color="green">
            <b>{team.solves}</b> Solves
          </font>{" "}
          <font color="red">
            <b>{team.fails}</b> Fails
          </font>
          {team.lead && <span> - Leader</span>}
        </Typography>
        <Paper elevation={10} className={classes.paper}>
          {team.event === null && (
            <img
              src={Configuration.initial_gif}
              alt="current gif"
              className="paper-img"
            />
          )}
          {!(team.event === null) && (
            <img
              src={Configuration.rd(Configuration.events[team.event].gifs)}
              alt="current gif"
              className="paper-img"
            />
          )}
        </Paper>
      </div>
    );
  }
}

FTeamPaper.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FTeamPaper);
