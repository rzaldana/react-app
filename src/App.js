import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
      { id: 5, value: 4 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = this.state.counters.map((c) => {
      if (c.id == counter.id) {
        console.log("hello", counter.id, c.value);
        c.value++;
      }
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("handleDelete Called", counterId);
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      return { id: c.id, value: 0 };
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
