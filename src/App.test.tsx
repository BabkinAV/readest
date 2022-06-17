import { render, screen } from './test-utils/testing-utils';
import App from './App';


test('renders heading', () => {
  render(
      <App />
  );
  const header = screen.getByRole('heading', { name: 'Readest' });
  expect(header).toBeInTheDocument();
});
