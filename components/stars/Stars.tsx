'use client';
import cn from 'classnames';
import { StarsProps } from './Stars.props';
import styles from './styles.module.scss';

import {
	ForwardedRef,
	forwardRef,
	JSX,
	KeyboardEvent,
	useEffect,
	useRef,
	useState
} from 'react';
import Star from './star.svg';

export const Stars = forwardRef(
	(
		{
			error,
			rating = 0,
			className,
			setRating,
			isEditable,
			...props
		}: StarsProps,
		ref: ForwardedRef<HTMLDivElement>
	) => {
		const [stars, setStars] = useState<JSX.Element[]>(new Array(5).fill(<></>));

		const ratingArrayRef = useRef<HTMLSpanElement[]>([]);

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

		const computeFocus = (r: number, i: number): number => {
			if (!isEditable) return -1;
			if (!r && i === 0) return 0;
			if (r === i + 1) return 0;

			return -1;
		};

		const updateRatingArrayRef = (el: HTMLSpanElement | null) => {
			if (el)
				if (!ratingArrayRef.current.includes(el))
					ratingArrayRef.current.push(el);
		};

		const constructRating = (curRating: number) => {
			const starsArray = stars.map((_, i) => {
				return (
					<span
						onKeyDown={handleKey}
						onMouseEnter={() => onHover(++i)}
						onMouseLeave={() => onHover(rating)}
						onClick={() => onClick(i)}
						key={i}
						className={cn(styles['star'], {
							[styles['filled']]: i < curRating,
							[styles['editable']]: isEditable === true
						})}
						tabIndex={computeFocus(rating, i)}
						ref={updateRatingArrayRef}>
						<Star />
					</span>
				);
			});
			setStars(starsArray);
		};

		const handleKey = (e: KeyboardEvent) => {
			console.log(e.currentTarget, isEditable);
			if (!isEditable || !setRating) return;

			if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
				e.preventDefault();

				if (!rating) {
					setRating(1);
				} else {
					setRating(rating < 5 ? rating + 1 : 5);
				}

				ratingArrayRef.current[rating < 5 ? rating : 4]?.focus();
			}

			if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
				e.preventDefault();
				setRating(rating > 1 ? rating - 1 : 1);
				ratingArrayRef.current[rating > 1 ? rating - 2 : 0]?.focus();
			}
		};

		return (
			<div className={cn(styles.wrapper, className)}>
				<div
					className={cn(className, styles['stars'], {
						[styles['editable']]: isEditable
					})}
					ref={ref}
					{...props}>
					{...stars}
				</div>
				{error && <div className={styles.error}>{error?.message}</div>}
			</div>
		);
	}
);
