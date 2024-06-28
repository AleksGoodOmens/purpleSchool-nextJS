import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ weight: '400' });

export const metadata: Metadata = {
	title: 'Мой Блог',
	description: 'Создано мною в учебных целях'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
