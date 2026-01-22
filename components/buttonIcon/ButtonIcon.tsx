import cn from 'classnames';
import styles from './buttonIcon.module.scss';
import { ButtonIconProps } from './buttonIcon.props';

export const buttonIcons = {
	up: (
		<svg
			width="21"
			height="13"
			viewBox="0 0 21 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<rect
				x="0.707107"
				y="9.89954"
				width="13"
				height="2"
				rx="1"
				transform="rotate(-45 0.707107 9.89954)"
				fill="white"
				stroke="black"
			/>
			<path
				d="M10.8284 1.58584L18.6066 9.36402C18.9971 9.75454 18.9971 10.3877 18.6066 10.7782C18.2161 11.1687 17.5829 11.1688 17.1924 10.7782L9.41423 3.00006C9.02371 2.60954 9.02372 1.97637 9.41423 1.58584C9.80476 1.19532 10.4379 1.19532 10.8284 1.58584Z"
				fill="white"
				stroke="black"
			/>
		</svg>
	),
	menu: (
		<svg
			width="20"
			height="17"
			viewBox="0 0 20 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<rect
				width="20"
				height="3"
				rx="1.5"
				fill="#7653FC"
			/>
			<rect
				y="7"
				width="20"
				height="3"
				rx="1.5"
				fill="#7653FC"
			/>
			<rect
				y="14"
				width="20"
				height="3"
				rx="1.5"
				fill="#7653FC"
			/>
		</svg>
	),
	close: (
		<svg
			width="19"
			height="19"
			viewBox="0 0 19 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<rect
				y="16.5104"
				width="23"
				height="3"
				rx="1.5"
				transform="rotate(-45 0 16.5104)"
				fill="#7653FC"
			/>
			<rect
				x="2.25305"
				width="23"
				height="3"
				rx="1.5"
				transform="rotate(45 2.25305 0)"
				fill="#7653FC"
			/>
		</svg>
	)
};

function ButtonIcon({
	appearance,
	variant,
	className,
	...props
}: ButtonIconProps) {
	return (
		<button
			className={cn(styles['btn'], className, {
				[styles['primary']]: appearance === 'primary',
				[styles['secondary']]: appearance === 'secondary'
			})}
			{...props}>
			{buttonIcons[variant]}
		</button>
	);
}

export { ButtonIcon };
