'use client';
import cn from 'classnames';
import { StarsProps } from './Stars.props';
import styles from './styles.module.scss';

import Star from './star.svg';
import { useEffect, useState } from 'react';
import { Span } from 'next/dist/trace';

function Stars({ rating, isEditable = false, ...props }: StarsProps) {
	const [stars, setStars] = useState<JSX.Element[]>(
		new Array(5).fill(<span></span>)
	);

	useEffect(() => {
		constructRating(rating);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rating]);

	const constructRating = (r: number) => {
		const starsArray = stars.map((_, i) => {
			return (
				<Star
					key={i}
					className={cn(styles['star'], {
						[styles['filled']]: i < r
					})}
				/>
			);
		});
		setStars(starsArray);
	};

	return (
		<div {...props}>
			{stars.map((s, i) => (
				<span key={i}>{s}</span>
			))}
		</div>
	);
}

export { Stars };
