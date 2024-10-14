'use client';

import { Button, Card, HTag, PTag, Stars, Tag } from '@/components';
import styles from './Product.module.scss';
import { ProductsProps } from './Product.props';

function Product({ ...props }: ProductsProps) {
	const {
		title,
		description,
		categories,
		image,
		price,
		credit,
		reviewAvg,
		initialRating,
		reviewCount,
		advantages,
		disadvantages,
		characteristics
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
			<div className={styles.price}>{price}</div>
			<div className={styles.credit}>{credit}</div>
			<div className={styles.rating}>
				<Stars rating={reviewAvg ?? initialRating} />
			</div>
			<div className={styles.tags}>
				{categories.map((t) => (
					<Tag
						bg={'default'}
						key={t}>
						{t}
					</Tag>
				))}
			</div>
			<div className={styles.titlePrice}>Цена</div>
			<div className={styles.titleCredit}>Кредит</div>
			<div className={styles.titleRating}>{reviewCount} отзывов</div>
			<hr className={styles.hr} />
			<PTag
				className={styles.description}
				appearance="m">
				{description}
			</PTag>
			<div className={styles.feature}>feature</div>
			<div className={styles.advBlock}>
				<div className={styles.advantages}>
					<HTag tag="h4">Преимущества</HTag>
					{advantages}
				</div>
				<div className={styles.disadvantages}>
					<HTag tag="h4">Недостатки</HTag>
					{disadvantages}
				</div>
			</div>
			<hr className={styles.hr} />
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
