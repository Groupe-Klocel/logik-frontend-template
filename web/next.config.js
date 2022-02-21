/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");
const withAntdLess = require('next-plugin-antd-less');
const withPlugins = require("next-compose-plugins");

const plugins = [
	/* ...other plugins... */
	[
		withAntdLess({
			lessVarsFilePath: './src/styles/variables.less',
		})
	],
	nextTranslate,

	/* ...other plugins... */
];

module.exports = withPlugins(plugins, {
	reactStrictMode: true,
	});
