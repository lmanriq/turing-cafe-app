import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({ id, name, date, time, number, deleteReservation }) => {
  return (
    <article className='resy-card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} PM</p>
      <p>Number of guests: {number}</p>
      <button data-testid={id} type='button' onClick={() => deleteReservation(id)}>cancel</button>
    </article>
  )
}

export default ReservationCard;