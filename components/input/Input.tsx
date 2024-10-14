import cn from 'classnames';
import styles from './Input.module.scss';
import { InputProps } from './Input.props';
function Input({ children, className, ...props }: InputProps) {
	return (
		<input
			className={cn(styles['input'], className)}
			{...props}
		/>
	);
}

export { Input };
