'use client';

import { Button, Input, Stars, Textarea } from '@/components';
import { ReviewFormProps } from './ReviewForm.props';

import { Controller, useForm } from 'react-hook-form';
import styles from './ReviewForm.module.scss';

function ReviewForm() {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<ReviewFormProps>();

	const onSubmit = (data: ReviewFormProps) => {
		console.log(data);
	};

	return (
		<form
			onClick={handleSubmit(onSubmit)}
			className={styles.form}>
			<Input
				{...register('name', {
					required: { message: 'Введите имя', value: true }
				})}
				className={styles.name}
				placeholder="Имя"
				error={errors.name}
			/>
			<Input
				{...register('title', {
					required: { message: 'Введите заголовок', value: true },
					minLength: { message: 'Недостаточная длина заголовка', value: 5 }
				})}
				className={styles.title}
				placeholder="Заголовок отзыва"
				error={errors.title}
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
				{...register('description', {
					required: { message: 'Введите комментарий', value: true },
					minLength: { message: 'Недостаточная длина комментария', value: 10 },
					maxLength: {
						message: 'Длина комментария больше 100 символов',
						value: 100
					}
				})}
				className={styles.textarea}
				placeholder="Текст отзыва"
				error={errors.description}
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
