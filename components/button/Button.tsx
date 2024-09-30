import cn from 'classnames';
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
