import {
  fireEvent,
  render,
  screen,
} from '../../test-utils/testing-utils';
import userEvent from '@testing-library/user-event';
import App from '../../App';

const renderForm = () => {
  render(<App />);
  const menuEl = screen.getByRole('link', {
    name: 'Add Book',
  });
  userEvent.click(menuEl);
};

describe('Add book functionality', () => {
  test('add book route working', async () => {
    renderForm();

    const headingForm = screen.getByRole('heading', {
      name: 'Add New Book',
      level: 2,
    });
    expect(headingForm).toBeInTheDocument();
  });

  test.skip('getting book cover', async () => {
    renderForm();
    const isbnInput = screen.getByRole('textbox', {
      name: 'ISBN code (for book cover)',
    });
    expect(isbnInput).toBeInTheDocument();
    const bookCover = screen.getByAltText('Empty Cover');
    expect(bookCover).toBeInTheDocument();
    const CoverBtn = screen.getByRole('button', { name: 'Get book cover' });
    expect(CoverBtn).toBeInTheDocument();
    fireEvent.focus(isbnInput);
    fireEvent.blur(isbnInput);
    const isbnWrapper = screen.getByTestId('isbn-wrapper');
    expect(isbnWrapper).toHaveClass('hasError');
    userEvent.type(isbnInput, '9781436233286');
    expect(isbnWrapper).not.toHaveClass('hasError');
    fireEvent.click(CoverBtn);
    global.URL.createObjectURL = jest.fn();
    const bookCoverAct = await screen.findByAltText(
      'Book cover',
      {},
      { timeout: 5000 }
    );
    expect(bookCoverAct).toBeInTheDocument();
  });

  test('form validation on focus out for required fields', () => {
    renderForm();
    const titleInput = screen.getByRole('textbox', { name: 'Book Title*' });
    const lastNameInput = screen.getByRole('textbox', { name: 'Last Name*' });
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


    const clearBtn = screen.getByRole('button', { name: /clear/i });

    expect(clearBtn).toBeInTheDocument();

    userEvent.click(clearBtn);

    expect(titleInputWrapper).not.toHaveClass('hasError');
    expect(lastNameInputWrapper).not.toHaveClass('hasError');
    expect(dateReadInputWrapper).not.toHaveClass('hasError');
  });

  test('adding book test', async () => {
    render(<App />);
		const galleryItems = await screen.findAllByAltText(
      /cover$/i,
      {},
      { timeout: 5000 }
    );
    expect(galleryItems).toHaveLength(13);
    const menuEl = screen.getByRole('link', {
      name: 'Add Book',
    });
    userEvent.click(menuEl);

    

    const titleInput = screen.getByRole('textbox', { name: 'Book Title*' });
    const isbnInput = screen.getByRole('textbox', {
      name: 'ISBN code (for book cover)',
    });
    const firstNameInput = screen.getByRole('textbox', { name: 'First Name' });
    const lastNameInput = screen.getByRole('textbox', { name: 'Last Name*' });
    const dateInput = screen.getByLabelText('Date Read*');

    const ratings = screen.getAllByLabelText('score');

    userEvent.type(titleInput, 'Treasure');
    userEvent.type(isbnInput, '9780671671136');
    userEvent.type(firstNameInput, 'Clive');
    userEvent.type(lastNameInput, 'Cussler');
    fireEvent.change(dateInput, { target: { value: '2022-02-25' } });

    userEvent.click(ratings[2]);

    const saveButton = screen.getByRole('button', { name: /save/i });

    expect(saveButton).toBeInTheDocument();

    userEvent.click(saveButton);

    const galleryHeader = await screen.findByRole(
      'heading',
      {
        name: /my books/i,
      },
      { timeout: 1500 }
    );

    expect(galleryHeader).toBeInTheDocument();

    const galleryPics = await screen.findAllByAltText(
      /cover$/i,
      {},
      { timeout: 2000 }
    );

    expect(galleryPics).toHaveLength(14);

		const newImg = screen.getByAltText(/Treasure cover/i);
		expect(newImg).toBeInTheDocument();
		const newTitle = screen.getByText(/treasure/i);
		expect(newTitle).toBeInTheDocument()
		const newAuthor = screen.getByText(/Clive Cussler/i);
		expect(newAuthor).toBeInTheDocument()
		const newDate = screen.getByText(/.+25\.02\.2022$/i);
		expect(newDate).toBeInTheDocument()
  });
});
