import { IProduct } from '@/interfaces';

export interface ProductInfoProps extends IProduct {
	toggleOpen: () => void;
}
