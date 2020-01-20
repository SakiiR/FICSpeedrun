import React from "react";
import Container from "@material-ui/core/Container";
import FBar from "./components/FBar/FBar";
import FGrid from "./components/FGrid/FGrid";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <FBar />
        <Container className="my-container" maxWidth="xl">
          <FGrid />
        </Container>
      </div>
    );
  }
}
