import React from 'react';
import { render, screen } from '@testing-library/react';
import ChannelInfo from '../../../components/core/channelInfo';

describe('ChannelInfo', () => {
  test('Renders component', () => {
    render(<ChannelInfo />);
    const component = screen.getAllByTestId('channelInfo');
    expect(component).not.toBeNull();
  });
});

