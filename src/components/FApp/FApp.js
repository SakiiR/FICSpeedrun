import React from "react";
import Container from "@material-ui/core/Container";
import Bar from "../../containers/Bar/Bar";
import Grid from "../../containers/Grid/Grid";
import FHome from "../../components/FHome/FHome";
import FEnd from "../../components/FEnd/FEnd";
import { Route } from "react-router-dom";
import "./FApp.css";

export default class FApp extends React.Component {
  render() {
    return (
      <div>
        <Bar />
        <Container className="my-container" maxWidth="xl">
          <Route path="/" exact component={FHome} />
          <Route path="/grid/:timestamp" exact component={Grid} />
          <Route path="/end" exact component={FEnd} />
        </Container>
      </div>
    );
  }
}
