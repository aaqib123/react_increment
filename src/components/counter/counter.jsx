import React, { Component } from "react";

class Counter extends Component {
<<<<<<< HEAD

=======
  state = {
    value: this.props.value
  };
>>>>>>> 5d0af99c84985e8386459d6c6c10d4198b6a89fa

  render() {
    console.log({ count: this.props });
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
<<<<<<< HEAD
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
=======
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
>>>>>>> 5d0af99c84985e8386459d6c6c10d4198b6a89fa
      </div>
    );
  }

  formatCount = () => {
<<<<<<< HEAD
    const counter = this.props.counter.value;
=======
    const counter = this.state.value;
>>>>>>> 5d0af99c84985e8386459d6c6c10d4198b6a89fa
    return counter === 0 ? "Zero" : counter;
  };

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
<<<<<<< HEAD
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };


=======
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  };

  handleIncrement = () => {
    console.log("incremented");
    this.setState({ value: this.state.value + 1 });
  };
>>>>>>> 5d0af99c84985e8386459d6c6c10d4198b6a89fa
}

export default Counter;
