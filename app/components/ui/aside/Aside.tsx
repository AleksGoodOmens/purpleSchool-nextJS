import cn from 'classnames';
import Logo from '../../../../public/icons/logo.svg';
import { Menu } from '../../menu/Menu';
import { Search } from '../../Search/Search';
import styles from './styles.module.scss';

function Aside({ className }: { className?: string }) {
	return (
		<aside className={cn(className, styles['aside'])}>
			<Logo />
			<Search />
			<Menu />
		</aside>
	);
}

export { Aside };
