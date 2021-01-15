const path = require('path')
const webpack = require('webpack')
// const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    stories: ['../src/**/*.story.@(md|mdx)', '../src/**/*.story.@(ts|tsx)'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-a11y',
        '@storybook/addon-viewport',
        '@storybook/addon-docs',
        '@storybook/addon-controls',
        'storybook-addon-jsx',
        '@storybook/addon-backgrounds',
        '@storybook/addon-queryparams',
    ],
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
          });

        config.plugins.push(
            new webpack.NormalModuleReplacementPlugin(
                /classCodes-all$/,
                require.resolve('./__mocks__/classCodes-all.js')
            )
        )
        config.externals = config.externals || {}
        config.externals['lodash'] = '_'
        config.externals['moment'] = 'moment'

        return config
    },
}
