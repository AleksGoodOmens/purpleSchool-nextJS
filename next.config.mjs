/** @type {import('next').NextConfig} */
const nextConfig = {
	turbopack:{},
	images: {
		remotePatterns: [{
			protocol: 'https', hostname: 'old-images.hb.ru-msk.vkcs.cloud'}, {protocol: 'https', hostname:  'courses-top.ru'}]
	},
	
};

export default nextConfig;
