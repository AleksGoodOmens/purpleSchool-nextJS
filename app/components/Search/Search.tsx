'use client';
import { Button, Input } from '@/components';
import { useRouter } from 'next/navigation';
import { KeyboardEvent, useState } from 'react';
import SearchIcon from './SearchIcon.svg';
import styles from './styles.module.scss';
function Search() {
	const [value, setValue] = useState('');

	const router = useRouter();
	const goToSearch = () => {
		if (!value.length) {
			router.back();
			return;
		}
		const searchParams = new URLSearchParams({ q: value }).toString();
		router.push(`/search?&${searchParams}`);
	};

	const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			if (!value.length) {
				router.back();
				return;
			}
			goToSearch();
		}
	};

	return (
		<div className={styles['search']}>
			<Input
				value={value}
				placeholder="Поиск..."
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={onKeyDown}
			/>
			<Button
				onClick={goToSearch}
				appearance="primary"
				className={styles['icon']}>
				<SearchIcon />
			</Button>
		</div>
	);
}

export { Search };
