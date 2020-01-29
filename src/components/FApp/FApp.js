import React from "react";
import Container from "@material-ui/core/Container";
import Bar from "../../containers/Bar/Bar";
import Grid from "../../containers/Grid/Grid";
import FHome from "../../components/FHome/FHome";
import End from "../../containers/End/End";
import { Route } from "react-router-dom";
import "./FApp.css";
import Table from "../../containers/Table/Table";

export default class FApp extends React.Component {
  render() {
    return (
      <div>
        <Bar />
        <Container className="my-container" maxWidth="xl">
          <Route path="/" exact component={FHome} />
          <Route path="/grid/:timestamp" exact component={Grid} />
          <Route path="/table/:timestamp" exact component={Table} />
          <Route path="/end" exact component={End} />
        </Container>
      </div>
    );
  }
}
