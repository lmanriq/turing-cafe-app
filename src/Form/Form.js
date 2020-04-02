import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null, 
      date: null, 
      time: null,
      number: null
    }
  }

  render() {
    return(
      <form>
        <label for='name'>Name:</label>
        <input type='text' id='name' placeholder='your name' value={this.state.name} />
        <label for='date'>Date:</label>
        <input type='text' id='date' placeholder='date' value={this.state.date} />
        <label for='time'>Time:</label>
        <input type='text' id='time' placeholder='time' value={this.state.time} />
        <label for='number'>Number of guests:</label>
        <input type='text' id='number' placeholder='number of guests' value={this.state.number} />
      </form>
    )
  }
}

export default Form; 