import { render, screen } from './test-utils/testing-utils';
import {act, waitFor} from '@testing-library/react'
import App from './App';


test('renders heading', async () => {
  
  render(
      <App />
  );
  const header = await screen.findByRole('heading', { name: 'Readest' });
  expect(header).toBeInTheDocument();

	const galleryItems = await screen.findAllByAltText(/cover$/i, {}, {timeout: 5000});
		// screen.debug();
		expect(galleryItems).toHaveLength(13);
});
