import { IProduct } from '@/interfaces';

export interface ITopPageProps {
	title: string;
	products: IProduct[] | null;
}
