import styles from './styles.module.scss';
import cn from 'classnames';
import { FooterProps } from './Footer.props';
import { CustomLink, PTag } from '@/components';

function Footer({ classNames }: FooterProps) {
	return (
		<footer className={cn(classNames, styles.footer)}>
			<PTag appearance="m">OwlTop © 2020 - 2021 Все права защищены</PTag>
			<CustomLink
				appearance="alt"
				href="#">
				Пользовательское соглашение
			</CustomLink>
			<CustomLink
				appearance="alt"
				href="#">
				Политика конфиденциальности
			</CustomLink>
		</footer>
	);
}

export { Footer };
