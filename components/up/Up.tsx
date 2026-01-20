'use client';
import { useScrollY } from '@/hooks/useScrollY';
import { motion, useAnimation } from 'motion/react';
import { useEffect } from 'react';
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
		<motion.button
			className={styles.up}
			animate={controls}
			initial={{ opacity: 0 }}
			onClick={handleScrollY}>
			<svg
				width="21"
				height="13"
				viewBox="0 0 21 13"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<rect
					x="0.707107"
					y="9.89954"
					width="13"
					height="2"
					rx="1"
					transform="rotate(-45 0.707107 9.89954)"
					fill="white"
					stroke="black"
				/>
				<path
					d="M10.8284 1.58584L18.6066 9.36402C18.9971 9.75454 18.9971 10.3877 18.6066 10.7782C18.2161 11.1687 17.5829 11.1688 17.1924 10.7782L9.41423 3.00006C9.02371 2.60954 9.02372 1.97637 9.41423 1.58584C9.80476 1.19532 10.4379 1.19532 10.8284 1.58584Z"
					fill="white"
					stroke="black"
				/>
			</svg>
		</motion.button>
	);
};
