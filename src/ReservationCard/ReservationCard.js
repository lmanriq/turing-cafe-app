import React from 'react';
import './ReservationCard.css';

//   {
// "id": 1,
// "name": "Christie",
// "date": "12/29",
// "time": "7:00",
// "number": 12
// }

const ReservationCard = ({ id, name, date, time, number }) => {
  return (
    <article>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number}</p>
    </article>
  )
}

export default ReservationCard;