import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import cn from 'classnames';
import './globals.scss';
import styles from './layout.module.scss';
import { Footer } from './components/footer/Footer';

const openSans = Open_Sans({ subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
	title: 'OWLtop - главная страница',
	description: 'Создано мною в учебных целях'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={cn(openSans.className, styles.wrapper)}>
				<header className={styles.header}>header</header>

				<aside className={styles.aside}>aside</aside>
				<main className={styles.main}>main{children}</main>
				<Footer classNames={styles.footer} />
			</body>
		</html>
	);
}
