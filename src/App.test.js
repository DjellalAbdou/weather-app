import { render, screen } from '@testing-library/react';
import App from './App';

/** 
 * TODO : don't run tests for the moment until i fix all jest config 
 * */
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
