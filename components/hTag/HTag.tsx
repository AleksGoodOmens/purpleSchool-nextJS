import cn from 'classnames';
import { HTagProps } from './hTag.props';

import styles from './hTag.module.scss';

function HTag({ tag, children, className }: HTagProps) {
	switch (tag) {
		case 'h1':
			return <h1 className={cn(styles['h1'], className)}>{children}</h1>;
		case 'h2':
			return <h2 className={cn(styles['h2'], className)}>{children}</h2>;
		case 'h3':
			return <h3 className={cn(styles['h3'], className)}>{children}</h3>;
		case 'h4':
			return <h3 className={cn(styles['h4'], className)}>{children}</h3>;

		default:
			return <></>;
	}
}

export { HTag };
