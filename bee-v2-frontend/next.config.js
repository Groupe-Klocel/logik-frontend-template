/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");
const withAntdLess = require('next-plugin-antd-less');
const withPlugins = require("next-compose-plugins");

const plugins = [
	/* ...other plugins... */
	[
		withAntdLess({
			// modifyVars: {
			//   '@THEME--DARK': 'theme-dark',
			// },
			lessVarsFilePath: './src/styles/variables.less',
			// cssLoaderOptions: {
			// esModule: false,
			// sourceMap: false,
			// modules: {
			// mode: 'local',
			// localIdentName: '[hash:2]',
			// },
			// },
		})
	],

	/* ...other plugins... */
];

module.exports = withPlugins(plugins, {
	reactStrictMode: true,
	...nextTranslate(),
});
