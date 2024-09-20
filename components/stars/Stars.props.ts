import { HTMLAttributes } from 'react';

export interface StarsProps extends HTMLAttributes<HTMLDivElement> {
	isEditable?: boolean;
	rating: number;
	setRating?: () => void;
}
