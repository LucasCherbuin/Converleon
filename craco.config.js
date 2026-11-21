// craco.config.js
const webpack = require('webpack');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths, agrv }) => {
      // Ensure resolve and fallback objects exist
      webpackConfig.resolve = webpackConfig.resolve || {};
      webpackConfig.resolve.fallback = webpackConfig.resolve.fallback || {};
      webpackConfig.devtool = false;
      // Disable ESM "fully specified" resolution for .mjs/.js files
      // Prevents: "resolved as fully specified" errors for imports without extensions
      webpackConfig.module = webpackConfig.module || {};
      webpackConfig.module.rules = webpackConfig.module.rules || [];
      webpackConfig.module.rules.push({
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      });

      // Add only the fallbacks you actually need. Use require.resolve for shims.
      Object.assign(webpackConfig.resolve.fallback, {
        https: require.resolve('https-browserify'),
        http: require.resolve('stream-http'),
        fs: false, // fs isn't usable in the browser; mark false unless you shim it
        stream: require.resolve('stream-browserify'),
        child_process: false,
        // Map node 'path' to the browser shim (correct package name & resolved path)
        path: require.resolve('path-browserify'),
        // ensure process/browser is explicitly resolvable
        process: require.resolve('process/browser'),
        net: false,
        tls: false,
        querystring: require.resolve('querystring-es3'),
        os: require.resolve('os-browserify/browser'),
        crypto: require.resolve('crypto-browserify'),
        buffer: require.resolve('buffer/'),
      });

      // Provide globals (if needed by some libraries)
      webpackConfig.plugins = webpackConfig.plugins || [];
      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer'],
        })
      );

      // Expand ModuleScopePlugin allowed paths so CRA doesn't block these node_modules
      if (webpackConfig.resolve && Array.isArray(webpackConfig.resolve.plugins)) {
        webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.map((p) => {
          if (p && p.constructor && p.constructor.name === 'ModuleScopePlugin') {
            const allowed = [
              path.resolve(__dirname, 'node_modules', 'https-browserify'),
              path.resolve(__dirname, 'node_modules', 'path-browserify'),
              path.resolve(__dirname, 'node_modules', 'crypto-browserify'),
              path.resolve(__dirname, 'node_modules', 'stream-browserify'),
              path.resolve(__dirname, 'node_modules', 'buffer'),
              path.resolve(__dirname, 'node_modules', 'process'),
            ];

            return new ModuleScopePlugin(
              paths.appSrc,
              [paths.appPackageJson, ...allowed]
            );
          }
          return p;
        });
      }

      return webpackConfig;
    },
  },
};