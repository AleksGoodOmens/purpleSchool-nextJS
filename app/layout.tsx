import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({ subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
	title: 'Мой Блог - главная страница',
	description: 'Создано мною в учебных целях'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={openSans.className}>{children}</body>
		</html>
	);
}
