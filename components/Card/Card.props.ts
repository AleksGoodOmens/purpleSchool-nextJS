import { PropsWithChildren } from 'react';

export interface CardProps extends PropsWithChildren {
	className?: string;
	color?: 'light' | 'dark';
}
