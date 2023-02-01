import webpack from 'webpack';
import { buildLoaders, buildPlugins, buildResolvers } from './';

import { BuildOptions } from 'config/build/types/config';

export function buildWebpackConfig(
	options: BuildOptions
): webpack.Configuration {
	const { mode, paths } = options;

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: "[name].[contenthash].js",
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			// правила работы с разными расширениями 
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
		// для стэктрейса 
		devtool: 'inline-source-map',
	};
}
