import React from "react";
import PropTypes from "prop-types";
import Configuration from "../../configuration/config";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  withStyles,
  CircularProgress
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FCopyright from "../FCopyright/FCopyright";
import { Link } from "react-router-dom";

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
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            Speedrun - {Configuration.step}
          </Typography>
          {loading && <CircularProgress color="inherit" />}
          <FCopyright />
        </Toolbar>
      </AppBar>
    );
  }
}

FBar.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default withStyles(styles)(FBar);
