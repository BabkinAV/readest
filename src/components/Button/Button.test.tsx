import { render, screen } from '../../test-utils/testing-utils';
import Button from './Button'

describe('Button functionality', () => {
  test('spinner appears on loading prop',  () => {
		const {rerender} = render(<Button children='Get book cover'/>);
		const renderedButton = screen.getByRole('button', {name: 'Get book cover'});
		expect(renderedButton).toBeInTheDocument();
		
		rerender(<Button children='Get book cover' loading/>)
		const spinner = screen.getByTestId('spinner');
		expect(spinner).toBeInTheDocument();
	});
});