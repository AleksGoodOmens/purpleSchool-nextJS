import { getMenu } from '@/api/getMenu';
import { getPage } from '@/api/getPage';
import { HTag } from '@/components';
import { MenuItem } from '@/interfaces';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
	try {
		const menu = await getMenu<MenuItem[]>(0);

		if (!menu || menu.length === 0) {
			console.error('Menu data is empty');
			return [];
		}

		const flatMenu = menu.flatMap((menuItem) =>
			menuItem.pages.map((page) => ({ alias: page.alias }))
		);

		console.log(flatMenu);

		return flatMenu;
	} catch (error) {
		console.error('Error fetching menu:', error);
		return [];
	}
}
async function AliasPage({
	params
}: {
	params: { alias: string; type: string };
}) {
	if (!params?.alias) {
		return notFound();
	}

	const page = await getPage(params.alias);
	if (!page) return notFound();

	return <HTag tag="h1">{page.title}</HTag>;
}

export default AliasPage;
