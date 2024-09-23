import cn from 'classnames';
import { PTagProps } from './PTag.props';
import styles from './PTag.module.scss';

function PTag({ children, className, appearance = 'm', ...props }: PTagProps) {
	return (
		<p
			className={cn(styles['p'], className, {
				[styles['s']]: appearance === 's',
				[styles['m']]: appearance === 'm',
				[styles['l']]: appearance === 'l'
			})}
			{...props}>
			{children}
		</p>
	);
}

export { PTag };
