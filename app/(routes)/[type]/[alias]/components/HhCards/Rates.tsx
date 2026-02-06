import cn from 'classnames';
import Rate from './rate.svg';
import styles from './styles.module.scss';

function Rates({ value }: { value: number }) {
	return (
		<div className={styles['rates']}>
			{new Array(3).fill(<span />).map((_, i) => {
				return (
					<span
						key={i * value}
						className={cn({ [styles['filled']]: i < value })}>
						<Rate />
					</span>
				);
			})}
		</div>
	);
}

export { Rates };
