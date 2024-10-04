import { getMenu, getPage, getProduct } from '@/api';
import { MenuItem, TopLevelCategory } from '@/interfaces';
import parse from 'html-react-parser';
import { notFound } from 'next/navigation';
import { Advantages, HhCards, Skills, TopPageProducts } from './components';

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
async function AliasPage({
	params
}: {
	params: { type: string; alias: string };
}) {
	if (!params?.alias) {
		return notFound();
	}

	const page = await getPage(`/${params.alias}`);
	if (!page) return notFound();
	const products = await getProduct(page?.category);

	return (
		<section className={styles['page']}>
			<TopPageProducts
				title={page.title}
				products={products}
			/>

			{page.firstCategory === TopLevelCategory.Courses && page.hh && (
				<HhCards
					title={page.category}
					{...page.hh}
				/>
			)}
			{page.advantages && page.advantages?.length > 0 && (
				<Advantages advantages={page.advantages} />
			)}
			{page.seoText && (
				<div className={styles['seo']}>{parse(page.seoText)}</div>
			)}
			{page.tags && page.tags.length > 0 && <Skills skills={page.tags} />}
		</section>
	);
}

export default AliasPage;
