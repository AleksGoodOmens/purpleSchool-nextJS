import { useEffect, useState } from 'react';

export const useScrollY = (): Number => {
	const [scrollY, setScrollY] = useState(0);
	const isBrowser = typeof window !== undefined;
	const handleScrollY = () => {
		const currentScrollY = isBrowser ? window.scrollY : 0;
		setScrollY(currentScrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScrollY, { passive: true });
		return () => removeEventListener('scroll', handleScrollY);
	}, []);

	return scrollY;
};
