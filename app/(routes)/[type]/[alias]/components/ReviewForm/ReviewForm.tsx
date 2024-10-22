'use client';

import { Button, Input, Stars, Textarea } from '@/components';
import { ReviewFormProps } from './ReviewForm.props';

import { sendPost } from '@/api/sendPost';
import { Review } from '@/interfaces';
import { Controller, useForm } from 'react-hook-form';
import styles from './ReviewForm.module.scss';

function ReviewForm({
	productId,
	handleSended,
	setErrorSend
}: ReviewFormProps) {
	const {
		register,
		control,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<Review>();

	const onSubmit = async (formData: ReviewFormProps) => {
		try {
			const { message } = await sendPost({ ...formData, productId });
			console.log(message);
			reset();
			handleSended();
		} catch (error) {
			if (error instanceof Error) {
				setErrorSend(error.message);
			}
		}
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
				rules={{
					required: { message: 'Ваша оценка?', value: true }
				}}
				render={({ field }) => (
					<Stars
						isEditable
						setRating={field.onChange}
						rating={field.value}
						error={errors.rating}
						className={styles.stars}
					/>
				)}
			/>

			<Textarea
				{...register('description', {
					required: { message: 'Введите комментарий', value: true },
					minLength: { message: 'Недостаточная длина комментария', value: 10 },
					maxLength: {
						message: 'Длина комментария больше 300 символов',
						value: 300
					}
				})}
				className={styles.textarea}
				placeholder="Текст отзыва"
				error={errors.description}
			/>
			<Button
				className={styles.button}
				type="submit"
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
