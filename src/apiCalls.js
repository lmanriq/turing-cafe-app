export const fetchReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
}

export const postReservation = res => {
  return fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(res)
    })
      .then(res => res.json())
}

export const sendDeleteReservation = id => {
  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
}