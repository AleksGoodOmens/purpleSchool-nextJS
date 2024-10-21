'use client';

import { Card } from '@/components';
import cn from 'classnames';
import { useState } from 'react';
import { AddReview } from '../AddReview/AddReview';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { Review } from '../Review/Review';
import styles from './Product.module.scss';
import { ProductsProps } from './Product.props';

function Product({ ...props }: ProductsProps) {
	const [isOpenReviews, setIsOpenReviews] = useState(false);

	const toggleOpen = () => {
		setIsOpenReviews((prev) => !prev);
	};
	const { reviews } = props;

	return (
		<div className={styles.wrapper}>
			<ProductInfo
				toggleOpen={toggleOpen}
				{...props}
			/>
			{reviews && (
				<Card
					color="dark"
					className={cn({
						[styles.open]: isOpenReviews,
						[styles.close]: !isOpenReviews
					})}>
					<>
						{reviews.map((r) => (
							<Review
								key={r._id}
								{...r}
							/>
						))}
						<AddReview />
					</>
				</Card>
			)}
		</div>
	);
}

export { Product };
