import cn from 'classnames';
import Image from 'next/image';
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
					<Image
						src={ArrowIconSvg}
						width={12}
						height={12}
						alt="arrow"
					/>
				</span>
			) : (
				''
			)}
		</button>
	);
}

export { Button };
