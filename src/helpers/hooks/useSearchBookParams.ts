import { useSearchParams } from 'react-router-dom';

export const useSearchBookParams = () : {
	queryTitle: string,
	queryFirstName: string,
	queryLastName: string,
} => {

	let [searchParams] = useSearchParams();

  // searchParams is a URLSearchParams object.
  // See https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  let queryTitle = searchParams.get('title') ?? '';
  let queryAuthor = searchParams.get("author");

	let queryLastName = '';

	if (queryAuthor) {
		let regexLastName = queryAuthor.match(/\S+$/);
		if (regexLastName) {
			queryLastName = regexLastName[0];
		}
	}

	let queryFirstName = '';

	if (queryAuthor && queryAuthor.length > queryLastName.length) {
		queryFirstName = queryAuthor.replace(' '+queryLastName, '');
	}


	return {
		queryTitle,
		queryFirstName,
		queryLastName
	}
}