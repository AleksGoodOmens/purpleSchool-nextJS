'use client';
import { MenuItem } from '@/interfaces';
import { createContext, PropsWithChildren, useState } from 'react';

export interface IAppContext extends PropsWithChildren {
	menu: MenuItem[];

	setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
	menu: []
});

export const AppContextProvider = ({
	menu,

	children
}: IAppContext) => {
	const [menuState, setMenuState] = useState(menu);

	const setMenu = (newMenu: MenuItem[]) => {
		setMenuState(newMenu);
	};
	return (
		<AppContext.Provider value={{ menu: menuState, setMenu }}>
			{children}
		</AppContext.Provider>
	);
};
