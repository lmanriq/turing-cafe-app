import React from 'react';
import Form from './Form';
import { render } from '@testing-library/react'
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
});