import { PropsWithChildren } from 'react';

export interface PTagProps extends PropsWithChildren {
	className?: string;
	appearance?: 's' | 'm' | 'l';
}
