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

async function Type({ params }: { params: Promise<{ type: string }> }) {
	const { type } = await params;
	return <HTag tag="h1">{type}</HTag>;
}

export default Type;
