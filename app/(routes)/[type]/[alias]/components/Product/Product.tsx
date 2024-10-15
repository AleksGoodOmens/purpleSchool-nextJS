'use client';

import { Button, Card, Divider, HTag, PTag, Stars, Tag } from '@/components';
import { correctEnding, priceRu } from '@/helpers';
import styles from './Product.module.scss';
import { ProductsProps } from './Product.props';

function Product({ ...props }: ProductsProps) {
	const {
		title,
		description,
		categories,
		image,
		price,
		oldPrice,
		credit,
		reviewAvg,
		initialRating,
		reviewCount,
		advantages,
		disadvantages
	} = props;
	return (
		<Card className={styles.wrapper}>
			<div className={styles.logo}>
				<img
					width={70}
					height={70}
					src={image}
					alt={title}
				/>
			</div>
			<HTag
				className={styles.title}
				tag="h3">
				{title}
			</HTag>
			<div className={styles.price}>
				{priceRu(price)} ₽
				{oldPrice && (
					<Tag
						bg="success"
						size="s">
						{priceRu(price - oldPrice)}
					</Tag>
				)}
			</div>
			<div className={styles.credit}>
				{priceRu(credit)} ₽/<span className={styles['month']}>месяц</span>
			</div>
			<div className={styles.rating}>
				<Stars rating={reviewAvg ?? initialRating} />
			</div>
			<div className={styles.tags}>
				{categories.map((t) => (
					<Tag
						size="s"
						bg={'default'}
						key={t}>
						{t}
					</Tag>
				))}
			</div>
			<div className={styles.titlePrice}>Цена</div>
			<div className={styles.titleCredit}>Кредит</div>
			<div className={styles.titleRating}>
				{reviewCount} {correctEnding(reviewCount)}
			</div>

			<Divider className={styles.hr} />

			<PTag
				className={styles.description}
				appearance="m">
				{description}
			</PTag>
			<div className={styles.feature}>feature</div>
			<div className={styles.advBlock}>
				{advantages && (
					<div className={styles.advantages}>
						<HTag tag="h4">Преимущества</HTag>
						{advantages}
					</div>
				)}
				{disadvantages && (
					<div className={styles.disadvantages}>
						<HTag tag="h4">Недостатки</HTag>
						{disadvantages}
					</div>
				)}
			</div>

			<Divider className={styles.hr} />

			<div className={styles.actions}>
				<Button appearance="primary">Узнать подробнее</Button>
				<Button
					arrow="right"
					appearance="ghost">
					Читать отзывы
				</Button>
			</div>
		</Card>
	);
}

export { Product };
