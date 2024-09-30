'use client';
import { Button, CustomLink, HTag, PTag } from '@/components';

export default function Error({
	error,
	reset
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<>
			<HTag tag="h1">Что то пошло не так</HTag>
			<PTag appearance="l">{JSON.stringify(error)}</PTag>
			<Button
				appearance="ghost"
				onClick={reset}>
				reset
			</Button>
			<CustomLink
				appearance="alt"
				href="/">
				Вернутся на главную
			</CustomLink>
		</>
	);
}
