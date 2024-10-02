export interface IProducts {
	_id: string;
	categories: string[];
	tags: string[];
	title: string;
	image: string;
	description: string;
	link: string;
	price: number;
	credit: number;
	oldPrice: number;
	characteristics: Characteristic[];
	advantages?: string;
	initialRating: number;
	createdAt: string;
	updatedAt: string;
	__v: number;
	html: string;
	blog: {
		text: string;
		_id: string;
		bigImage?: string;
	};
	companyId: string;
	clicks: number;
	reviews: Review[];
	reviewCount: number;
	reviewAvg?: number;
}

export interface Characteristic {
	name: string;
	value: string;
}

export interface Review {
	_id: string;
	name: string;
	title: string;
	description: string;
	rating: number;
	productId: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}
