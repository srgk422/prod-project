import webpack, { DefinePlugin } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssModules } from '../build/loaders/buildCssModules';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.unshift(paths.src);
  config.resolve?.extensions?.push('ts', 'tsx');

  if (config.module?.rules) {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module?.rules?.map((rule: webpack.RuleSetRule | '...') => {
      if (rule !== '...' && /svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCssModules(true));

    config.plugins?.push(new DefinePlugin({
      __IS_DEV__: true,
    }));
  }

  return config;
};
