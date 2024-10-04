import { SortEnum } from '@/app/(routes)/[type]/[alias]/components/Sorter/sorter.props';
import { IProduct } from '@/interfaces';

export type SortActions = { type: SortEnum };

export interface SortReducerState {
	sort: SortEnum;
	products: IProduct[] | null;
}

export const sortReducer = (state: SortReducerState, action: SortActions) => {
	switch (action.type) {
		case SortEnum.Rating:
			return {
				sort: SortEnum.Rating,
				products:
					state.products &&
					state.products.sort((a, b) =>
						a.initialRating > b.initialRating ? -1 : 1
					)
			};
		case SortEnum.Price:
			return {
				sort: SortEnum.Price,
				products:
					state.products &&
					state.products.sort((a, b) =>
						a.initialRating > b.initialRating ? 1 : -1
					)
			};

		default:
			throw new Error('неверный тип сортировки');
	}
};
