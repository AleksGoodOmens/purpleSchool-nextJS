'use client';

import { Button, PTag } from '@/components';
import { AddReviewProps } from './AddReview.props';
import CloseIcon from './closeIcon.svg';

import { ReviewForm } from '../ReviewForm/ReviewForm';
import styles from './AddReview.module.scss';

function AddReview({ ...props }: AddReviewProps) {
	return (
		<>
			<ReviewForm {...props} />
			<div className={styles.success}>
				<div className={styles['success__title']}>Ваш отзыв оправлен</div>
				<PTag className={styles['success__text']}>
					Спасибо, ваш отзыв будет опубликован после проверки
				</PTag>
				<Button
					appearance="primary"
					className={styles['success__button']}>
					<CloseIcon />
				</Button>
			</div>
		</>
	);
}

export { AddReview };
