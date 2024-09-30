import cn from 'classnames';
import styles from './Tag.module.scss';
import { TagProps } from './Tag.props';

function Tag({
	children,
	className,
	href,
	bg = 'default',
	type = 'div',
	...props
}: TagProps) {
	switch (type) {
		case 'link':
			return (
				<a
					className={cn(styles['tag'], className, {
						[styles['accent']]: bg === 'accent',
						[styles['ghost']]: bg === 'ghost',
						[styles['success']]: bg === 'success',
						[styles['error']]: bg === 'error'
					})}
					href={href}
					{...props}>
					{!href && 'забыл href'}
					{children}
				</a>
			);

		default:
			return (
				<div
					className={cn(styles['tag'], className, {
						[styles['accent']]: bg === 'accent',
						[styles['ghost']]: bg === 'ghost',
						[styles['success']]: bg === 'success',
						[styles['error']]: bg === 'error'
					})}
					{...props}>
					{children}
				</div>
			);
	}
}

export { Tag };
