'use client';
import cn from 'classnames';
import { StarsProps } from './Stars.props';
import styles from './styles.module.scss';

import Star from './star.svg';
import { useEffect, useState, KeyboardEvent } from 'react';

function Stars({
	rating,
	setRating,
	isEditable = false,
	...props
}: StarsProps) {
	const [stars, setStars] = useState<JSX.Element[]>(
		new Array(5).fill(<span></span>)
	);

	useEffect(() => {
		constructRating(rating);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rating]);

	const onHover = (v: number) => {
		if (isEditable) {
			constructRating(v);
		}
	};

	const onClick = (v: number) => {
		if (setRating && isEditable) {
			setRating(++v);
		}
	};

	const constructRating = (r: number) => {
		const starsArray = stars.map((_, i) => {
			return (
				<Star
					key={i}
					onMouseEnter={() => onHover(++i)}
					onMouseLeave={() => onHover(rating)}
					onClick={() => onClick(i)}
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(e: KeyboardEvent) => e.code === 'Space' && onClick(i)}
					className={cn(styles['star'], {
						[styles['filled']]: i < r,
						[styles['editable']]: isEditable === true
					})}
				/>
			);
		});
		setStars(starsArray);
	};

	return (
		<div
			className={cn(styles['stars'], { [styles['editable']]: isEditable })}
			{...props}>
			{stars.map((s, i) => (
				<span key={i}>{s}</span>
			))}
		</div>
	);
}

export { Stars };
