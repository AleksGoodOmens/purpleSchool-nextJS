import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { PTag } from '../pTag/PTag';
import styles from './Input.module.scss';
import { InputProps } from './Input.props';

export const Input = forwardRef(
	(
		{ error, className, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		return (
			<div className={cn(styles.wrapper, className)}>
				<input
					className={cn(styles['input'])}
					ref={ref}
					{...props}
				/>
				{error && <PTag className={styles.error}>{error.message}</PTag>}
			</div>
		);
	}
);
