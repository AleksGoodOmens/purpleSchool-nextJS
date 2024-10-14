import Logo from '@/components/logo/logo.svg';
import cn from 'classnames';
import { Menu } from '../../menu/Menu';
import { Search } from '../../Search/Search';
import styles from './styles.module.scss';

function Aside({ className }: { className: string }) {
	return (
		<aside className={cn(className, styles['aside'])}>
			<Logo />
			<Search />
			<Menu />
		</aside>
	);
}

export { Aside };
