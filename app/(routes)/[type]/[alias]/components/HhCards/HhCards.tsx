'use client';

import { Card, HTag, Tag } from '@/components';
import { priceRu } from '@/helpers';
import { HhCardsProps } from './HhCards.props';
import { Rates } from './Rates';
import styles from './styles.module.scss';

function HhCards({
	title,
	count,
	seniorSalary,
	juniorSalary,
	middleSalary
}: HhCardsProps) {
	return (
		<article className={styles['vacancies']}>
			<header className={styles['header']}>
				<HTag tag="h2">Вакансии - {title}</HTag>
				<Tag bg="error">hh.ru</Tag>
			</header>
			<div className={styles['grid']}>
				<Card className={styles['all']}>
					Всего вакансий <p className={styles['count']}>{priceRu(count)}</p>
				</Card>
				<Card className={styles['inner_grid']}>
					<div className={styles['salary']}>
						Начальный
						<p className={styles['value']}>{priceRu(juniorSalary)} ₽</p>
						<Rates value={1} />
					</div>
					<div className={styles['salary']}>
						Средний
						<p className={styles['value']}>{priceRu(middleSalary)} ₽</p>
						<Rates value={2} />
					</div>
					<div className={styles['salary']}>
						Профессионал
						<p className={styles['value']}>{priceRu(seniorSalary)} ₽</p>
						<Rates value={3} />
					</div>
				</Card>
			</div>
		</article>
	);
}

export { HhCards };
