import { PATHS } from '.';

export async function getPage(alias: string): Promise<null> {
	const res = await fetch(PATHS.topPage.byAlias + alias, {
		next: { revalidate: 10 }
	});
	if (!res.ok) {
		return null;
	}
	return res.json();
}

// todo add correct return type
