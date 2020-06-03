import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Counters from './components/counters'
import NavBar from './components/navBar'

class App extends React.Component {
  state = {
    counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
  }
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.reduce((a, b) => a + b.value, 0)} />
        <div className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </div>
      </React.Fragment>
    );
  }

  handleReset = () => {
    const counters = this.state.counters.map(counter => {counter.value = 0; return counter;})
    this.setState({ counters })
  }

  handleIncrement = (counter) => {
    let { counters } = this.state
    const index = counters.indexOf(counter)
    counters[index].value += 1
    this.setState({ counters });
  }

  handleDecrement = (counter) => {
    let { counters } = this.state
    const index = counters.indexOf(counter)
    counters[index].value -= counters[index].value > 0 ? 1 : 0
    this.setState({ counters });
  }

  handleDelete = (counter) => {
    let counters = this.state.counters.filter(c => c.id !== counter.id)
    this.setState({ counters })
  }
}

export default App;
