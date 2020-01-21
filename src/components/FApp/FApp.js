import React from "react";
import Container from "@material-ui/core/Container";
import Bar from "../../containers/Bar/Bar";
import Grid from "../../containers/Grid/Grid";
import "./FApp.css";

export default class FApp extends React.Component {
  render() {
    return (
      <div>
        <Bar />
        <Container className="my-container" maxWidth="xl">
          <Grid />
        </Container>
      </div>
    );
  }
}
