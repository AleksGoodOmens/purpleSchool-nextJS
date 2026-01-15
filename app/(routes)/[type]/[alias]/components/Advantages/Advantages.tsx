import { HTag, PTag, Tag } from '@/components';
import { IAdvantage } from '@/interfaces';
import CheckIcon from './check.svg';

import Image from 'next/image';
import styles from './styles.module.scss';
function Advantages({ advantages }: { advantages: IAdvantage[] }) {
	return (
		<article>
			<HTag tag="h2">Преимущества</HTag>
			{advantages.map((a) => (
				<div
					key={a.title}
					className={styles['item']}>
					<Tag bg="success">
						<Image
							src={CheckIcon}
							alt="check icon"
							width={50}
							height={50}
						/>
					</Tag>
					<HTag
						className={styles['title']}
						tag="h3">
						{a.title}
					</HTag>
					<hr />
					<PTag appearance="m">{a.description}</PTag>
				</div>
			))}
		</article>
	);
}

export { Advantages };
