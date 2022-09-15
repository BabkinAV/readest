import { render, screen, within } from '../../test-utils/testing-utils';
import userEvent from '@testing-library/user-event';
import Button from './Button'

describe('Add book functionality', () => {
  test('add book route working',  () => {
		const {rerender} = render(<Button children='Get book cover'/>);
		const renderedButton = screen.getByRole('button', {name: 'Get book cover'});
		expect(renderedButton).toBeInTheDocument();
		
		rerender(<Button children='Get book cover' loading/>)
		const spinner = screen.getByTestId('spinner');
		expect(spinner).toBeInTheDocument();
		
	});









});