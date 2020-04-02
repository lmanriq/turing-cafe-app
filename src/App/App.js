import React, { Component } from 'react';
import './App.css';
import ReservationCard from '../ReservationCard/ReservationCard';
import Form from '../Form/Form';
import { fetchReservations, postReservation, sendDeleteReservation } from '../apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetchReservations()
      .then(data => this.setState({reservations: [...data]}))
      .catch(err => console.error(err.message))
  }

  addReservation(res) {
    res.number = parseInt(res.number);
    postReservation(res)
      .then(data => this.setState({reservations: [...this.state.reservations, data]}))
      .catch(err => console.error(err.message))
  }

  deleteReservation(id) {
    sendDeleteReservation(id)
      .catch(err => console.error(err.message))
    const filteredReservations = this.state.reservations.filter(res => res.id !== id);
    this.setState({reservations: filteredReservations})
  }

  render() {
    const reservationCards = this.state.reservations.map(reservation => {
      return (
        <ReservationCard
          key={reservation.id}
          deleteReservation={this.deleteReservation.bind(this)}
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
