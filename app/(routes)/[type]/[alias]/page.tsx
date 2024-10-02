import { getMenu, getPage, getProduct } from '@/api';
import { MenuItem } from '@/interfaces';
import { notFound } from 'next/navigation';
import { TopPage } from './components/TopPage/TopPage';
import styles from './page.module.scss';

export async function generateStaticParams() {
	try {
		const menu = await getMenu<MenuItem[]>(0);

		if (!menu || menu.length === 0) {
			console.error('Menu data is empty');
			return [];
		}

		return menu.flatMap((menuItem) =>
			menuItem.pages.map((page) => ({
				alias: page.alias,
				type: 'courses'
			}))
		);
	} catch (error) {
		console.error('Error fetching menu:', error);
		return [];
	}
}
async function AliasPage({ params }: { params: { alias: string } }) {
	if (!params?.alias) {
		return notFound();
	}

	const page = await getPage(`/${params.alias}`);
	if (!page) return notFound();
	const products = await getProduct(page?.category);

	return (
		<section className={styles['page']}>
			<TopPage
				title={page.title}
				productsAmount={products?.length}
			/>
		</section>
	);
}

export default AliasPage;
