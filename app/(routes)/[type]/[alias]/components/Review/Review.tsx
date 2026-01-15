'use client';

import { Divider, PTag, Stars } from '@/components';
import styles from './Review.module.scss';
import { ReviewProps } from './Review.props';

import Avatar from './avatar.svg';

import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Image from 'next/image';

function Review({ ...props }: ReviewProps) {
	const { title, description, _id, name, rating, updatedAt } = props;
	return (
		<div className={styles.wrapper}>
			<Image
				src={Avatar}
				alt="avatar"
				width={100}
				height={100}
				className={styles.avatar}
			/>
			<PTag
				className={styles.name}
				appearance="s">
				{name}:
			</PTag>
			<PTag
				className={styles.title}
				appearance="s">
				{title}
			</PTag>
			<PTag
				className={styles.date}
				appearance="s">
				{format(new Date(updatedAt), 'dd MMMM yyyy', { locale: ru })}
			</PTag>
			<Stars
				className={styles.stars}
				rating={rating}
			/>

			<PTag
				className={styles.desc}
				appearance="s">
				{description}
			</PTag>
			<Divider className={styles.divider} />
		</div>
	);
}

export { Review };
