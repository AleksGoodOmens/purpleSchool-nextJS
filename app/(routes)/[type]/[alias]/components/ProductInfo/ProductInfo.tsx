'use client';

import { Button, Card, Divider, HTag, PTag, Stars, Tag } from '@/components';
import { correctEnding, priceRu } from '@/helpers';
import cn from 'classnames';
import Image from 'next/image';
import styles from './ProductInfo.module.scss';
import { ProductInfoProps } from './ProductInfo.props';

function ProductInfo({ toggleOpen, ...props }: ProductInfoProps) {
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
		disadvantages,
		characteristics
	} = props;

	return (
		<Card className={styles.wrapper}>
			<div className={styles.logo}>
				<Image
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
						className={styles.oldPrice}
						bg="success"
						size="s">
						{priceRu(price - oldPrice)}
					</Tag>
				)}
			</div>
			<div className={styles.credit}>
				{priceRu(credit)} ₽/<span className={styles['month']}>месяц</span>
			</div>
			<Stars
				className={styles.rating}
				rating={reviewAvg ?? initialRating}
			/>
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
			<ul className={styles.feature}>
				{characteristics.map((c) => (
					<li
						className={styles.characteristics}
						key={c.name}>
						<HTag tag="h4">{c.name}</HTag>
						<div className={styles.dots}></div>
						<PTag>{c.value}</PTag>
					</li>
				))}
			</ul>
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

			<Divider className={cn(styles.hr, styles.hr2)} />

			<div className={styles.actions}>
				<Button appearance="primary">Узнать подробнее</Button>
				<Button
					onClick={toggleOpen}
					arrow="right"
					appearance="ghost">
					Читать отзывы
				</Button>
			</div>
		</Card>
	);
}

export { ProductInfo };
