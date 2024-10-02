'use client';

import { HTag, Tag } from '@/components';
import { ITopPageProps } from './TopPage.props';
import styles from './styles.module.scss';

function TopPage({ title, productsAmount }: ITopPageProps) {
	return (
		<header className={styles['grid']}>
			<HTag tag="h1">{title}</HTag>
			{productsAmount && (
				<Tag
					bg="ghost"
					size="s">
					{productsAmount}
				</Tag>
			)}
			<span>сортировка</span>
		</header>
	);
}

export { TopPage };
