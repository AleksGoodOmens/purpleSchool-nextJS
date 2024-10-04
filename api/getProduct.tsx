import { IProduct } from '@/interfaces';
import { PATHS } from '.';

export async function getProduct(category: string): Promise<IProduct[] | null> {
	const res = await fetch(PATHS.product.find, {
		method: 'POST',
		body: JSON.stringify({ category: category, limit: 10 }),
		headers: new Headers({ 'content-type': 'application/json' }),
		next: { revalidate: 1000 }
	});

	if (!res.ok) {
		return null;
	}
	return res.json();
}
