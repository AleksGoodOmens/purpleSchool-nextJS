import cn from 'classnames';
import { motion } from 'motion/react';
import ArrowIconSvg from './arrow.svg';
import styles from './button.module.scss';
import { ButtonProps } from './button.props';
function Button({
	children,
	appearance,
	arrow,
	className,
	...props
}: ButtonProps) {
	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			className={cn(styles['btn'], className, {
				[styles['ghost']]: appearance === 'ghost',
				[styles['primary']]: appearance === 'primary',
				[styles['disabled']]: appearance === 'disabled'
			})}
			{...props}>
			{children}
			{arrow ? (
				<span
					className={cn(styles['arrow'], {
						[styles['down']]: arrow === 'down',
						[styles['right']]: arrow === 'right'
					})}>
					<ArrowIconSvg />
				</span>
			) : (
				''
			)}
		</motion.button>
	);
}

export { Button };
