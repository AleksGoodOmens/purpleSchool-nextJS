import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	PropsWithChildren
} from 'react';

export interface ButtonProps
	extends
		PropsWithChildren,
		Omit<
			DetailedHTMLProps<
				ButtonHTMLAttributes<HTMLButtonElement>,
				HTMLButtonElement
			>,
			'ref' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart'
		> {
	appearance: 'primary' | 'ghost' | 'disabled';
	arrow?: 'right' | 'down';
}
