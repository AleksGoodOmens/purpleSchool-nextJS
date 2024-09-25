import { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

export interface CustomLinkProps
	extends PropsWithChildren,
		AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
	appearance?: 'active' | 'disabled' | 'alt';
}
