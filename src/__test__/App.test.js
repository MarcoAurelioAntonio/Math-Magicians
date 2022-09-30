import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

describe('App component', () => {
  test('it renders', () => {
    render(<App />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
