'use client';
import { CustomLink } from '@/components';
import { AppContext } from '@/context/app.context';
import { firstLevelMenu } from '@/helpers';
import { PageItem } from '@/interfaces';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import styles from './styles.module.scss';

function Menu() {
	const { defaultCategory, menu, setMenu } = useContext(AppContext);

	const openSecondLevelMenu = (secondCategory: string) => {
		setMenu &&
			setMenu(
				menu.map((m) => {
					if (m._id.secondCategory === secondCategory) m.isOpened = !m.isOpened;
					return m;
				})
			);
	};

	const pathRoute = usePathname();

	const createFirstLevel = () => {
		return (
			<ul>
				{firstLevelMenu.map((item) => (
					<li key={item.route}>
						<CustomLink
							className={cn(styles['firstLevelItem'])}
							appearance={item.id === defaultCategory ? 'active' : 'default'}
							href={`/${item.route}`}>
							{item.icon}
							<span>{item.name}</span>
						</CustomLink>
						{item.id === defaultCategory && createSecondLevel(item.route)}
					</li>
				))}
			</ul>
		);
	};
	const createSecondLevel = (path: string) => {
		return (
			<ul className={styles['secondLevel']}>
				{menu.map((item) => {
					if (
						item.pages.map((p) => p.alias).includes(pathRoute.split('/')[2])
					) {
						item.isOpened = true;
					}
					return (
						<li
							className={cn(styles['secondLevelItem'])}
							onClick={() => openSecondLevelMenu(item._id.secondCategory)}
							key={item._id.secondCategory}>
							{item._id.secondCategory}
							{item.isOpened && createThirdLevel(item.pages, path)}
						</li>
					);
				})}
			</ul>
		);
	};
	const createThirdLevel = (pages: PageItem[], path: string) => {
		return (
			<ul>
				{pages.map((item) => (
					<li key={item._id}>
						<CustomLink
							className={cn(styles['thirdLevelItem'])}
							appearance={pathRoute.includes(item.alias) ? 'active' : 'default'}
							href={`/${path}/${item.alias}`}>
							<span>{item.category}</span>
						</CustomLink>
					</li>
				))}
			</ul>
		);
	};

	return <div className={styles['menu']}>{createFirstLevel()}</div>;
}

export { Menu };
