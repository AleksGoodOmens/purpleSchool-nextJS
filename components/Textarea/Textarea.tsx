import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import styles from './Textarea.module.scss';
import { TextareaProps } from './Textarea.props';

export const Textarea = forwardRef(
	(
		{ children, className, error, ...props }: TextareaProps,
		ref: ForwardedRef<HTMLTextAreaElement>
	) => {
		return (
			<div className={cn(className, styles.wrapper)}>
				<textarea
					className={cn(styles['textarea'], className)}
					ref={ref}
					{...props}
				/>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	}
);
