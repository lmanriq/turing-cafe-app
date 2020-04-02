import React, { Component } from 'react';
import './App.css';
import ReservationCard from '../ReservationCard/ReservationCard'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

//   {
// "id": 1,
// "name": "Christie",
// "date": "12/29",
// "time": "7:00",
// "number": 12
// }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(data => this.setState({reservations: [...data]}))
      .catch(err => console.error(err.message))
  }

  render() {
    const reservationCards = this.state.reservations.map(reservation => {
      return (
        <ReservationCard
        />
      )
    })

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {reservationCards}
        </div>
      </div>
    )
  }
}

export default App;
