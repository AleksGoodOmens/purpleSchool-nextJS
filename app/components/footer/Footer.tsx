import styles from './styles.module.scss';
import cn from 'classnames';
import { FooterProps } from './Footer.props';
import { CustomLink, PTag } from '@/components';
import { format } from 'date-fns';

function Footer({ classNames }: FooterProps) {
	return (
		<footer className={cn(classNames, styles.footer)}>
			<PTag appearance="m">
				OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
			</PTag>
			<CustomLink
				appearance="alt"
				href="#"
				target="_blank">
				Пользовательское соглашение
			</CustomLink>
			<CustomLink
				appearance="alt"
				href="#"
				target="_blank">
				Политика конфиденциальности
			</CustomLink>
		</footer>
	);
}

export { Footer };
