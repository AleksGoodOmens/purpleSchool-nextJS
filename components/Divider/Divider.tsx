import cn from 'classnames';
import styles from './Divider.module.scss';
import { DividerProps } from './Divider.props';

function Divider({ className, ...props }: DividerProps) {
	return (
		<hr
			className={cn(styles['divider'], className)}
			{...props}
		/>
	);
}

export { Divider };
