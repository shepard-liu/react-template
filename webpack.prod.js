
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const CompressionPlugin = require('compression-webpack-plugin');

const env = {
    production: true,
}

module.exports = merge(common(env), {
    mode: 'production',
    devtool: 'source-map',
    plugins: [new CompressionPlugin()]
});