'use client';

import { Button, Input, Stars, Textarea } from '@/components';
import { ReviewFormProps } from './ReviewForm.props';

import { useForm } from 'react-hook-form';
import styles from './AddReview.module.scss';

function ReviewForm() {
	const { register, control, handleSubmit } = useForm<ReviewFormProps>();

	const onSubmit = (data: ReviewFormProps) => {
		console.log(data);
	};

	return (
		<form
			onClick={handleSubmit(onSubmit)}
			className={styles.form}>
			<Input
				{...register('name')}
				className={styles.name}
				placeholder="Имя"
			/>
			<Input
				{...register('title')}
				className={styles.title}
				placeholder="Заголовок отзыва"
			/>
			<div className={styles.text}>Оценить</div>
			<Stars
				isEditable
				rating={0}
				className={styles.stars}
			/>
			<Textarea
				{...register('description')}
				className={styles.textarea}
				placeholder="Текст отзыва"
			/>
			<Button
				className={styles.button}
				appearance="primary">
				Отправить
			</Button>
			<span className={styles.alert}>
				* Перед публикацией отзыв пройдет предварительную модерацию и проверку
			</span>
		</form>
	);
}
export { ReviewForm };
