'use client';
import { MenuItem, TopLevelCategory } from '@/interfaces';
import { createContext, PropsWithChildren, useState } from 'react';

export interface IAppContext extends PropsWithChildren {
	menu: MenuItem[];
	defaultCategory: TopLevelCategory.Courses;
	setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
	menu: [],
	defaultCategory: TopLevelCategory.Courses
});

export const AppContextProvider = ({
	menu,
	defaultCategory,
	children
}: IAppContext) => {
	const [menuState, setMenuState] = useState(menu);

	const setMenu = (newMenu: MenuItem[]) => {
		setMenuState(newMenu);
	};
	return (
		<AppContext.Provider value={{ menu: menuState, defaultCategory, setMenu }}>
			{children}
		</AppContext.Provider>
	);
};
