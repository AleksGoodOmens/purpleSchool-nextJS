import cn from 'classnames';
import styles from './Tag.module.scss';
import { TagProps } from './Tag.props';

function Tag({
	children,
	size = 'm',
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
						[styles['error']]: bg === 'error',
						[styles['m']]: size === 'm',
						[styles['s']]: size === 's'
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
						[styles['error']]: bg === 'error',
						[styles['m']]: size === 'm',
						[styles['s']]: size === 's'
					})}
					{...props}>
					{children}
				</div>
			);
	}
}

export { Tag };
