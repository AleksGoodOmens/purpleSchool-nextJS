import Link from 'next/link';
import { CustomLinkProps } from './CustomLink.props';
import cn from 'classnames';
import styles from './styles.module.scss';

function CustomLink({
	href,
	target,
	children,
	appearance,
	className
}: CustomLinkProps) {
	return (
		<Link
			target={target}
			className={cn(className, styles['link'], {
				[styles['active']]: appearance === 'active',
				[styles['disabled']]: appearance === 'disabled',
				[styles['alt']]: appearance === 'alt'
			})}
			href={href as string}>
			{children}
		</Link>
	);
}

export { CustomLink };
