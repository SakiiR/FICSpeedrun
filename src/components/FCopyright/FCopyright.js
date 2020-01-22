import React from "react";
import { Typography } from "@material-ui/core";

export default class FCopyright extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h4">
          Made with {"<3"} by{" "}
          <a href="https://twitter.com/sakiirsecurity">@SakiiR</a>
        </Typography>
      </div>
    );
  }
}
