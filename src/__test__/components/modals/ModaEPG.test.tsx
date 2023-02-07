import React from 'react';
import { screen, cleanup, fireEvent } from '@testing-library/react';
import ModalEPG from '../../../components/modals/modalEPG';
import { renderWithProviders } from '../../redux/providers.test';

describe('ModalEPG', () => {
  beforeAll(cleanup);

  afterEach(cleanup);

  test('Renders component', async () => {
    renderWithProviders(<ModalEPG />);
    const component = screen.getByTestId('modalEPG')
    expect(component).not.toBeNull();
  });

  test('onMouseDown event', async () => {
    renderWithProviders(<ModalEPG />);
    const component = screen.getByTestId('channelsContainer')
    fireEvent.mouseDown(component);
    expect(component).not.toBeNull();
  });

  test('onMouseMove event', async () => {
    renderWithProviders(<ModalEPG />);
    const component = screen.getByTestId('channelsContainer')
    fireEvent.mouseMove(component);
    expect(component).not.toBeNull();
  });

  test('onMouseLeave event', async () => {
    renderWithProviders(<ModalEPG />);
    const component = screen.getByTestId('channelsContainer')
    fireEvent.mouseLeave(component);
    expect(component).not.toBeNull();
  });
});

