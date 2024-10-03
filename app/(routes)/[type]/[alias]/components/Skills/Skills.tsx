import { HTag, Tag } from '@/components';
import styles from './styles.module.scss';

function Skills({ skills }: { skills: string[] }) {
	return (
		<article>
			<HTag tag="h2">Получаемые навыки</HTag>
			<div className={styles['row']}>
				{skills.map((a) => (
					<Tag
						key={a}
						size="s"
						bg="accent"
						className={styles['tag']}>
						{a}
					</Tag>
				))}
			</div>
		</article>
	);
}

export { Skills };
