'use client';
import { useScrollY } from '@/hooks/useScrollY';
import { motion, useAnimation } from 'motion/react';
import { useEffect } from 'react';
import { ButtonIcon } from '../buttonIcon/ButtonIcon';
import styles from './up.module.scss';
export const Up = () => {
	const controls = useAnimation();
	const scrollY = useScrollY();
	const handleScrollY = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	useEffect(() => {
		controls.start({ opacity: scrollY / document.body.scrollHeight });
	}, [controls, scrollY]);
	return (
		<motion.div
			className={styles.up}
			animate={controls}
			initial={{ opacity: 0 }}
			onClick={handleScrollY}>
			<ButtonIcon
				appearance="primary"
				variant="up"
			/>
		</motion.div>
	);
};
