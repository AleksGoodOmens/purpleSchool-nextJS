'use client';
import cn from 'classnames';
import { KeyboardEvent, useState } from 'react';
import styles from './contentLink.module.scss';

export const ContentLink = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const skipMenuAction = (key: KeyboardEvent) => {
		if (key.code === 'space' || key.code === 'enter') {
			key.preventDefault();
		}
		setIsVisible(false);
	};

	return (
		<a
			tabIndex={100}
			className={cn(styles.link, isVisible && styles.visible)}
			href="#content"
			onKeyDown={skipMenuAction}
			onFocus={() => setIsVisible(true)}>
			skip menu
		</a>
	);
};
