'use client';

import { Button, Input, Stars, Textarea } from '@/components';
import { ReviewFormProps } from './ReviewForm.props';

import { Controller, useForm } from 'react-hook-form';
import styles from './ReviewForm.module.scss';

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
			<Controller
				control={control}
				name="rating"
				render={({ field }) => (
					<Stars
						isEditable
						setRating={field.onChange}
						rating={field.value}
						className={styles.stars}
					/>
				)}
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
