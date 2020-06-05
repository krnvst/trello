const TerserPlugin = require('terser-webpack-plugin');

module.exports = function () {
    return {
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()],
        }
    };
};