import { HTag } from '@/components';
import { firstLevelMenu } from '@/helpers';

export async function generateStaticParams() {
	try {
		return firstLevelMenu.map((i) => ({ type: i.route }));
	} catch (error) {
		console.error('Error fetching menu:', error);
		return [];
	}
}

function Type({ params }: { params: { type: string } }) {
	return <HTag tag="h1">{params.type}</HTag>;
}

export default Type;
