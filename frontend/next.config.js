/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '164.68.103.165',
				port: '1337',
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
  