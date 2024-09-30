import Logo from '@/components/logo/logo.svg';
import cn from 'classnames';
import { Menu } from '../../menu/Menu';
import styles from './styles.module.scss';

function Aside({ className }: { className: string }) {
	return (
		<aside className={cn(className, styles['aside'])}>
			<Logo />
			<div>поиск</div>
			<Menu />
		</aside>
	);
}

export { Aside };
