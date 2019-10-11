var path = require('path');

module.exports = {
    entry: {
        index: './src/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'build'), //输出文件的绝对路径
        filename: '[name].js',
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            components: path.join(__dirname, 'components'),
            utils: path.join(__dirname, 'utils')
        }
    },
    devServer: {
        contentBase: "./",
        host: '127.0.0.1',
        port: 8088,
        inline: true,
        compress: true
    },
    module: {
        rules: [{
            test: /\.(tsx|ts|js)?$/,
            exclude: /node_modules/,
            loader: "awesome-typescript-loader"
        }]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};