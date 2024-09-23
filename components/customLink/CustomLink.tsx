import Link from 'next/link';
import { CustomLinkProps } from './CustomLink.props';
import cn from 'classnames';
import styles from './styles.module.scss';

function CustomLink({
	href,
	children,
	appearance,
	className
}: CustomLinkProps) {
	return (
		<Link
			className={cn(className, styles['link'], {
				[styles['active']]: appearance === 'active',
				[styles['disabled']]: appearance === 'disabled',
				[styles['alt']]: appearance === 'alt'
			})}
			href={href}>
			{children}
		</Link>
	);
}

export { CustomLink };
