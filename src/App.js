import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter/counter";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

handleDelete = (counterId) => {
  console.log('event handler called',counterId);
  const counters = this.state.counters.filter(c=> c.id !== counterId);
  this.setState({counters});
}

handleReset = () => {
  console.log("RESET");
  const counters = this.state.counters.map(c => {
    c.value = 0;
    return c;
  });

  this.setState({ counters });
};

handleIncrement = (counter) => {
  console.log(counter);
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter}
  counters[index] .value++;
  this.setState({counters})
};


  render() {
    return (
      <div className="App">
        <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} onDelete={this.handleDelete} onIncrement={this.handleIncrement} counter={counter}/>
        ))}
      </div>
    );
  }
}

export default App;
