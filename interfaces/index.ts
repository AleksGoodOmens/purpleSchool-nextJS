export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products
}

export interface FirstLevelMenuItem {
	route: string;
	name: string;
	icon: JSX.Element;
	id: TopLevelCategory;
}

export interface PageItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
}

export interface MenuItem {
	_id: {
		secondCategory: string;
	};
	isOpened: boolean;
	pages: PageItem[];
}

export interface Page {
	_id: string;
	tags: string[];
	firstCategory: number;
	secondCategory: string;
	alias: string;
	title: string;
	category: string;
	tagsTitle: string;
	metaTitle: string;
	metaDescription: string;
	advantages: any[];
	createdAt: string;
	updatedAt: string;
	__v: number;
	hh: Hh;
	qas: any[];
	addresses: any[];
	categoryOn: string;
	blog: Blog;
	sravnikus: Sravnikus;
	learningclub: Learningclub;
}

export interface Hh {
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
	updatedAt: string;
	_id: string;
}

export interface Blog {
	h1: string;
	metaTitle: string;
	metaDescription: string;
	views: number;
	_id: string;
}

export interface Sravnikus {
	metaTitle: string;
	metaDescription: string;
	seoText: string;
	qas: Qa[];
	_id: string;
}

export interface Qa {
	question: string;
	answer: string;
}

export interface Learningclub {
	metaTitle: string;
	metaDescription: string;
	seoText: string;
	qas: Qa2[];
	_id: string;
}

export interface Qa2 {
	question: string;
	answer: string;
}
