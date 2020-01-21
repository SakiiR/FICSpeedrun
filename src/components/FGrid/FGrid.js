import React from "react";
import { Grid, Typography } from "@material-ui/core";
import FTeamPaper from "../FTeamPaper/FTeamPaper";
import "./FGrid.css";
import Configuration from "../../configuration/config";

class FGrid extends React.Component {
  // Tick system :)
  itick() {
    this.props.tick();
    setTimeout(() => {
      this.itick();
    }, Configuration.tick_duration);
  }

  componentDidMount() {
    const { listTeams } = this.props;

    listTeams();
    this.itick();
  }
  render() {
    const spacing = 10;
    const { team1, team2, team3, team4, message } = this.props;

    return (
      <div>
        <Typography variant="h3" className="message-center">
          {message}
        </Typography>
        <Grid container spacing={spacing}>
          <Grid item xs={6}>
            <FTeamPaper team={team1} />
          </Grid>
          <Grid item xs={6}>
            <FTeamPaper team={team2} />
          </Grid>
        </Grid>
        <Grid container spacing={spacing}>
          <Grid item xs={6}>
            <FTeamPaper team={team3} />
          </Grid>
          <Grid item xs={6}>
            <FTeamPaper team={team4} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default FGrid;
