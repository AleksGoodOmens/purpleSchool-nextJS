import { HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface StarsProps extends HTMLAttributes<HTMLDivElement> {
	isEditable?: boolean;
	rating: number;
	error?: FieldError;
	setRating?: (r: number) => void;
}
