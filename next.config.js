/** @type {import('next').NextConfig} */

// const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
    reactStrictMode: true,
    swcMinify: true
    // webpack: (config, options) => {
    //     config.plugins.push(new StylelintPlugin())
    //     return config
    // }
}
