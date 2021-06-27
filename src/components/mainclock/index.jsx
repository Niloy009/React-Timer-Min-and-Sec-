import React from "react";

import { Container, Button } from "react-bootstrap";

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
          <span>{min < 10 ? `0${min} m : ` : `${min} m : `}</span>

          <span>{sec < 10 ? `0${sec} s ` : `${sec} s `}</span>

          <Button
            className={`font-weight-bold`}
            variant="outline-info"
            size="sm"
            onClick={this.increment}
          >
            +
          </Button>
          <Button
            className="ml-4 font-weight-bold"
            variant="outline-secondary"
            size="sm"
            onClick={this.decrement}
          >
            -
          </Button>
        </div>
        <div className="mt-4">
          <Button variant="outline-success" size="sm" onClick={this.startTimer}>
            Start
          </Button>
          <Button
            onClick={this.stopTimer}
            className="ml-4"
            variant="outline-warning"
            size="sm"
          >
            Stop
          </Button>
          <Button
            className="ml-4"
            variant="outline-danger"
            size="sm"
            onClick={this.resetTimer}
          >
            Reset
          </Button>
        </div>
      </Container>
    );
  }
}

export default Timer;
