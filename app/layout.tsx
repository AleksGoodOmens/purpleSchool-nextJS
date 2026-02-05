import { getMenu } from '@/api/getMenu';
import { Up } from '@/components';
import { AppContextProvider } from '@/context/app.context';
import { TopLevelCategory } from '@/interfaces';
import cn from 'classnames';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { Aside, Footer, Header } from './components';
import { ContentLink } from './components/content-link/ContentLink';
import './globals.scss';
import styles from './layout.module.scss';

const openSans = Open_Sans({ subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
	title: 'OWLtop - главная страница',
	description: 'Создано мною в учебных целях'
};

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={cn(openSans.className, styles.wrapper)}>
				<AppContextProvider menu={await getMenu(TopLevelCategory.Courses)}>
					<Header classNames={styles.header} />
					<Aside className={styles.aside} />
					<ContentLink />
					<main
						id="content"
						className={styles.main}>
						{children}
					</main>
					<Footer classNames={styles.footer} />
					<Up />
				</AppContextProvider>
			</body>
		</html>
	);
}
