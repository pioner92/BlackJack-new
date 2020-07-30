const path = require('path')

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
            test: /\.(css|scss|sass)$/,
            use: ['style-loader','css-loader','sass-loader']
        },
            {
                test: /\.png$/,
                use: [
                    {
                        loader:'file-loader',
                        options: {
                            outputPath:'img'
                        }
                    }

                ],

            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    }
}