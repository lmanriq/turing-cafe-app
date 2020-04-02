import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', 
      date: '', 
      time: '',
      number: ''
    }
  }

  updateState(e) {
    this.setState({[e.target.id]: e.target.value})
  }

  makeReservation() {
    const newReservation = {...this.state, id: Date.now()}
    this.props.addReservation(newReservation);
  }

  render() {
    return(
      <form>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' placeholder='your name' value={this.state.name} onChange={(e) => this.updateState(e)} />
        <label htmlFor='date'>Date:</label>
        <input type='text' id='date' placeholder='date' value={this.state.date} onChange={(e) => this.updateState(e)} />
        <label htmlFor='time'>Time:</label>
        <input type='text' id='time' placeholder='time' value={this.state.time} onChange={(e) => this.updateState(e)} />
        <label htmlFor='number'>Number of guests:</label>
        <input type='text' id='number' placeholder='number of guests' value={this.state.number} onChange={(e) => this.updateState(e)} />
        <button type='button' onClick={() => this.makeReservation()}>Make Reservation</button>
      </form>
    )
  }
}

export default Form; 