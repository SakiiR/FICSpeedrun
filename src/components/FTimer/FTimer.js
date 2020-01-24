import React from "react";
import { Typography } from "@material-ui/core";
import PropType from "prop-types";
import "./FTimer.css";

function timeBetweenDates(toDate) {
  const dateEntered = toDate;
  const now = new Date();
  const difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {
    // Timer done
    return { over: true };
  } else {
    let milliseconds = Math.floor(difference / 10000);
    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    return { over: false, seconds, minutes, hours, days, milliseconds };
  }
}

export default class FTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { over: false };
  }

  tick(end) {
    const o = timeBetweenDates(end);
    this.setState(o);
    setTimeout(() => {
      this.tick(end);
    }, 500);
  }

  componentDidMount() {
    this.setState({
      over: true
    });
    const { timestamp } = this.props;
    const end = new Date(parseInt(timestamp) * 1000);
    console.log(end);

    this.tick(end);
  }

  render() {
    const { timestamp } = this.props;

    if (timestamp == null) {
      return (
        <Typography variant="h2">Invalid timestamp provided :(</Typography>
      );
    }

    /**
     * Timestmap stuff
     */
    const { days, hours, minutes, seconds, over } = this.state;

    return (
      <div id="timer">
        <span id="days">{days}</span>days
        <span id="hours">{hours}</span>hours
        <span id="minutes">{minutes}</span>minutes
        <span id="seconds">{seconds}</span>seconds
        {over && <Typography variant="h2">The speed run is over !</Typography>}
      </div>
    );
  }
}

FTimer.propTypes = {
  timestamp: PropType.number.isRequired
};
