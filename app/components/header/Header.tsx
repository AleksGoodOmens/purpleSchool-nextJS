'use client';
import { ButtonIcon } from '@/components/buttonIcon/ButtonIcon';
import cn from 'classnames';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from '../../../public/icons/logo.svg';
import { Aside } from '../ui/aside/Aside';
import styles from './header.module.scss';
import { HeaderProps } from './header.props';

export const Header = ({ classNames }: HeaderProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const pathName = usePathname();
	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		setIsOpen(false);
	}, [usePathname]);

	const variants = {
		visible: { opacity: 1, x: 0, transition: { stiffness: 20 } },
		hidden: { opacity: 0, x: '100%' }
	};
	return (
		<header className={cn(classNames, styles['header'])}>
			<Logo />
			<ButtonIcon
				variant="menu"
				appearance="secondary"
				onClick={toggleOpen}
			/>
			{
				<motion.div
					className={styles.mobile}
					animate={isOpen ? 'visible' : 'hidden'}
					initial="hidden"
					variants={variants}>
					<Aside />
					<ButtonIcon
						className={styles.close}
						appearance="secondary"
						variant="close"
						onClick={toggleOpen}
					/>
				</motion.div>
			}
		</header>
	);
};
