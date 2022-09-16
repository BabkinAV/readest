import { fireEvent, render, screen,  } from '../../test-utils/testing-utils';
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
		const bookCover =  screen.getByAltText('Empty Cover');
		expect(bookCover).toBeInTheDocument();
		const CoverBtn = screen.getByRole('button', { name: 'Get book cover'
		});
		expect(CoverBtn).toBeInTheDocument();
		fireEvent.focus(isbnInput);
		fireEvent.blur(isbnInput);
		const isbnWrapper = screen.getByTestId('isbn-wrapper');
		expect(isbnWrapper).toHaveClass('hasError');
		userEvent.type(isbnInput, '9781436233286');
		expect(isbnWrapper).not.toHaveClass('hasError');
		fireEvent.click(CoverBtn);
		global.URL.createObjectURL = jest.fn();
		const bookCoverAct = await screen.findByAltText('Book cover', {}, {timeout: 4000});
		expect(bookCoverAct).toBeInTheDocument();
	})

	test('form validation on focus out for required fields', () => {
		renderForm();
		const titleInput = screen.getByRole('textbox', {name: 'Book Title*'});
		const lastNameInput = screen.getByRole('textbox', {name: 'Last Name*'});
		const dateInput = screen.getByLabelText('Date Read*');


		fireEvent.focus(titleInput);
		fireEvent.blur(titleInput);
		fireEvent.focus(lastNameInput);
		fireEvent.blur(lastNameInput);
		fireEvent.focus(dateInput);
		fireEvent.blur(dateInput);

		const titleInputWrapper = screen.getByTestId('title-wrapper');
		const lastNameInputWrapper = screen.getByTestId('lastName-wrapper');
		const dateReadInputWrapper = screen.getByTestId('date-wrapper');

		expect(titleInputWrapper).toHaveClass('hasError');
		expect(lastNameInputWrapper).toHaveClass('hasError');
		expect(dateReadInputWrapper).toHaveClass('hasError');

		//TODO: Test clear button functionality


	})

	//TODO: Add form test









});