import Image from 'next/image';
import logoIcon from './logo.svg';

export const Logo = () => {
	return (
		<Image
			src={logoIcon}
			alt="owl logo"
			width={'200'}
			height={'50'}
		/>
	);
};
