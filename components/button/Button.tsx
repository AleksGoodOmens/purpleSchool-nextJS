import cn from 'classnames';
import { ButtonProps } from './button.props';
import styles from './button.module.scss';
import ArrowIconSvg from './arrow.svg';
function Button({
	children,
	appearance,
	arrow,
	className,
	...props
}: ButtonProps) {
	return (
		<button
			className={cn(styles['btn'], className, {
				[styles['ghost']]: appearance === 'ghost',
				[styles['primary']]: appearance === 'primary'
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
		</button>
	);
}

export { Button };
