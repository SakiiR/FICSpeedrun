import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
});

class FHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: "", redirect: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ date: event.target.value });
  }

  handleSubmit(event) {
    console.log(event);
    event.preventDefault();

    const { date } = this.state;
    // get timestamp
    const d = new Date(date);
    // TODO: handle error
    const ts = d.getTime();
    this.setState({ redirect: `/grid/${ts}` });
  }

  render() {
    const { classes } = this.props;
    const { date, redirect } = this.state;

    return (
      <div>
        <form
          className={classes.container}
          noValidate
          onSubmit={this.handleSubmit}
        >
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            value={date}
            onChange={this.handleChange}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
          />
          <Button type="submit" variant="outlined" color="secondary">
            Submit
          </Button>
        </form>
        {redirect && <Redirect to={redirect} />}
      </div>
    );
  }
}

FHome.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FHome);
