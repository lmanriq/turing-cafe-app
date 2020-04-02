import React from 'react';
import App from './App';
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { fetchReservations, postReservation, sendDeleteReservation } from '../apiCalls'
jest.mock('../apiCalls')

describe('App', () => {
  it('should render what we expect', async () => {
    fetchReservations.mockResolvedValueOnce([
      {
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 12
      },
      {
        "id": 2,
        "name": "Leta",
        "date": "4/5",
        "time": "7:00",
        "number": 2
      },
      {
        "id": 3,
        "name": "Pam",
        "date": "1/21",
        "time": "6:00",
        "number": 4
      }
    ]);
    const { getByText } = render(
      <App />
    )
    expect(getByText('Turing Cafe Reservations')).toBeInTheDocument();
    const sampleCard = await waitFor(() => getByText('Christie'));
    expect(sampleCard).toBeInTheDocument();
  });

  it('should be able to add reservations', async () => {
    fetchReservations.mockResolvedValueOnce([
      {
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 12
      },
      {
        "id": 2,
        "name": "Leta",
        "date": "4/5",
        "time": "7:00",
        "number": 2
      },
      {
        "id": 3,
        "name": "Pam",
        "date": "1/21",
        "time": "6:00",
        "number": 4
      }
    ]);
    postReservation.mockResolvedValueOnce({
      "id": 55,
      "name": "Lili",
      "date": "7/20",
      "time": "4:30",
      "number": 5
    });
    const { getByText } = render(
      <App />
    )
    const resBtn = getByText('Make Reservation');
    fireEvent.click(resBtn);
    const newCardName = await waitFor(() => getByText('Lili'));
    expect(newCardName).toBeInTheDocument();
  })
});