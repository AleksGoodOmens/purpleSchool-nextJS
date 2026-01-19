'use client';
import { getMenu } from '@/api/getMenu';
import { CustomLink } from '@/components';
import { AppContext } from '@/context/app.context';
import { firstLevelMenu } from '@/helpers';
import { MenuItem } from '@/interfaces';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import styles from './styles.module.scss';

import { motion } from 'motion/react';

function Menu() {
	const pathRoute = usePathname();

	const { menu, setMenu } = useContext(AppContext);

	const openSecondLevelMenu = (secondCategory: string) => {
		setMenu &&
			setMenu(
				menu.map((m) => {
					if (m._id.secondCategory === secondCategory) m.isOpened = !m.isOpened;
					return m;
				})
			);
	};

	const changeCurrentMenu = async (_id: number) => {
		const newMenu = await getMenu<MenuItem[]>(_id);
		setMenu && setMenu(newMenu);
	};

	const createFirstLevel = () => {
		return (
			<ul>
				{firstLevelMenu.map((item) => (
					<li key={item.route}>
						<CustomLink
							className={cn(styles['firstLevelItem'])}
							appearance={pathRoute.includes(item.route) ? 'active' : 'default'}
							href={`/${item.route}`}>
							{item.icon}
							<span onClick={() => changeCurrentMenu(item.id)}>
								{item.name}
							</span>
						</CustomLink>
						{pathRoute.includes(item.route) && createSecondLevel(item.route)}
					</li>
				))}
			</ul>
		);
	};
	const createSecondLevel = (path: string) => {
		return (
			<ul className={styles['secondLevel']}>
				{menu.map((item) => {
					if (item.pages.map((p) => p.alias).includes(pathRoute.split('/')[2]))
						item.isOpened = true;

					return (
						<li
							className={cn(styles['secondLevelItem'])}
							onClick={() => openSecondLevelMenu(item._id.secondCategory)}
							key={item._id.secondCategory}>
							{item._id.secondCategory}
							{createThirdLevel(item, path)}
						</li>
					);
				})}
			</ul>
		);
	};
	const createThirdLevel = (item: MenuItem, path: string) => {
		const variants = {
			visible: { transition: { when: 'beforeChildren', staggerChildren: 0.3 } },
			hidden: {}
		};
		const variantsForChildren = {
			visible: { opacity: 1, height: 'auto' },
			hidden: { opacity: 0, height: 0 }
		};

		return (
			<motion.ul
				layout
				style={{ overflow: 'hidden' }}
				variants={variants}>
				{item.pages.map((page) => (
					<motion.li
						key={page._id}
						variants={variantsForChildren}
						animate={item.isOpened ? 'visible' : 'hidden'}
						initial={item.isOpened ? 'visible' : 'hidden'}>
						<CustomLink
							className={cn(styles['thirdLevelItem'])}
							appearance={pathRoute.includes(page.alias) ? 'active' : 'default'}
							href={`/${path}/${page.alias}`}>
							<span>{page.category}</span>
						</CustomLink>
					</motion.li>
				))}
			</motion.ul>
		);
	};

	return <div className={styles['menu']}>{createFirstLevel()}</div>;
}

export { Menu };
