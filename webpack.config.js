var path = require('path');

// var autoprefixer = require('autoprefixer-core');
// var cssnext = require('cssnext');
// var doiuse = require('doiuse');
// var colors = require('colors');
// var wordwrap = require('wordwrap');
// var csswring = require('csswring');
// var nested = require('postcss-nested');
var sass = require('sass-loader');

module.exports = {
    entry: {
        app: [path.join(__dirname,'./src/js/app.js')],

    },
    output: {
        path: require('path').resolve('build'),
        publicPath: 'http://q.qunarzz.com:8080/webpack/build/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass'
            }
            // ,{
                // test: /\.js$/,
                // exclude: /node_modules/
                // loader: 'babel-loader?presets[]=es2015'
            // }
        ]
    },
    postcss: [
        nested,
        cssnext,
        doiuse({
            onFeatureUsage: function(info) {
                var source = info.usage.source;
                // file is whole require path, joined with !'s.. we want the last part
                var sourceFile = path.relative('.', source.input.file.split('!').pop())
                var sourceLine = sourceFile + ':' + source.start.line;
                // take out location info in message itself
                var message = info.message.split(': ').slice(1).join(': ')
                console.log('[doiuse]'.red + ' ' + sourceLine + ': ' + info.featureData.title + '\n');
                console.log(wordwrap(4, process.stdout.columns - 1)(message) + '\n');
            }
        }),
        autoprefixer,
        csswring
    ],
    plugins: []
};
