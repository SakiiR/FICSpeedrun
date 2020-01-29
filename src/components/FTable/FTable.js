import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  CircularProgress,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  withStyles
} from "@material-ui/core";
import Configuration from "../../configuration/config";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
});

class FTable extends React.Component {
  itick() {
    this.props.tick();
    setTimeout(() => {
      this.itick();
    }, Configuration.tick_duration);
  }

  componentDidMount() {
    this.itick();
  }

  render() {
    const { teams, classes } = this.props;

    return (
      <div>
        {teams === null && (
          <div>
            <Typography variant="h4">No scoreboard yet</Typography>
            <CircularProgress />
          </div>
        )}

        {teams !== null && (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Team</TableCell>
                  <TableCell align="right">Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teams.map(team => (
                  <TableRow key={team.name}>
                    <TableCell component="th" scope="row">
                      {team.name}
                    </TableCell>
                    <TableCell align="right">{team.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    );
  }
}

FTable.propTypes = {
  classes: PropTypes.object.isRequired,
  teams: PropTypes.array
};

export default withStyles(styles)(FTable);
