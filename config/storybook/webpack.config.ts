import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  // ts
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('ts', 'tsx');

  return config;
};
