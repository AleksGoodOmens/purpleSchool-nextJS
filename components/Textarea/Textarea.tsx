import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import styles from './Textarea.module.scss';
import { TextareaProps } from './Textarea.props';

export const Textarea = forwardRef(
	(
		{ children, className, ...props }: TextareaProps,
		ref: ForwardedRef<HTMLTextAreaElement>
	) => {
		return (
			<textarea
				className={cn(styles['textarea'], className)}
				ref={ref}
				{...props}
			/>
		);
	}
);
