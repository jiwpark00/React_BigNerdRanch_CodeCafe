import { screen, render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('displays the logged in user\'s username', async () => {
    render(<App />);
    await screen.findByText(/Tester/i);
  });
});