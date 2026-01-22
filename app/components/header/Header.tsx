import { ButtonIcon } from '@/components/buttonIcon/ButtonIcon';
import { Logo } from '@/components/logo/Logo';
import cn from 'classnames';
import styles from './header.module.scss';
import { HeaderProps } from './header.props';

export const Header = ({ classNames }: HeaderProps) => {
	return (
		<header className={cn(classNames, styles['header'])}>
			<Logo />
			<ButtonIcon
				variant="menu"
				appearance="secondary"
			/>
		</header>
	);
};
