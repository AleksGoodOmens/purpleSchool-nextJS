/** @type {import('next').NextConfig} */
const nextConfig = {
	turbopack: {
		rules: {
			'*.svg': {
				as: '*.js',
				loaders: ['@svgr/webpack']
			}
		}
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack']
		});
		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'old-images.hb.ru-msk.vkcs.cloud'
			},
			{ protocol: 'https', hostname: 'courses-top.ru' }
		]
	}
};

export default nextConfig;
