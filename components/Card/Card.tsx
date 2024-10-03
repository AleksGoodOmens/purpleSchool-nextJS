import cn from 'classnames';
import styles from './Card.module.scss';
import { CardProps } from './Card.props';

function Card({ children, className, color = 'light', ...props }: CardProps) {
	return (
		<article
			className={cn(styles['card'], className, {
				[styles['dark']]: color === 'dark'
			})}
			{...props}>
			{children}
		</article>
	);
}

export { Card };
