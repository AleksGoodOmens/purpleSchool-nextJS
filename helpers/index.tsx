import { FirstLevelMenuItem, TopLevelCategory } from '@/interfaces';

import BooksIcon from './icons/books.svg';
import CourseIcon from './icons/courses.svg';
import ProductsIcon from './icons/products.svg';
import ServicesIcon from './icons/services.svg';

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Курсы',
		icon: <CourseIcon />,
		id: TopLevelCategory.Courses
	},
	{
		route: 'services',
		name: 'Сервисы',
		icon: <ServicesIcon />,
		id: TopLevelCategory.Services
	},
	{
		route: 'books',
		name: 'Книги',
		icon: <BooksIcon />,
		id: TopLevelCategory.Books
	},
	{
		route: 'products',
		name: 'Товары',
		icon: <ProductsIcon />,
		id: TopLevelCategory.Products
	}
];

export const priceRu = (price: number) =>
	price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const correctEnding = (amount: number): string => {
	if (amount >= 10) return correctEnding(Number(amount.toString().slice(-1)));
	const wordsList = ['отзывов', 'отзыв', 'отзыва'];
	return wordsList[amount >= 5 || amount === 0 ? 0 : amount >= 2 ? 2 : 1];
};
