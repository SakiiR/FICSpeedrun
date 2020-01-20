import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

const styles = theme => ({});

class FTable extends React.Component {
  render() {
    const { classes } = this.props;

    return <div></div>;
  }
}

FTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FTable);
