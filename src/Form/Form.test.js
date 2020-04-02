import React from 'react';
import Form from './Form';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Form', () => {
  it('should render what we expect', () => {
    const { getByText, getByPlaceholderText } = render(
      <Form 
        addReservation={jest.fn()}
      />
    )
    expect(getByPlaceholderText('your name')).toBeInTheDocument();
    expect(getByPlaceholderText('date')).toBeInTheDocument();
    expect(getByPlaceholderText('time')).toBeInTheDocument();
    expect(getByPlaceholderText('number of guests')).toBeInTheDocument();
    expect(getByText('Make Reservation')).toBeInTheDocument();
  });

  it('should reflect the proper input values', () =>{
    const { getByPlaceholderText } = render(
      <Form 
        addReservation={jest.fn()}
      />
    )
    const nameInput = getByPlaceholderText('your name');
    const dateInput = getByPlaceholderText('date');
    const timeInput = getByPlaceholderText('time');
    const numberInput = getByPlaceholderText('number of guests');
    fireEvent.change(nameInput, {target: {value: 'Lili'}})
    fireEvent.change(dateInput, {target: {value: '7/20'}})
    fireEvent.change(timeInput, {target: {value: '4:30'}})
    fireEvent.change(numberInput, {target: {value: '5'}})
    expect(nameInput.value).toBe('Lili');
    expect(dateInput.value).toBe('7/20');
    expect(timeInput.value).toBe('4:30');
    expect(numberInput.value).toBe('5');
  })

  it('should call make reservation method when the button is clicked', () => {
    const mockAddReservation = jest.fn();
    Date.now = jest.fn().mockImplementation(() => 222);
    const { getByText, getByPlaceholderText } = render(
      <Form 
        addReservation={mockAddReservation}
      />
    )
    const nameInput = getByPlaceholderText('your name');
    const dateInput = getByPlaceholderText('date');
    const timeInput = getByPlaceholderText('time');
    const numberInput = getByPlaceholderText('number of guests');
    const resBtn = getByText('Make Reservation');
    fireEvent.change(nameInput, {target: {value: 'Lili'}})
    fireEvent.change(dateInput, {target: {value: '7/20'}})
    fireEvent.change(timeInput, {target: {value: '4:30'}})
    fireEvent.change(numberInput, {target: {value: '5'}})
    fireEvent.click(resBtn);
    expect(mockAddReservation).toHaveBeenCalledWith({id: 222, name: 'Lili', date: '7/20', time: '4:30', number: '5'})
  })
});