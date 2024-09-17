import { PropsWithChildren } from 'react';

export interface TagProps extends PropsWithChildren {
	className?: string;
	type?: 'link' | 'div';
	href?: string;
	bg?: 'success' | 'error' | 'ghost' | 'accent' | 'default';
}
