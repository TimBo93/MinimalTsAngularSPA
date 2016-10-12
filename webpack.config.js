module.exports = {
    entry: 'app/Applications/App',
    output: {
        path: './wwwroot/build',
        filename: 'bundle.js',
    },

    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        root: __dirname,
        extensions: ['.ts']
    },

      // Source maps support ('inline-source-map' also works)
    devtool: 'source-map',
    devServer: {
        contentBase: "wwwroot/build/"
    },

    // Add the loader for .ts files.
    module: {
        loaders: [
        {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
        }]
    }
};
