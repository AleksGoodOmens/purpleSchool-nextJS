import cn from 'classnames';
import styles from './PTag.module.scss';
import { PTagProps } from './PTag.props';

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
