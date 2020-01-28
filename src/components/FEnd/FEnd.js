import React from "react";
import PropTypes from "prop-types";
import Table from "../../containers/Table/Table";
import { Typography } from "@material-ui/core";
import FSponsors from "../FSponsors/FSponsors";

export default class FEnd extends React.Component {
  componentDidMount() {
    const { onLoad } = this.props;

    onLoad();
  }

  render() {
    return (
      <div>
        <Typography variant="h2">
          This is the end, thank you all{" "}
          <span role="img" aria-label="Thanks">
            🙏🏻
          </span>
        </Typography>
        <Table />
        <FSponsors />
      </div>
    );
  }
}

FEnd.propTypes = {
  onLoad: PropTypes.func.isRequired
};
