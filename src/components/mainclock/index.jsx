import React from "react";

import { Container } from "react-bootstrap";
import Buttons from "../buttons";
import DisplayClock from "../displayclock";

class Timer extends React.Component {
  state = {
    sec: 0,
    min: 0,
  };
  intervalId = null;

  increment = () => {
    if (this.state.sec === 59 && this.state.sec !== 0) {
      this.setState({ min: this.state.min + 1, sec: 0 });
    } else {
      this.setState({ sec: this.state.sec + 1 });
    }
  };

  decrement = () => {
    if (this.state.sec === 0 && this.state.min > 0) {
      this.setState({ min: this.state.min - 1, sec: 59 });
    } else if (this.state.sec > 0) {
      this.setState({ sec: this.state.sec - 1 });
    }
  };

  startTimer = () => {
    if ((this.state.sec > 0 || this.state.min > 0) && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState({ sec: this.state.sec - 1 }, () => {
          if (this.state.sec === 0 && this.state.min === 0) {
            alert("Done!!!");
            clearInterval(this.intervalId);
            this.intervalId = null;
          } else if (this.state.sec === 0 && this.state.min !== 0) {
            this.setState({ min: this.state.min - 1, sec: 59 });
          }
        });
      }, 1000);
    }
  };

  stopTimer = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };
  resetTimer = () => {
    this.setState({ sec: 0, min: 0 });
    clearInterval(this.intervalId);
    this.intervalId = null;
  };

  render() {
    let { sec, min } = this.state;
    return (
      <Container>
        <div className="display-4">
          <DisplayClock min={min} sec={sec} />

          <Buttons onclick={this.increment} sign="+" variant="outline-info" />
          <Buttons
            onclick={this.decrement}
            sign="-"
            variant="outline-secondary"
          />
        </div>
        <div className="mt-4">
          <Buttons
            sign="Start"
            onclick={this.startTimer}
            variant="outline-success"
          />
          <Buttons
            sign="Stop"
            onclick={this.stopTimer}
            variant="outline-warning"
          />
          <Buttons
            sign="Reset"
            onclick={this.resetTimer}
            variant="outline-danger"
          />
        </div>
      </Container>
    );
  }
}

export default Timer;
