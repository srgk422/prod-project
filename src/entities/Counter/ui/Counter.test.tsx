import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  const initialState = { counter: { value: 10 } };

  test('render Counter value', () => {
    componentRender(<Counter />, { initialState });
    expect(screen.getByTestId('counter-title')).toHaveTextContent('10');
  });
  test('render decrement value', () => {
    componentRender(<Counter />, { initialState });
    userEvent.click(screen.getByTestId('decrement-button'));
    expect(screen.getByTestId('counter-title')).toHaveTextContent('9');
  });
  test('render increment value', () => {
    componentRender(<Counter />, { initialState });
    userEvent.click(screen.getByTestId('increment-button'));
    expect(screen.getByTestId('counter-title')).toHaveTextContent('11');
  });
});
