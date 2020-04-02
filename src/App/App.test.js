import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('App', () => {
  it('should render what we expect', () => {
    const { getByText } = render(
      <App />
    )
    expect(getByText('Turing Cafe Reservations')).toBeInTheDocument();
  });

  it('should be able to add reservations', async () => {
    const { getByText, getByPlaceholderText } = render(
      <App />
    )
    const nameInput = getByPlaceholderText('your name');
    const dateInput = getByPlaceholderText('date');
    const timeInput = getByPlaceholderText('time');
    const numberInput = getByPlaceholderText('number of guests');
    const resBtn = getByText('Make Reservation');
    fireEvent.change(nameInput, {target: {value: 'Lili'}});
    fireEvent.change(dateInput, {target: {value: '7/20'}});
    fireEvent.change(timeInput, {target: {value: '4:30'}});
    fireEvent.change(numberInput, {target: {value: '5'}});
    fireEvent.click(resBtn);
    const newCardName = await getByText('Lili');
    expect(newCardName).toBeInTheDocument();
  })
});