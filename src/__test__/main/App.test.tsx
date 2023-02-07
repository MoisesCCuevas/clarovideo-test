import React from 'react';
import { screen, cleanup, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../redux/providers.test';
import App from '../../../src/main/App';

const setModalState = jest.fn();

describe('Modal', () => {
  beforeEach(cleanup);
  test('Renders an empty component', () => {
    renderWithProviders(<App />);
    const component = screen.getByTestId('main');
    expect(component).not.toBeNull();
  });
  test('Open modal', () => {
    renderWithProviders(<App />);
    fireEvent.click(screen.getByTestId('button'));
    expect(setModalState).toBeCalledTimes(1);
  });
});
