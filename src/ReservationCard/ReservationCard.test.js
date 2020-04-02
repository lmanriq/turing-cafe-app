import React from 'react';
import ReservationCard from './ReservationCard';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Reservation Card', () => {
  it('should render what we expect', () => {
    const { getByText } = render(
      <ReservationCard 
        id={1}
        name='Christie'
        date='12/29'
        time='7:00'
        number={12}
      />
    )
    expect(getByText('Christie')).toBeInTheDocument();
    expect(getByText('12/29')).toBeInTheDocument();
    expect(getByText('7:00 PM')).toBeInTheDocument();
    expect(getByText('Number of guests: 12')).toBeInTheDocument();
    expect(getByText('cancel')).toBeInTheDocument();
  });
});