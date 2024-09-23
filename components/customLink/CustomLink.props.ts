import { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

export interface CustomLinkProps extends LinkProps, PropsWithChildren {
	className?: string;
	appearance?: 'active' | 'disabled' | 'alt';
}
