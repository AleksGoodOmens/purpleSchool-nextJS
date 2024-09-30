import { PATHS } from '.';

export async function getMenu<T>(firstCategory: number): Promise<T> {
	const response = await fetch(PATHS.topPage.find, {
		method: 'POST',
		body: JSON.stringify({
			firstCategory
		}),
		headers: new Headers({ 'content-type': 'application/json' })
	});

	return response.json();
}
