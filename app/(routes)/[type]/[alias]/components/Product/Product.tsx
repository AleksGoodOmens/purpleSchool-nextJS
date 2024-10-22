'use client';

import { Card } from '@/components';
import cn from 'classnames';
import { useRef, useState } from 'react';
import { AddReview } from '../AddReview/AddReview';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { Review } from '../Review/Review';
import styles from './Product.module.scss';
import { ProductsProps } from './Product.props';

function Product({ ...props }: ProductsProps) {
	const [isOpenReviews, setIsOpenReviews] = useState(false);
	const reviewRef = useRef<HTMLDivElement>(null);

	const toggleOpen = () => {
		setIsOpenReviews((prev) => !prev);
	};

	const scrollToReview = () => {
		setIsOpenReviews(true);
		reviewRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};
	const { reviews } = props;

	return (
		<div className={styles.wrapper}>
			<ProductInfo
				scrollToReview={scrollToReview}
				toggleOpen={toggleOpen}
				{...props}
			/>
			{reviews && (
				<Card
					ref={reviewRef}
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
						<AddReview productId={props._id} />
					</>
				</Card>
			)}
		</div>
	);
}

export { Product };
