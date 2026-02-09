import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import styles from './Card.module.scss';
import { CardProps } from './Card.props';

export const Card = forwardRef(
	(
		{ children, className, color = 'light', tabIndex, ...props }: CardProps,
		ref: ForwardedRef<HTMLDivElement>
	) => {
		return (
			<article
				tabIndex={tabIndex}
				className={cn(styles['card'], className, {
					[styles['dark']]: color === 'dark'
				})}
				ref={ref}
				{...props}>
				{children}
			</article>
		);
	}
);
