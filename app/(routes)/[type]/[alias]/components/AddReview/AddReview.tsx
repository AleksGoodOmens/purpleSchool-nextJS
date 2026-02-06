'use client';

import { Button, PTag } from '@/components';
import { AddReviewProps } from './AddReview.props';
import CloseIcon from './closeIcon.svg';

import cn from 'classnames';
import { useState } from 'react';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import styles from './AddReview.module.scss';

function AddReview({ productId }: AddReviewProps) {
	const [sended, setSended] = useState(false);
	const [errorSend, setErrorSend] = useState<string>('');

	const handleSended = () => {
		setSended((send) => !send);
	};

	return (
		<>
			<ReviewForm
				productId={productId}
				handleSended={handleSended}
				setErrorSend={setErrorSend}
			/>
			{sended && (
				<div className={cn(styles['panel'], styles['successSend'])}>
					<div className={styles['panel__title']}>Ваш отзыв оправлен</div>
					<PTag className={styles['panel__text']}>
						Спасибо, ваш отзыв будет опубликован после проверки
					</PTag>
					<Button
						appearance="primary"
						onClick={() => setSended(false)}
						className={styles['panel__button']}>
						<CloseIcon />
					</Button>
				</div>
			)}
			{errorSend && (
				<div className={cn(styles['panel'], styles['errorSend'])}>
					<div className={styles['panel__title']}>Ваш отзыв не оправлен</div>
					<PTag className={styles['panel__text']}>
						что то пошло не так {errorSend}
					</PTag>
					<Button
						appearance="primary"
						onClick={() => setErrorSend('')}
						className={styles['panel__button']}>
						<CloseIcon />
					</Button>
				</div>
			)}
		</>
	);
}

export { AddReview };
