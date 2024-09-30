import { HTag } from '@/components';
import Link from 'next/link';

export default function Home() {
	return (
		<main>
			<HTag tag="h1">Мой блог</HTag>
			<Link href={'/typography'}>to typography</Link>
		</main>
	);
}
