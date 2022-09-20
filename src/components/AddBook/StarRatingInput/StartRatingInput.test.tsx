import { render, screen, fireEvent } from "../../../test-utils/testing-utils";
import userEvent from "@testing-library/user-event";
import StarRatingInput from './StarRatingInput';

describe('star rating functionality', () => {

	test('star rating input working properly', () => {
		render(<StarRatingInput rating={0} onStarClick={jest.fn()} />);

		let emptyStars = screen.getAllByTestId('star-empty');

		expect(emptyStars).toHaveLength(5);
		let middleStar = emptyStars[2]
		userEvent.hover(middleStar);

		let filledStars = screen.getAllByTestId('star-filled');

		expect(filledStars).toHaveLength(3);

		emptyStars = screen.getAllByTestId('star-empty');

		expect(emptyStars).toHaveLength(2);

		userEvent.click(middleStar);

		fireEvent.blur(middleStar);

		filledStars = screen.getAllByTestId('star-filled');
		expect(filledStars).toHaveLength(3);
		emptyStars = screen.getAllByTestId('star-empty');
		expect(emptyStars).toHaveLength(2);
		
	})
});