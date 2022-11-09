/** @type {import('next').NextConfig} */
module.exports = {
	experimental: { appDir: true },
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ['pt-BR'],
		defaultLocale: 'pt-BR'
	}
}
