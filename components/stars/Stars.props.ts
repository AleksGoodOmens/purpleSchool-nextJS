import { HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface StarsProps extends HTMLAttributes<HTMLDivElement> {
	isEditable: boolean;
	disabled?: boolean;
	rating: number | undefined;
	error?: FieldError;
	setRating?: (r: number) => void;
}
