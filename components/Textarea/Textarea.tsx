import cn from 'classnames';
import styles from './Textarea.module.scss';
import { TextareaProps } from './Textarea.props';
function Textarea({ children, className, ...props }: TextareaProps) {
	return (
		<textarea
			className={cn(styles['textarea'], className)}
			{...props}
		/>
	);
}

export { Textarea };
