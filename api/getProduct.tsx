import { IProducts } from '@/interfaces';
import { PATHS } from '.';

export async function getProduct(
	category: string
): Promise<IProducts[] | null> {
	console.log(category);
	const res = await fetch(PATHS.product.find, {
		method: 'POST',
		body: JSON.stringify({ category: category, limit: 10 }),
		headers: new Headers({ 'content-type': 'application/json' }),
		next: { revalidate: 10 }
	});

	if (!res.ok) {
		return null;
	}
	return res.json();
}
