'use client';

import { Card } from '@/components';
import { motion } from 'motion/react';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { AddReview } from '../AddReview/AddReview';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { Review } from '../Review/Review';
import styles from './Product.module.scss';
import { ProductsProps } from './Product.props';

export const Product = motion(
	forwardRef(
		({ ...props }: ProductsProps, ref: ForwardedRef<HTMLDivElement>) => {
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

			const variants = {
				visible: { opacity: 1, height: 'auto' },
				hidden: { opacity: 0, height: 0 }
			};

			return (
				<div
					className={styles.wrapper}
					ref={ref}>
					<ProductInfo
						scrollToReview={scrollToReview}
						toggleOpen={toggleOpen}
						{...props}
					/>
					{reviews && (
						<motion.div
							variants={variants}
							style={{ overflow: 'hidden' }}
							layout
							animate={isOpenReviews ? 'visible' : 'hidden'}
							initial="hidden">
							<Card
								ref={reviewRef}
								color="dark"
								className={styles['reviews']}>
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
						</motion.div>
					)}
				</div>
			);
		}
	)
);
