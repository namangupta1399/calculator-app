import React from "react";
import "./App.scss";
import { Button, Container, Grid } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    numOne: 0,
    numTwo: 0,
    operator: "",
    screenVal: "",
  };

  initialState = { ...this.state };

  handleButtonClick = (item) => {
    if (item === "=" && this.state.operator) {
      const sol = eval(
        `${this.state.numOne} ${this.state.operator} ${this.state.numTwo}`
      );
      // console.log(sol);
      this.setState({
        numOne: sol,
        numTwo: 0,
        operator: "",
        screenVal: sol,
      });
      return;
    }
    switch (item) {
      case "/":
      case "*":
      case "+":
      case "-":
        this.setState((prevState) => {
          return {
            ...prevState,
            operator: item,
            screenVal: `${prevState.screenVal}${item}`,
          };
        });
        return;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (this.state.operator === "") {
          this.setState((prevState) => {
            return {
              ...prevState,
              numOne: parseInt(prevState.numOne) * 10 + parseInt(item),
              screenVal: `${prevState.screenVal}${item}`,
            };
          });
        } else {
          this.setState((prevState) => {
            return {
              ...prevState,
              numTwo: parseInt(prevState.numTwo) * 10 + parseInt(item),
              screenVal: `${prevState.screenVal}${item}`,
            };
          });
        }
        return;
      default:
        return;
    }
  };

  render() {
    console.log(this.state);
    return (
      <Container maxWidth="sm">
        <BrowserRouter>
          <Route path="/">
            <div className="user-input">
              <input
                className="user-input__field"
                type="text"
                value={this.state.screenVal}
                readOnly
              />
            </div>
            <div className="button-grp">
              <Grid container spacing={3}>
                <Grid item xs={9}>
                  <Button
                    className="button-grp__item"
                    onClick={() => this.setState({ ...this.initialState })}
                  >
                    Clear
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    className="button-grp__item"
                    onClick={this.handleButtonClick.bind(this, "/")}
                  >
                    /
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    className="button-grp__item"
                    onClick={this.handleButtonClick.bind(this, "7")}
                  >
                    7
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    className="button-grp__item"
                    onClick={this.handleButtonClick.bind(this, "8")}
                  >
                    8
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    className="button-grp__item"
                    onClick={this.handleButtonClick.bind(this, "9")}
                  >
                    9
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    className="button-grp__item"
                    onClick={this.handleButtonClick.bind(this, "*")}
                  >
                    X
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    className="button-grp__item"
                    onClick={this.handleButtonClick.bind(this, "4")}
                  >
                    4
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    className="button-grp__item"
                    onClick={this.handleButtonClick.bind(this, "5")}
                  >
                    5
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    className="button-grp__item"
                    onClick={this.handleButtonClick.bind(this, "6")}
                  >
                    6
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    className="button-grp__item"
                    onClick={this.handleButtonClick.bind(this, "-")}
                  >
                    -
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    className="button-grp__item"
                    onClick={this.handleButtonClick.bind(this, "1")}
                  >
                    1
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    className="button-grp__item"
                    onClick={this.handleButtonClick.bind(this, "2")}
                  >
                    2
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    className="button-grp__item"
                    onClick={this.handleButtonClick.bind(this, "3")}
                  >
                    3
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    className="button-grp__item"
                    onClick={this.handleButtonClick.bind(this, "+")}
                  >
                    +
                  </Button>
                </Grid>
                <Grid item xs={9}>
                  <Button
                    className="button-grp__item"
                    onClick={this.handleButtonClick.bind(this, "0")}
                  >
                    0
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    className="button-grp__item"
                    onClick={this.handleButtonClick.bind(this, "=")}
                  >
                    =
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Route>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
