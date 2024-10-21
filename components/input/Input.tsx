import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import styles from './Input.module.scss';
import { InputProps } from './Input.props';

export const Input = forwardRef(
	(
		{ children, className, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		return (
			<input
				className={cn(styles['input'], className)}
				ref={ref}
				{...props}
			/>
		);
	}
);
