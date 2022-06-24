import { render, screen, within } from '../../test-utils/testing-utils';
import userEvent from '@testing-library/user-event';
import Gallery from './Gallery';

describe('sorting and filters functionality for gallery', () => {
  test('sorting functionality', () => {
    render(<Gallery />);
    const sortSelect = screen.getByRole('combobox');
    const titleOption = screen.getByRole('option', {
      name: 'Title',
    }) as HTMLOptionElement;
    userEvent.selectOptions(sortSelect, titleOption);
    expect(titleOption.selected).toBe(true);
    let galleryItems = screen.getAllByAltText(
      /cover$/g
    ) as HTMLImageElement[];

    

    expect(galleryItems[0].alt).toContain('City of Stairs');
    //ensuring array is sorted
    expect(galleryItems.every((v, i, a) => !i || a[i - 1] <= v)).toBe(true);

    const AuthorOption = screen.getByRole('option', {
      name: 'Author',
    }) as HTMLOptionElement;
    userEvent.selectOptions(sortSelect, AuthorOption);
    expect(AuthorOption.selected).toBe(true);
  });

  test('author filtering functionality', () => {
    render(<Gallery />);

    //click one item filter item
    let authorFilterItem = screen.getByText('Abercrombie, Joe');
    userEvent.click(authorFilterItem);

    let galleryItems = screen.getAllByAltText(
      /cover$/g
    ) as HTMLImageElement[];

    //check if gallery items are filtered

    expect(galleryItems).toHaveLength(1);

    //check if header appeared:

    let appliedFilterHeader = screen.getByRole('heading', {name: 'Applied Filters', level: 3});
    expect(appliedFilterHeader).toBeInTheDocument();

    expect(galleryItems[0].alt).toContain('The Wisdom of Crowds');

     //check if Applied filter item has been displayed

    let setFilters = screen.getAllByTestId('set-filter__item');

    expect(setFilters).toHaveLength(1);

    authorFilterItem = screen.getByText('Bennett, Robert Jackson');
    userEvent.click(authorFilterItem);

    galleryItems = screen.getAllByAltText(
      /cover$/g
    ) as HTMLImageElement[];

    expect(galleryItems).toHaveLength(2);

    expect(galleryItems[1].alt).toContain('City of Stairs');

    setFilters = screen.getAllByTestId('set-filter__item');

    expect(setFilters).toHaveLength(2);

    //remove one item

    let crossMark = within(setFilters[1]).getByRole('img', {hidden: true});

    userEvent.click(crossMark);

    setFilters = screen.getAllByTestId('set-filter__item');

    expect(setFilters).toHaveLength(1);

    galleryItems = screen.getAllByAltText(
      /cover$/g
    ) as HTMLImageElement[];

    //check if gallery items are filtered

    expect(galleryItems).toHaveLength(1);

    expect(galleryItems[0].alt).toContain('The Wisdom of Crowds')
    
    //click another one

    crossMark = within(setFilters[0]).getByRole('img', {hidden: true});

    userEvent.click(crossMark);

    setFilters = screen.queryAllByTestId('set-filter__item');

    expect(setFilters).toHaveLength(0);

    expect(appliedFilterHeader).not.toBeInTheDocument();

    //TODO: check if Applied Filter is appearing on filter click
    //TODO: the same tests for other filters


  })

});
