import { fireEvent, render, screen } from '../../test-utils/testing-utils';
import userEvent from '@testing-library/user-event';
import App from '../../App';

const renderSearch = () => {
  render(<App />);
  const menuEl = screen.getByRole('link', {
    name: 'Search for new Book',
  });
  userEvent.click(menuEl);
};

describe('Search book functionality', () => {
  test('search book route working', () => {
    renderSearch();

    const headingSearch = screen.getByRole('heading', {
      name: 'Search for book',
      level: 2,
    });
    expect(headingSearch).toBeInTheDocument();

    const titleInput = screen.getByRole('textbox', { name: 'search-input' });

    expect(titleInput).toBeInTheDocument();

    const searchTypeSelect = screen.getByRole('combobox', {
      name: 'search-type',
    });

    expect(searchTypeSelect).toBeInTheDocument();
  });
	
  test('default search by author is working', () => {
    renderSearch();
    const titleInput = screen.getByRole('textbox', { name: 'search-input' });
    userEvent.type(titleInput, 'City of Blades');
    const searchBtn = screen.getByRole('button', { name: 'search' });
		expect(searchBtn).toBeInTheDocument();
		fireEvent.click(searchBtn);
		const headingSearchResult = screen.getByRole('heading', {
      name: 'Your search results',
      level: 3,
    });
		expect(headingSearchResult).toBeInTheDocument();
  });
});
