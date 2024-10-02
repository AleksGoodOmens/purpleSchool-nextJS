import { IPage } from '@/interfaces';
import { PATHS } from '.';

export async function getPage(alias: string): Promise<IPage | null> {
	const res = await fetch(PATHS.topPage.byAlias + alias, {
		next: { revalidate: 10 }
	});
	if (!res.ok) {
		return null;
	}
	return res.json();
}
