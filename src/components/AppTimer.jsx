import React, { Component } from "react";
import { Container, Jumbotron, Progress } from "reactstrap";

class AppTimer extends Component {
  state = {
    date: new Date(),
  };
  render() {
    return (
      <div>

        <Jumbotron className="my-2">

          <Container>
            <h3>
              It's been {formatDuration(this.state.date)} since this week
              started!
            </h3>

            <h5>
              This is how much time has passed represented by a progress bar
            </h5>

            <div className="p-3 my-2 rounded bg-secondary">
              <Progress
                animated
                color="success"
                value={
                  (this.state.date.getDay() / 7) * 100 +
                  this.state.date.getHours() / 1.68
                }
              />
            </div>
          </Container>


          <Container>
            <h6>
              and there is still {formatDuration(this.state.date, 1)} left in it
            </h6>
          </Container>


          <Container>
            <hr className="my-2" />
            <h2>Let's use this time wisely! Stay organized!</h2>
          </Container>


        </Jumbotron>
      </div>
    );
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.update(), 500);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  update = () => {
    this.setState({
      date: new Date(),
    });
  };
}

export default AppTimer;

function formatDuration(date, n) {
  let min = date.getMinutes(),
    seconds = date.getSeconds(),
    hours = date.getHours(),
    days = date.getDay(),
    years = 0,
    i = 0;
  if (n) {
    min = 60 - min;
    seconds = 60 - seconds;
    hours = 24 - hours;
    days = 6 - days;
  }
  let acc = [seconds, min, hours, days, years];
  let res = [];
  let res1 = [];
  let curr = "";
  let o = ["seconds", "minutes", "hours", "days", "years"];
  let s = ["second", "minute", "hour", "day", "year"];
  for (i = acc.length; i > -1; i -= 1) {
    if (acc[i] > 0) {
      if (acc[i] == 1) {
        curr = s[i];
      }
      if (acc[i] > 1) {
        curr = o[i];
      }
      res.push(acc[i] + " " + curr);
    }
  }
  for (i = 0; i < res.length; i += 1) {
    let curr1 = i == res.length - 2 ? " and " : ", ";
    res1.push(res[i] + curr1);
  }
  res1 = res1.join("");
  res1 = res1.slice(0, res1.length - 2);
  return res1;
}
