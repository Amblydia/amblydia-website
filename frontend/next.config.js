/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'admin.amblydia.com',
				pathname: '/uploads/**',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '1337',
				pathname: '/uploads/**',
			},
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
			}
		],
	},
}
  
module.exports = nextConfig
  