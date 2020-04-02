import React, { Component } from 'react';
import './App.css';
import ReservationCard from '../ReservationCard/ReservationCard';
import Form from '../Form/Form'


class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(data => this.setState({reservations: [...data]}))
      .catch(err => console.error(err.message))
  }

  addReservation(res) {
    const newReservations = [...this.state.reservations, res];
    this.setState({reservations: newReservations})
  }

  render() {
    const reservationCards = this.state.reservations.map(reservation => {
      return (
        <ReservationCard
          key={reservation.id}
          {...reservation}
        />
      )
    })

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form
            addReservation={this.addReservation.bind(this)}
          />
        </div>
        <div className='resy-container'>
          {reservationCards}
        </div>
      </div>
    )
  }
}

export default App;
