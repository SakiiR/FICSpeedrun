import React from "react";
import PropTypes from "prop-types";
import Configuration from "../../configuration/config";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  withStyles,
  LinearProgress
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FCopyright from "../FCopyright/FCopyright";

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

class FBar extends React.Component {
  render() {
    const { classes, loading } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Speedrun - Step {Configuration.step}
          </Typography>
          <FCopyright />
        </Toolbar>
        {loading && <LinearProgress />}
      </AppBar>
    );
  }
}

FBar.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default withStyles(styles)(FBar);
