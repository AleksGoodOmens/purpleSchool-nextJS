'use client';

import { HTag, Tag } from '@/components';
import { sortReducer } from '@/reducer/sortReducer';
import { useReducer } from 'react';
import { Product } from '../Product/Product';
import { Sorter } from '../Sorter/Sorter';
import { SortEnum } from '../Sorter/sorter.props';
import { ITopPageProps } from './TopPage.props';
import styles from './styles.module.scss';

function TopPageProducts({ title, products }: ITopPageProps) {
	const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
		sortReducer,
		{
			products,
			sort: SortEnum.Rating
		}
	);

	const setSort = (sort: SortEnum) => {
		dispatchSort({ type: sort });
	};
	return (
		<>
			<header className={styles['grid']}>
				<HTag tag="h1">{title}</HTag>
				{products && (
					<Tag
						bg="ghost"
						size="s">
						{products.length}
					</Tag>
				)}
				<Sorter
					setSort={setSort}
					sort={sort}
				/>
			</header>
			{sortedProducts &&
				sortedProducts.map((p) => (
					<Product
						key={p._id}
						{...p}
					/>
				))}
		</>
	);
}

export { TopPageProducts };
