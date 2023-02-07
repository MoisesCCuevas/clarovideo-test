import React from 'react';
import { render, screen } from '@testing-library/react';
import EventCard from '../../../components/core/eventCard';

describe('EventCard', () => {
  test('Renders component', () => {
    render(<EventCard />);
    const component = screen.getAllByTestId('eventCard');
    expect(component).not.toBeNull();
  });
});

