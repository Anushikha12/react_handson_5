import React, { Component } from "react";
import UpdatedComp from "./HigherOrder";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <button onClick={incrementCount}>
        clicked {count} times
      </button>
    );
  }
}
export default UpdatedComp(ClickCounter);
