'use client';
import cn from 'classnames';
import styles from './styles.module.scss';

import SortIcon from './Sort.svg';
import { SortEnum, SorterProps } from './sorter.props';
function Sorter({ sort, setSort, className, ...props }: SorterProps) {
	return (
		<div
			className={cn(styles['grid'], className)}
			{...props}>
			<button
				onClick={() => setSort(SortEnum.Rating)}
				className={cn(styles['button'], {
					[styles['active']]: sort === SortEnum.Rating
				})}>
				{sort === SortEnum.Rating && <SortIcon />}
				<span>По рейтингу</span>
			</button>
			<button
				onClick={() => setSort(SortEnum.Price)}
				className={cn(styles['button'], {
					[styles['active']]: sort === SortEnum.Price
				})}>
				{sort === SortEnum.Price && <SortIcon />}
				<span>По цене</span>
			</button>
		</div>
	);
}

export { Sorter };
