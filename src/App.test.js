import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App, { stepsNames } from './App';

it('renders first name step', () => {
  render(<App />);
  const re = new RegExp(stepsNames[0], 'g');
  const linkElement = screen.getByText(re);
  expect(linkElement).toBeInTheDocument();
});

it('properly increments and decrements the counter', () => {
  const { container } = render(<App />);
  const incrementButton = screen.getByText('Next');
  const decrementButton = screen.getByText('Prev');

  fireEvent.click(incrementButton);
  expect(container.getElementsByClassName('circle active').length).toEqual(3);
  fireEvent.click(decrementButton);
  expect(container.getElementsByClassName('circle active').length).toEqual(2);
});
