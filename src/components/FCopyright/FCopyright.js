import React from "react";
import { Typography } from "@material-ui/core";

export default class FCopyright extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h7">
          <i>Made with {"<3"} by </i>
          <a
            style={{ color: "white" }}
            href="https://twitter.com/sakiirsecurity"
          >
            <b>@SakiiR</b>
          </a>
        </Typography>
      </div>
    );
  }
}
