var path = require("path");

module.exports = {
    entry: './assets/typescript/classes/jokeApp.ts',
    devtool: 'inline-source-map',
    output: {
        library: 'JokeApp',
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    mode: 'development'
};