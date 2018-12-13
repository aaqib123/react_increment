import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  render() {
    console.log({ count: this.props });
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  formatCount = () => {
    const counter = this.state.value;
    return counter === 0 ? "Zero" : counter;
  };

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  };

  handleIncrement = () => {
    console.log("incremented");
    this.setState({ value: this.state.value + 1 });
  };
}

export default Counter;
