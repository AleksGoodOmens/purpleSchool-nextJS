'use client';

import { ProductsProps } from './Products.props';

function Products({ products }: ProductsProps) {
	return (
		<div>
			{products.map((p) => (
				<div key={p._id}>
					{p.title}
					<span>-------{p.initialRating}-----</span>

					<span>{p.price}</span>
				</div>
			))}
		</div>
	);
}

export { Products };
