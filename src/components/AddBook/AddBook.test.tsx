import { render, screen, within } from '../../test-utils/testing-utils';
import userEvent from '@testing-library/user-event';
import App from '../../App';

const renderForm = () => {
	render(<App />);
		const menuEl = screen.getByRole('link', {
			name: 'Add custom Book'
		});
		userEvent.click(menuEl);
}

// 9781627792134

describe('Add book functionality', () => {
  test('add book route working',  () => {
		renderForm();
		const headingForm = screen.getByRole('heading', {
			name: 'Add New Book',
			level: 2
		} );
		expect(headingForm).toBeInTheDocument();
	});

	test ('getting book cover', async () => {
		renderForm();
		const isbnInput = screen.getByRole('textbox', {name: 'ISBN code (for book cover)'});
		expect(isbnInput).toBeInTheDocument();
		const getCoverBtn = screen.getByRole('button', { name: 'Get book cover'
		});
		expect(getCoverBtn).toBeInTheDocument();


	})









});