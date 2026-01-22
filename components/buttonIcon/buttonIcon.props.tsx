import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	PropsWithChildren
} from 'react';
import { buttonIcons } from './ButtonIcon';

export interface ButtonIconProps
	extends
		PropsWithChildren,
		DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		> {
	appearance: 'primary' | 'secondary';
	variant: keyof typeof buttonIcons;
}
