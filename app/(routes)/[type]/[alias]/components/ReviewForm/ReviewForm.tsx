'use client';

import { Button, Input, Stars, Textarea } from '@/components';
import { ReviewFormProps } from './ReviewForm.props';

import { sendPost } from '@/api/sendPost';
import { Review } from '@/interfaces';
import { Controller, useForm } from 'react-hook-form';
import styles from './ReviewForm.module.scss';

function ReviewForm({
	productId,
	isOpenReviews,
	handleSended,
	setErrorSend
}: ReviewFormProps) {
	const {
		register,
		control,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<Review>({
		defaultValues: { description: '', name: '', rating: undefined, title: '' }
	});

	const onSubmit = async (formData: Review) => {
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
				disabled={!isOpenReviews}
			/>
			<Input
				{...register('title', {
					required: { message: 'Введите заголовок', value: true },
					minLength: { message: 'Недостаточная длина заголовка', value: 5 }
				})}
				className={styles.title}
				placeholder="Заголовок отзыва"
				error={errors.title}
				disabled={!isOpenReviews}
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
				disabled={!isOpenReviews}
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
						isEditable={isOpenReviews}
						setRating={field.onChange}
						rating={field.value || 0}
						error={errors.rating}
						className={styles.stars}
					/>
				)}
			/>

			<Button
				className={styles.button}
				type="submit"
				disabled={!isOpenReviews}
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
